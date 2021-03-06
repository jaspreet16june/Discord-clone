import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
import SidebarDown from "../component/SidebarDown"
import ExpandMoreIcon from "@material-ui/icons/ExpandMoreOutlined";
import AddIcon from "@material-ui/icons/AddOutlined";
import React from "react";
import "../css/sidebar.css"
import SidebarChannel from "../component/SidebarChannel";
import { useSelector } from "react-redux";


const Sidebar = () => {
 const user = useSelector((state) => state)
  return (
    <div className="sidebar">
      <div className="sidebar_Top">
        <h3>Clever Programmar</h3>
        <ExpandMoreIcon />
      </div>
      <div className="sidebar_channels">
        <div className="sidebar_channelsHeader">
          <div className="sidebar_Header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon className="sidebar_addChannel" />
        </div>
        <div className="sidebarChannels_list">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>
      <div className="sidebar_down">
        <SidebarDown />
      </div>
      <div className="sidebar_profile">
        <Avatar src ={user.user.photo}/>
        <div className="sidebar_profileInfo">
          <h3>{user.user.displayName}</h3>
          <p>{user.user.email}</p>
        </div>
        <div className="sidebar_profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
