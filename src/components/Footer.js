import React from "react";
import "./footer.scss";
import LinkIcon from '@mui/icons-material/Link';
function Footer() {
  return (
    <div className="footer-container">
      <div className="file-details">
        <p>
          <span style={{ color: "red" }}>x</span>Data_file_xls
        </p>
        <p>
          <span style={{ color: "red", marginInlineStart: "25px" }}>x</span>
          Report_1.pdf
        </p>
      </div>
      <div className="footer-content">
        <div className="left-bar">
          <div>B</div>
          <div>/</div>
          <div>U</div>
          <div>S</div>
          <div>Aa</div>
          <div>A^</div>
          <div>A></div>
          <div className="selection">
            <select name="font-family" id="family">
              <option value="volvo">Calibri (body)</option>
             
            </select>
          </div>
          <div className="selection">
            <select name="size" id="size">
              <option value="volvo">18</option>
             
            </select>
          </div>
        </div>
        <div className="right-bar">
          <div>

          <LinkIcon fontSize="large"/>
          </div>
          <p>comment</p>
        </div>
        
      </div>
   
    </div>
  );
}

export default Footer;
