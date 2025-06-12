import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Textarea from "@mui/material/TextField";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useSnackbar } from "./useSnackbar";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
};

function CommentModal({ open, handleClose }) {

  const { showSnackbar } = useSnackbar();
  const showMessage = (msg, status) => {
    showSnackbar(msg, status);
  };

  const [comment, setComment] = useState("");

  const handleSubmitComment = () => {
    if (!comment) {
      showMessage('enter comments', 'warning');
      return;
    }
    console.log(comment);

    
  };


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add comments
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              label="Write your comment"
              placeholder="Type your feedback here..."
              multiline
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              variant="outlined"
              sx={{
                width: "100%",
                fontSize: "16px",
                "& .MuiInputBase-root": {
                  padding: 1,
                  maxHeight: 200,
                  overflowY: "auto",
                  alignItems: "flex-start",
                },
                "& textarea": {
                  resize: "vertical",
                  minHeight: "80px",
                  wordBreak: "break-word",
                  whiteSpace: "pre-wrap",
                },
              }}
            />

            <Button onClick={handleSubmitComment} variant="contained" sx={{ mt: 2 }}>
              Submit
            </Button>

            
              
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default CommentModal;
