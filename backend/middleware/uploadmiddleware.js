import multer from 'multer'

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename: (req,file,cb)=>{
        cb(null,`${Date.now()}-${file.originalname}`)
    },
})

//File filter
const fileFilter = (req,file,cb)=>{
    const allowedTypes = ["image/jpeg","image/png","image/jpg"]
    if (allowedTypes.includes(file.mimetype)) {
        cb(null,true)
    } else {
        cb(new Error("only jpeg png jpg are allowed"),false)
    }
}

const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // example: 5MB max

})
export default upload;