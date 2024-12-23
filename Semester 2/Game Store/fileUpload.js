var multer = require("multer");

function fileUpload() {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads/");
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + "_" + file.originalname);
        }
    });

    function fileFilter(req, file, cb) {
        if (file.mimetype.startsWith("image")) {
            cb(null, true);
        } else {
            cb(new Error("Please upload an image file"), false);
        }
    }

    return multer({ storage: storage, fileFilter: fileFilter });
}

exports.uploadSingleFile = function (fieldName) {
    return fileUpload().single(fieldName);
};
