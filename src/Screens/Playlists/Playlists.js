import "./playlists.css";
import PlaylistThumbnail from "./../../Components/PlaylistThumbnail/PlaylistThumbnail";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState, useRef, useEffect } from "react";
import { useProducts } from "./../../Context/products-context";
import { useToken } from "./../../Context/token-context";
import { useToast } from "../../Context/toast-context";

const Playlists = () => {
  const { encodedToken } = useToken();

  const { toggleToast, toastVisibility, toastColor, toastText } = useToast();

  useEffect(() => {
    fetch("/api/user/playlists", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: encodedToken,
      },
    });
  }, [encodedToken]);

  const inputRef = useRef(null);

  const { state, dispatch } = useProducts();

  useEffect(() => {
    localStorage.setItem(
      "PLAYLISTS_ARRAY",
      JSON.stringify(state.playlistsArray)
    );
  }, [state.playlistsArray]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 225,
    bgcolor: "background.paper",
    border: "none",
    outline: "none",
    color: "black",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="Playlists">
      <p
        style={{
          visibility: toastVisibility,
          backgroundColor: toastColor.backgroundColor,
          color: toastColor.color,
        }}
        className="message-toast"
      >
        {toastText}
      </p>
      <div className="playlists-header">
        <h1>Playlists</h1>
        <h3 onClick={handleOpen}>+ ADD A NEW PLAYLIST</h3>
      </div>
      <div className="playlists-section">
        {state.playlistsArray.map((playlist) => {
          return (
            <PlaylistThumbnail
              key={playlist.id}
              playlistId={playlist.id}
              title={playlist.name}
              length={playlist.videos.length}
              removePlaylist={() =>
                dispatch({
                  type: "Remove Playlist",
                  payload: { playlistId: playlist.id, token: encodedToken },
                })
              }
            />
          );
        })}
      </div>
      <Modal
        className="playlist-modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="playlist-modal-box" sx={style}>
          <form>
            <input
              ref={inputRef}
              id="playlist-name"
              type="text"
              placeholder="Playlist Name"
            />
          </form>
          <button
            onClick={() => {
              const foundPlaylist = state.playlistsArray.find(
                (playlist) => playlist.name === inputRef.current.value
              );
              if (foundPlaylist) {
                toggleToast(
                  `Playlist - ${inputRef.current.value} already exists!`,
                  "red",
                  "whitesmoke"
                );
              } else if (inputRef.current.value.length === 0) {
                toggleToast(
                  "Please enter a name for the playlist!",
                  "red",
                  "whitesmoke"
                );
              } else {
                dispatch({
                  type: "Add Playlist",
                  payload: {
                    id: state.playlistsArray.length + 1,
                    name: inputRef.current.value,
                    videos: [],
                    token: encodedToken,
                    mockBeePayload: {
                      title: inputRef.current.value,
                      description: "",
                      id: state.playlistsArray.length + 1,
                    },
                  },
                });
                handleClose();
              }
            }}
          >
            Add
          </button>
        </Box>
      </Modal>
    </div>
  );
};

export default Playlists;
