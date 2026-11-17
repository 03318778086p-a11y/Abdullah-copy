import multer from "multer";

const Storagesttings = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload");
  },
  filename: function (req, file, cb) {
    console.log(file, "multer config she");
    cb(null,file.originalname)
  },
});
export const upload = multer({ storage: Storagesttings });

