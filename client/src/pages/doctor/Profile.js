import React, { useState, useEffect } from 'react';
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../Redux/alertsSlice";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/system";
import moment from "moment";
import {
  Card,
  CardContent,
  Button,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  MenuItem,
  FormLabel,
  getBottomNavigationActionUtilityClass,
} from "@mui/material";

function Profile() {

  const [image, setImage] = useState();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [doctor, setDoctor] = useState(null);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const navigate = useNavigate();
  const params = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();

    let formdata = new FormData();

    formdata.append("firstName", e.target.firstName.value);
    formdata.append("lastName", e.target.lastName.value);
    formdata.append("phoneNumber", e.target.phoneNumber.value);
    formdata.append("address", e.target.address.value);
    formdata.append("website", e.target.website.value);
    formdata.append("specialization", e.target.specialization.value);
    formdata.append("experience", e.target.experience.value);
    formdata.append("feePerConsultation", e.target.feePerConsultation.value);
    formdata.append("start", e.target.start.value);
    formdata.append("end", e.target.end.value);
    // formdata.append("timings",e.target.timings.value)
    formdata.append("image", image);
    // formdata.append("userid",user)
   
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/doctor/doctorupdate-profile",
        formdata,

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user")}`,
          },

        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };

  const getData = async () => {

    try {
      dispatch(showLoading());
      const response = await axios.post("/api/doctor/doctor-info",
        {
          userId: params.userId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        setDoctor(response.data.data);
         const result = response.data.data;
        const convert_starttime = result.start.split(" ")[0];
        const convert_endtime = result.end.split(" ")[0];
        setStart(convert_starttime);
        setEnd(convert_endtime);

      } else {
        toast.error("Errror")
      }

    } catch (error) {

    }

  };


  console.log(start, "mmmmmmmmmmmmmmmmmmmmmmm")




  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <Navbar />
      <div className="container formdody" style={{ paddingTop: "100px", }}>
        <form onSubmit={handleSubmit}>
          <Typography gutterBottom variant="h3" align="center">
            Edit Profile
          </Typography>

          <Card style={{ backgroundColor: "#E8EDF2", paddingBottom: "20px" }}>
            <CardContent>
              <FormControl fullWidth sx={{ m: 1, width: "70ch", ml: 45 }}>
                <FormLabel htmlFor="outlined-adornment-amount">
                  First Name
                </FormLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  label="First Name"
                  type="text"
                  name="firstName"
                  onChange={(e) => setDoctor(e.value)}
                  value={doctor?.firstName}
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1, width: "70ch", ml: 45 }}>
                <FormLabel htmlFor="outlined-adornment-amount">
                  Last Name
                </FormLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  label="Last Name"
                  type="text"
                  name="lastName"
                  onChange={(e) => setDoctor(e.value)}
                  value={doctor?.lastName}

                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1, width: "70ch", ml: 45 }}>
                <FormLabel htmlFor="outlined-adornment-amount">
                  phone Number
                </FormLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  label="phone Number"
                  type="text"
                  name="phoneNumber"
                  onChange={(e) => setDoctor(e.value)}
                  value={doctor?.phoneNumber}
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1, width: "70ch", ml: 45 }}>
                <FormLabel htmlFor="outlined-adornment-amount">
                  address
                </FormLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  label="address"
                  name="address"
                  onChange={(e) => setDoctor(e.value)}
                  value={doctor?.address}
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1, width: "70ch", ml: 45 }}>
                <FormLabel htmlFor="outlined-adornment-amount">
                  Website
                </FormLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  label="Website"
                  name="website"
                  onChange={(e) => setDoctor(e.value)}
                  value={doctor?.website}
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1, width: "70ch", ml: 45 }}>
                <FormLabel htmlFor="outlined-adornment-amount">
                  specialization
                </FormLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  label="specialization"
                  type="text"
                  name="specialization"
                  onChange={(e) => setDoctor(e.value)}
                  value={doctor?.specialization}
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1, width: "70ch", ml: 45 }}>
                <FormLabel htmlFor="outlined-adornment-amount">
                  {" "}
                  experience
                </FormLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  label="experience"
                  name="experience"
                  onChange={(e) => setDoctor(e.value)}
                  value={doctor?.experience}
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1, width: "70ch", ml: 45 }}>
                <FormLabel htmlFor="outlined-adornment-amount">
                  {" "}
                  feePerConsultation
                </FormLabel>

                <OutlinedInput
                  id="outlined-adornment-amount"
                  label="feePerConsultation"
                  name="feePerConsultation"
                  onChange={(e) => setDoctor(e.value)}
                  value={doctor?.feePerCunsultation}
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1, width: "70ch", ml: 45 }}>
                <FormLabel htmlFor="outlined-adornment-amount">
                  consulting-start
                </FormLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  label="feePerConsultation"
                  type="time"
                  name="start"
                  onChange={(e) => setDoctor(e.value)}
                  value={start}
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1, width: "70ch", ml: 45 }}>
                <FormLabel htmlFor="outlined-adornment-amount">
                  consulting-end
                </FormLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  label="feePerConsultation"
                  type="time"
                  name="end"
                  onChange={(e) => setDoctor(e.value)}
                  value={end}
                />
              </FormControl>

              {/* <Typography sx={{ mr: 50 }} align="center">
                  Image
                </Typography> */}
              <FormControl fullWidth sx={{ m: 1, width: "70ch", ml: 45 }}>
                <FormLabel htmlFor="outlined-adornment-amount">
                  image
                </FormLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  label="Amount"
                  type="file"
                  name="image"

                  onChange={(e) => setImage(e.target.files[0])}
                />
              </FormControl>
            </CardContent>
            <Box align="center">
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Box>
          </Card>
        </form>
      </div>
    </>
  );
}

export default Profile
