import "./movie.css";
import { BigPlayButton, Player } from "video-react";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import DeleteIcon from "@mui/icons-material/Delete";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useProducts } from "./../../Context/products-context";
import { useNavigate } from "react-router-dom";
import { useToken } from "./../../Context/token-context";

const Movie = (props) => {
  let navigate = useNavigate();
  const { state, dispatch } = useProducts();

  const { encodedToken } = useToken();

  useEffect(() => {
    localStorage.setItem(
      "PLAYLISTS_ARRAY",
      JSON.stringify(state.playlistsArray)
    );
  }, [state]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 225,
    bgcolor: "var(--binge-grey)",
    border: "none",
    outline: "none",
    color: "whitesmoke",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="Movie">
      <div
        onClick={() => {
          encodedToken === "" ? navigate("/login") : props.addToHistory();
        }}
      >
        <Player poster={props.thumbnail} src={props.source}>
          <BigPlayButton position="center" />
        </Player>
      </div>
      <div className="movie-card-footer">
        <p className="movie-title">{props.title}</p>
        <div className="footer-icons-group">
          <ThumbUpIcon
            style={{ color: props.likeButtonColor }}
            onClick={() => {
              encodedToken === "" ? navigate("/login") : props.addToLiked();
            }}
            fontSize="small"
          />
          <ThumbDownIcon
            style={{ color: props.dislikeButtonColor }}
            onClick={() => {
              encodedToken === ""
                ? navigate("/login")
                : props.removeFromLiked();
            }}
            fontSize="small"
          />
          <WatchLaterIcon
            style={{ color: props.watchLaterButtonColor }}
            onClick={() => {
              encodedToken === ""
                ? navigate("/login")
                : props.addToWatchLater();
            }}
            fontSize="small"
          />
          {props.historyPage && (
            <DeleteIcon onClick={props.removeFromHistory} fontSize="small" />
          )}
          {props.playlistPage && (
            <DeleteIcon onClick={props.removeFromPlaylist} fontSize="small" />
          )}
          {!props.playlistPage && !props.historyPage && (
            <PlaylistAddIcon
              onClick={() => {
                if (encodedToken === "") navigate("/login");
                else if (state.playlistsArray.length === 0)
                  navigate("/playlists");
                else handleOpen();
              }}
            />
          )}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <CloseIcon
                onClick={() => handleClose()}
                className="modal-button"
              />
              {state.playlistsArray.map((playlist) => {
                return (
                  <div
                    key={playlist.id}
                    className="
                playlist-name"
                  >
                    <label htmlFor="modal-checkbox">
                      <h3>{playlist.name}</h3>
                    </label>

                    <input
                      id="modal-checkbox"
                      onClick={(event) => {
                        dispatch({
                          type: "Add to Playlist",
                          payload: {
                            playlistId: playlist.id,
                            video: {
                              _id: props._id,
                              thumbnail: props.thumbnail,
                              source: props.source,
                              title: props.title,
                              category: props.category,
                            },
                            targetElement: event.target,
                          },
                        });
                      }}
                      type="checkbox"
                      defaultChecked={
                        playlist.videos.find(
                          (element) => element._id === props._id
                        )
                          ? true
                          : false
                      }
                    />
                  </div>
                );
              })}
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Movie;
