import React, { useState,useEffect } from "react";
import { Col, Row } from "antd";
import { useDispatch,useSelector } from "react-redux";
import { showLoading, hideLoading } from '../pages/Redux/alertsSlice';
import Navbar from "./Navbar";
import Doctor from "./Doctor";
import "../pages/style/user/home.css";
import axios from "axios";
import Carousel from "./Carousel";

// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

function Home() {
  const { user } = useSelector((state) => state.user);
  const [doctors, setDoctors] = useState([]);
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      dispatch(showLoading())
      const response = await axios.get("/api/user/get-all-approved-doctors");
      dispatch(hideLoading())
      if (response.data.success) {
        setDoctors(response.data.data);
      }
    } catch (error) {
      dispatch(hideLoading())
    }
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <>
    <div className="mainhome">

    
      <Navbar />

      {user?.isAdmin ? (
        
        <Navbar />

      ): user?.isDoctor ?(
        <Navbar />
      ):
      <>
      <Navbar />
        <div>
          

      
        <div style={{ paddingTop: "65px",}}>
        <Carousel />
  
        </div>
        <div className="container" style={{ paddingTop: "100px" ,paddingBottom:"10px"}}>
  
        <Row gutter={[30,40]}>
          {doctors.map((doctor) => (
            <Col span={6} xs={24} sm={12} md={12} lg={8} xl={8}>
              <Doctor doctor={doctor} />
            </Col>
          ))}
        </Row>
  
        </div>
        </div>
      </>
        
      
      
    }

      

      </div>
      
    </>
  );
}

export default Home;



