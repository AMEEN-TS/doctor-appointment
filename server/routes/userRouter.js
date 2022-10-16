const express = require('express');
const{register,login,userinfo,verifyemail,deletetoken,resetlink,resetpassword,applyDoctor,markNotifications,deleteNotification,getApprovedDoctor} = require("../controllers/userControllers");
const authMiddleWare = require("../middlewares/authMiddleWare");
const storage = require ("../utils/multer");



const router = express.Router();




router.post('/register',register);
router.post('/login',login);
router.get('/getuserinfo',authMiddleWare,userinfo)
router.post('/verifyemail',verifyemail)
router.post('/deletetoken',deletetoken)
router.post('/send-password-reset-link',resetlink)
router.post('/reset-password',resetpassword)
router.post('/apply-doctor-account',storage.single('image'),authMiddleWare,applyDoctor)
router.post('/mark-all-notifications-as-seen',authMiddleWare,markNotifications)
router.post('/delete-all-notifications',authMiddleWare,deleteNotification)
router.get('/get-all-approved-doctors',getApprovedDoctor)







module.exports = router;