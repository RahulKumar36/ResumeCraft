import fs from 'fs'
import path from 'path'

import Resume from '../models/resumeModels.js'
import upload from '../middleware/uploadmiddleware.js'
import { error } from 'console'

 export const uploadResumeIamges = async (req, res) => {
    try {
        // Configure multer to handel images
        upload.fields([{ name: "thumbnail" }, { name: "profileImage" }])
            (req, res, async (error) => {
                if (error) {
                    return res.status(400).json({ message: "file upload failed", error: error.message })
                }

                const resumeId = req.params.id
                const resume = await Resume.findOne({ _id: resumeId, userId: req.user._id })
                if (!resume) {
                    return res.status(404).json({ message: "Resume not found or nauthorized" })
                }

                //Use process cwd to locate folder uploads
                const uploadsFolder = path.join(process.cwd(), 'uploads')
                const baseUrl = `${req.protocol}://${req.get("host")}`

                const newThumbnail = req.files.thumbnail?.[0];
                const newProfileImage = req.files.newProfileImage?.[0];

                if (newThumbnail) {
                    if (resume.thumbnailLink) {
                        const oldThumbnail = path.join(uploadsFolder, path.basename(resume.thumbnailLink))
                        if (fs.existsSync(oldThumbnail)) 
                            fs.unlinkSync(oldThumbnail)
                    }
                    resume.thumbnailLink = `${baseUrl}/uploads/${newThumbnail.filename}`

                }

                // same for profile preview image
                if (newProfileImage) {
                    if (resume.profileInfo?.profilePreviewUrl) {
                        const oldProfile = path.join(uploadsFolder, path.basename(resume.profileInfo.profilePreviewUrl))
                        if (fs.existsSync(oldProfile)) 
                            fs.unlinkSync(oldProfile)
                    }
                    resume.profileInfo.profilePreviewUrl = `${baseUrl}/uploads/${newProfileImage.filename}`

                }
                await resume.save()
                res.status(200).json({
                    message:" Image uploaded successfully",
                    thumbnailLink: resume.thumbnailLink,
                    profilePreviewUrl: resume.profileInfo.profilePreviewUrl
                })
            })
    } catch (err) {
        console.log(`error uploading image`,err)
        res.status(500).json({message:"failed to upload images",error: err.message})

    }
}