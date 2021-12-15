import React from "react";
import "../css/Message.css";
import { Avatar } from "@material-ui/core";

const Message = () => {
  return (
    <div className="message">
      <Avatar />
      <div className="message_info">
        <h4>
          I am Jaspreet 
          <span className="message_timestamp">Timestamp</span>
        </h4>

        <p>this is my message</p>
      </div>
    </div>
  );
};

export default Message;
