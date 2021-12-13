import React from 'react'
import SignalIcon from "@material-ui/icons/SignalCellularAltOutlined";
import ErrorIcon from "@material-ui/icons/ErrorOutline";
import CallIcon from "@material-ui/icons/Call";
import "../css/sidebarDown.css"
const SidebarDown = () => {
    return (
        <div className='sidebar_voice'>
            {/* <div className="sidebarInside"> */}
            <SignalIcon className='sidebar_voioceIcon'
            fontSize='large' />
            <div className="sidebar_voiceInfo">
            <h3>Voice Connected</h3>
            <p>Stream</p>
            </div>
   
            <div className="sidebar_voiceIcons">
            <ErrorIcon />
            <CallIcon />
            </div>
        </div>
    )
}

export default SidebarDown
