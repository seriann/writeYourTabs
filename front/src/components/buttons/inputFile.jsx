import React from 'react'
import styles from "../../styles/inputFile.module.css"

const FileUploader = ({ text, onFileSelectSuccess, onFileSelectError}) =>{

 const handleFileInput = (e) => {
   const file = e.target.files[0]
   const fileType = file.type.split("/")
   console.log(file.size);
    if(file.size > 3500000) return onFileSelectError({error: "File size cannot exceed more than 3.5MB"})
    if(fileType[1] != "jpeg") return onFileSelectError({error: "we just accept format jpeg"})
    if(fileType[0] != "image") return onFileSelectError({error: "we just accept images with a jpeg or png format"})
     onFileSelectSuccess(file)
 }

  return (
    <div>
      <label
       htmlFor="file-upload"
       className={styles.customFile}>
        <i className="fa fa-cloud-upload"></i> {text}
         <input
          onChange={handleFileInput}
          id="file-upload"
          name="image"
          type="file"
         />
      </label>
    </div>
  )
}

export default FileUploader
