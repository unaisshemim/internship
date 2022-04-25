import React from 'react'
import './sidebar.scss'
import data from './data'

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CreateIcon from '@mui/icons-material/Create';
import SearchIcon from '@mui/icons-material/Search';
import StarBorderIcon from '@mui/icons-material/StarBorder';


function SideBar() {
  console.log(data)
  return (
    <div className="sidebar-container">
     <div className="task-create-container">
      <div>Collapse Inbox <FormatListBulletedIcon fontSize="small"/></div>
      <div>Create New Task <CreateIcon fontSize="small"/></div>
      <div className="search-bar"  style={{borderRadius:"15px"}}>

        <input type="text" placeHolder="Search" /><SearchIcon/>
        </div>

     </div>
     <div className="task-details">
        <div className="tasks">
        {data.map((user)=>(
           <div>
           <p>Order Number {user.order}</p>
           <div className="medicine">
           <p >Distribute Medicine </p>
           <StarBorderIcon fontSize="small"/>
           </div>
           <p>Task Description</p>
         </div>
         ))}
        </div>

     </div>
    </div>
  )
}

export default SideBar