const User = require("../models/userModel");
const Doctor = require("../models/doctorModel");
const cloudinary = require("../utils/cloudinary");
const moment = require('moment');




module.exports.doctorData = async (req, res) => {

    try {
        const doctor = await Doctor.findOne({ userId: req.body.userId })
        res.status(200).send({ message: "Doctor info fetched successfully", success: true, data: doctor })
    } catch (error) {
        res.status(500).send({ message: "invalid doctor", success: false, error })
    }
};

module.exports.updateDoctor = async (req, res) => {

   

    try {
       
        const result = await cloudinary.uploader.upload(req.file.path)
       
        const starttime = moment(req.body.start, ["HH:mm"]).format("hh:mm a");
        const endtime = moment(req.body.end, ["HH:mm"]).format("hh:mm a");

        const doctorApplication = await Doctor.findOneAndUpdate({ userId: req.body.userId },
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                phoneNumber: req.body.phoneNumber,
                address: req.body.address,
                website: req.body.website,
                specialization: req.body.specialization,
                experience: req.body.experience,
                feePerCunsultation: req.body.feePerConsultation,
                start: starttime,
                end: endtime,                   
                image: result.url,
                userId: req.body.userId,
            })
         
            
        res.status(200).send({message:"Doctor profile updated successfully",success:true})    
    }catch(error){
        console.log(error);
        res.status(500).send({message: "Error getting doctor info", success: false, error})
    }
};

module.exports.getdoctorbyId = async (req,res) =>{
    try {
        const doctor = await Doctor.findOne({ _id: req.body.doctorId });
        res.status(200).send({
          success: true,
          message: "Doctor info fetched successfully",
          data: doctor,
        });
      } catch (error) {
        res
          .status(500)
          .send({ message: "Error getting doctor info", success: false, error });
      }
}