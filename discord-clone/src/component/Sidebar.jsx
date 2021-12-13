// #4fb185

import ExpandMoreIcon from "@material-ui/icons/ExpandMoreOutlined";
import AddIcon from "@material-ui/icons/AddOutlined";
import React from "react";
import "../css/sidebar.css"
import SidebarChannel from "../component/SidebarChannel";

const Sidebar = () => {
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
    </div>
  );
};

export default Sidebar;
