const router = require("express").Router();

const stream = require("stream");

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
}); // Adjust fileSize limit as needed
const type = upload.single("file");

let initWebRoutes = (app) => {
  //api for login to google

  return app.use("/", router);
};
module.exports = initWebRoutes;
