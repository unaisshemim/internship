import React from "react";
import "./main.scss";

import SaveIcon from "@mui/icons-material/Save";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import BackupIcon from "@mui/icons-material/Backup";
import PrintIcon from "@mui/icons-material/Print";
import SearchIcon from "@mui/icons-material/Search";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import PanToolIcon from "@mui/icons-material/PanTool";
import PanToolOutlinedIcon from "@mui/icons-material/PanToolOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import ZoomOutOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import Divider from '@mui/material/Divider';


function Main() {
  return (
    <div className="main-container">
      <div className="tools-container">
        <div className="left-tool-container">
          <ul>
            <li>
              <SaveIcon sx={{ color: "white" }} fontSize="small" />
            </li>
            
            <li>
              <StarBorderIcon sx={{ color: "white" }} fontSize="small" />
            </li>
            <li>
              <BackupIcon sx={{ color: "white" }} fontSize="small" />
            </li>
            <li>
              <PrintIcon sx={{ color: "white" }} fontSize="small" />
            </li>
            <li>
              <SearchIcon sx={{ color: "white" }} fontSize="small" />
            </li>
          </ul>
        </div>
        <div className="right-tool-container">
          <ul>
            <li>
              <ArrowCircleDownIcon sx={{ color: "white" }} fontSize="small" />
            </li>
            <li>

            <ArrowCircleUpIcon sx={{ color: "grey" }} fontSize="small" />
            </li>
            <li>
              <p>1/10</p>
            </li>
            <li>
              <PanToolOutlinedIcon sx={{ color: "white" }} fontSize="small" />
            </li>
            <li>
              <ZoomInOutlinedIcon sx={{ color: "white" }} fontSize="small" />
            </li>
            <li>
              <ZoomOutOutlinedIcon sx={{ color: "white" }} fontSize="small" />
            </li>
            <li>
              <p>243% </p>
            </li>

            <li>
              <ArrowDropDownOutlinedIcon
                sx={{ color: "white" }}
                fontSize="small"
              />
            </li>
            <li>
              <SaveOutlinedIcon sx={{ color: "white" }} fontSize="small" />
            </li>
            <li>
              <SaveAltOutlinedIcon sx={{ color: "white" }} fontSize="small" />
            </li>
            <li>
              <ChatOutlinedIcon sx={{ color: "white" }} fontSize="small" />
            </li>

            <li>
              <BrushOutlinedIcon sx={{ color: "white" }} fontSize="small" />
            </li>
            <li>
              <DriveFileRenameOutlineOutlinedIcon
                sx={{ color: "white" }}
                fontSize="small"
              />
            </li>
            <li>
              <ModeEditOutlineOutlinedIcon
                sx={{ color: "white" }}
                fontSize="small"
              />
            </li>
            <li>
              <DeleteOutlineOutlinedIcon
                sx={{ color: "white" }}
                fontSize="small"
              />
            </li>
            <li>
              <RefreshOutlinedIcon sx={{ color: "white" }} fontSize="small" />
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default Main;
