import cloudinary from 'cloudinary'
export const upload = async (req, res) => {
try {
      // Get the Cloudinary credentials
      cloudinary.config ({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
        });
  
        //Get file from request
        const sourceFile = req.files.image.path
  
         // Upload the file to Cloudinary
        const response = await cloudinary.uploader.upload(sourceFile, { resource_type : 'auto'});
  
        // Get the secure URL of the uploaded file
        const secureUrl = response.secure_url;
} catch (error) {
    
}
}