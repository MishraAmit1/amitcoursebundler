import multer from "multer";

const storage = multer.memoryStorage();

const singleUploadd = multer({ storage }).single("file");

export default singleUploadd;
