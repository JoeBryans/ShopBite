"use client";

import { UploadButton } from "../Uploader";

// import { UploadButton } from "";
type prop = {
  setFiles:string
  files:string
};
export default function ImageButton({setFiles,files}:prop) {
  return (
      <UploadButton
        endpoint="imageUploader"
        // appearance={
        //   {
        //     button:{
        //    background:"green",
        //    width:"400px"
        //     }
        //   }
        // }
        onClientUploadComplete={(res: any) => {
         
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
  );
}
