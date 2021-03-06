//Import CSS
import "./MessageSuccess.css";

//Import React Destructuring
import * as React from "react";

//Material UI
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const MessageSuccess = ({ purchaseID }) => {
  return (
    <Stack spacing={2}>
      <Alert severity="success" className="MessageSuccess">
        Gracias por su compra! su id de transacción es: {purchaseID}
      </Alert>
    </Stack>
  );
};

export default MessageSuccess;
