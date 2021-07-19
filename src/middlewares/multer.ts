const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/pictures');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now().toString()}-${file.originalname}`)
    }
});

const fileFilter = (req, file, cb) => {
    let isAccepted = false;

    if(file.originalname.includes('.jpeg') || file.originalname.includes('.png')) {
        isAccepted = true;
    }

    if (isAccepted) {
        return cb(null, true);
    }

    return cb(null, false);
}

export default multer({
    storage,
    fileFilter
});