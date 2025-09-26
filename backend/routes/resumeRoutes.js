import express from 'express'
import { protect } from '../middleware/authmiddleware.js'
import { createResume, deleteResume, getResumeById, getUserResume, updateResume } from '../controller/resumecontroller.js'
import { uploadResumeIamges } from '../controller/uploadImages.js'

const resumeRouter = express.Router()

resumeRouter.post('/',protect,createResume)
resumeRouter.get('/',protect,getUserResume)
resumeRouter.get('/:id',protect,getResumeById)
resumeRouter.put('/:id',protect,updateResume)
resumeRouter.put('/:id/upload-images',protect,uploadResumeIamges)
resumeRouter.delete('/:id',protect,deleteResume)

export default resumeRouter;