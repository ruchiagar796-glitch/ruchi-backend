
import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"
(async function() {

    // Configuration
    cloudinary.config({ 
         cloud_name: process.env.CLOUDINARY_CLAUD_NAME, 
        api_key: process.env.CLAUDINARY_API_KEY, 
        api_secret: process.env.CLAUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });

    const uplodeCloudinary = async (localFilePath) => {
        try {
            if(!localFilePath) return null
            const response = await cloudinary.uploader.upload
            (localFilePath,{
                resource_type: "auto" 
            })
            console.log("file is uplodedon cloudinary",response.url);
            return response;
        }catch (error){
           fs.unlinkSync(localFilePath);
           return null;
        }
    }
   })(); 
    // Upload an image
   export {uplodeCloudinary}