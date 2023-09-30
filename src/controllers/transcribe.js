import {v2 as cloudinary} from 'cloudinary'
import * as services from '../services/fileupload.service.js'
export const upload = async (req, res, next) => {
try {
  // Get the Cloudinary credentials
  cloudinary.config ({
   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
  });
  //Get file from request
const sourceFile = req.files.video.path
// Upload the file to Cloudinary
const response = await cloudinary.uploader.upload(sourceFile, { resource_type : 'auto', raw_convert: "google_speech"});
// Get the secure URL of the uploaded file
 const secureUrl = response.secure_url;
const addFile = await services.fileService({link: secureUrl})
  return res.status(201).json({success: true, message: "File Upload Successful", data:addFile})    
} catch (error) { next(error)  }
}

export const getLinks = async (req, res, next) => {
 try {
 const link = await services.fetchLinks()
return res.status(200).json({success: true, message: "Links Fetched Successfully", data:link})    
} catch (error) {
    next(error)
}
}

export const deleteLink = async (req, res, next) => {
  try {
    const link = await services.deleteLink(req.params.id)
    return res.status(200).json({ success: true,  message: 'Link Deleted Successfully', data: link})
  } catch (error) {
    return res.status(403).json({success: false, message: error })
  }
};