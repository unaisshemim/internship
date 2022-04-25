import React from 'react'
import './header.scss'

import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SettingsIcon from '@mui/icons-material/Settings';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import RedoIcon from '@mui/icons-material/Redo';
import UndoIcon from '@mui/icons-material/Undo';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


function Header() {
  return (
    <div className="header-container">
      <div className="left-container">
        <div className="order-details">
          <h3 style={{fontSize:"20px"}} >Order 12345</h3>
          <p>Task Description</p>
          <p>Created by  name</p>
          <p>Send by  name</p>
         
        </div>
        
        <div className="task-details">
           <h3 style={{fontSize:"20px"}} >Task Name </h3>
            
             <p>Date Due  <span style={{margin:25}}>Date</span></p>
             <p>Send to   Name</p>
        </div>
      </div>
      <div className="right-container">
        <div className="user-details">
          <div className="work-info">
            <p>Workflow Name</p>
          </div>
          <div className="user-info">
            <div className="user-picture"></div>
            <div className="user-profile">
              Welcome Mr Das
              <p>Admin mode</p>
            </div>
            <div className="settings" >
              <p>Logout <PowerSettingsNewIcon/></p>
              <p>Settings <SettingsIcon/></p>
            </div>
            <div></div>



          </div>
        </div>
        <div className="user-functions">
            <div>Files <ContentCopyIcon fontSize="small"/></div>
            <div>Files <RedoIcon fontSize="small"/></div>
            <div>Files <UndoIcon fontSize="small"/></div>
            <div>Files <DoDisturbIcon fontSize="small"/></div>
            <div>Files <ArrowCircleRightIcon fontSize="small"/></div>
            
        </div>
      </div>
    </div>
  )
}

export default Header