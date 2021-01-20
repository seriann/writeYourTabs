import React from 'react'
import styles from "../../styles/inputFile.module.css"

const FileUploader = ({ text, onFileSelectSuccess, onFileSelectError,name }) =>{

 const handleFileInput = (e) => {
   const file = e.target.files[0]

   console.log(file.size);
    if(file.size > 3500000) return onFileSelectError({error: "File size cannot exceed more than 3.5MB"})
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
          type="file"
          name="photo"
          required
         />
      </label>
    </div>
  )
}

export default FileUploader
