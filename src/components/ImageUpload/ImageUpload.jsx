import React from "react";
import Image from "./image.js";
import "./ImageUpload.css";
import Upload from "../../img/upload.svg";



function ImageUpload(){
    return (
        <div>
            <div className="ImageUploadcontainer">
                <input type="file" id="file" accept="image/*" />
                <div className="img-area" data-img="">
                    <div style={{display : "flex", gap : "10px", alignItems : "center", justifyContent : "center"}}>
                        <div><img src={Upload} alt="Upload" style={{height : "50px", width : "50px", paddingTop : "70px"}}/></div>
                        <div><h3>Upload Image</h3></div>
                    </div>
                    <p>Image size must be less than <span>2MB</span></p>
                </div>
                <button className="select-image">Select Image</button>
            </div>
            
            <script src={Image}></script> 
        </div>
    );
}

export default ImageUpload;
