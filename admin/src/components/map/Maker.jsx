import React from "react";

const Marker = ({ text }) => {
    return (
        <div style={{ position: 'absolute', transform: 'translate(-50%, -100%)' }}>
          <img src={'Bookmark.png'} alt="Marker" style={{ width: '32px', height: '32px' }} />
          {/* <div style={{color: "#202", fontStyle: "bold" , fontSize: "16px"}}>{text}</div> */}
        </div>
      );
} 

export default Marker;
