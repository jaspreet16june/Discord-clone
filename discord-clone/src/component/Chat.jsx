import React from 'react'
import ChatHeader from "./ChatHeader";
import "../css/chat.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
const Chat = () => {
    return (
        <div className='chat'>
            <ChatHeader />
            <div className="chat_messages">
            <h1>Message</h1>
            </div>
            <div className="chat_input">
            <AddCircleIcon fontSize='large'/>
            <form>
            <input placeholder='Message #Youtube'/>
            <button className='chat_inputbtn' type="submit">Send message</button>
            </form>
            <div className="chat_inputIcon">
            <CardGiftcardIcon />
            <GifIcon />
            <EmojiEmotionsIcon />
            </div>
            </div>
        </div>

        
    )
}

export default Chat
