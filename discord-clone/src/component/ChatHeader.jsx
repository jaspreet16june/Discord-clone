import React from 'react';
import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import GroupIcon from "@material-ui/icons/Group";
import SearchIcon from "@material-ui/icons/Search";
import SendIcon from "@material-ui/icons/Send";
import HelpIcon from "@material-ui/icons/HelpOutline";
import "../css/chatHeader.css";

const ChatHeader = () => {
    return (
        <div className = "Chat_header">
            <div className="chat_headerLeft">
            <h3><span className='chat_headerHash'>#</span>Youtube</h3>
            </div>
            <div className="chat_headerRight">
            <NotificationsIcon />
            <EditLocationIcon />
            <GroupIcon />
            <div className="chatHeader_search">
            <input type="text" placeholder='Search'  />
            <SearchIcon className='search'/>
            </div>
            <SendIcon />
            <HelpIcon />
            </div>
        </div>
    )
}

export default ChatHeader
