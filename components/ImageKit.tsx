"use client"
import React from "react";
import { ImageKitProvider, IKImage } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

export default function ImageKitProviders({children}:{children:React.ReactNode}) {
    const authenticator = async () => {
        try {
          const response = await fetch("http://localhost:3000/api/imageKit-auth");
      console.log(response);
      
          if (!response.ok) {
            
            throw new Error(`Request failed with status ${response.status}`);
          }
          return response.json()
        } catch (error) {
          console.log(error);

          throw new Error(`Authentication request failed`);
        }
      };
      
    return <ImageKitProvider
     urlEndpoint={urlEndpoint} 
     publicKey={publicKey} 
     authenticator={authenticator}>
        {children}
      </ImageKitProvider>
     

}