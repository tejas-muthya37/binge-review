import "./history.css";
import Movie from "./../../Components/Movie/Movie";
import { useProducts } from "./../../Context/products-context";
import { useEffect } from "react";
import { useToken } from "./../../Context/token-context";

const History = () => {
  const { state, dispatch } = useProducts();

  const { encodedToken } = useToken();

  useEffect(() => {
    fetch("/api/user/history", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: encodedToken,
      },
    });
  }, [encodedToken]);

  useEffect(() => {
    localStorage.setItem("LIKED_ARRAY", JSON.stringify(state.likedArray));
    localStorage.setItem(
      "WATCH_LATER_ARRAY",
      JSON.stringify(state.watchLaterArray)
    );
    localStorage.setItem("HISTORY_ARRAY", JSON.stringify(state.historyArray));
    localStorage.setItem("DISLIKED_ARRAY", JSON.stringify(state.dislikedArray));
  }, [
    state.likedArray,
    state.watchLaterArray,
    state.historyArray,
    state.dislikedArray,
  ]);

  return (
    <div className="History">
      <div className="history-header">
        {state.historyArray.length > 0 && <h1>History</h1>}
        {state.historyArray.length > 0 && (
          <button
            onClick={() =>
              dispatch({
                type: "Clear History",
                payload: encodedToken,
              })
            }
          >
            Clear History
          </button>
        )}
      </div>

      <div className="history-section">
        {state.historyArray.length === 0 && (
          <h1 className="empty-history">Nothing in History!</h1>
        )}
        {state.historyArray.length > 0 &&
          state.historyArray.map((movie, index) => {
            return (
              <Movie
                key={index}
                source={movie.source}
                thumbnail={movie.thumbnail}
                title={movie.title}
                historyPage={true}
                addToLiked={() =>
                  dispatch({
                    type: "Add to Liked",
                    payload: { video: movie, token: encodedToken },
                  })
                }
                removeFromLiked={() =>
                  dispatch({
                    type: "Remove from Liked",
                    payload: { video: movie, token: encodedToken },
                  })
                }
                addToWatchLater={() =>
                  dispatch({
                    type: "Add to Watch Later",
                    payload: { video: movie, token: encodedToken },
                  })
                }
                removeFromHistory={() =>
                  dispatch({
                    type: "Remove from History",
                    payload: { video: movie, token: encodedToken },
                  })
                }
              />
            );
          })}
      </div>
    </div>
  );
};

export default History;
