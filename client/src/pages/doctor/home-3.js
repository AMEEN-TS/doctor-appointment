import React from 'react';
import Navbar from "../../components/Navbar";
import { Button, Col, DatePicker, Form, Input, Row, TimePicker } from "antd";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

function DoctorHome() {
    return (
        <>
        <Navbar/>
            <div className="vh-100" style={{ backgroundColor: '#eee',paddingTop: "80px",backgroundImage:"url(" + "https://images.unsplash.com/photo-1611689102033-7f9e0a8eb851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" + ")"}}>
      <MDBContainer >
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: '15px', backgroundColor: '#93e2bb', }}>
              <MDBCardBody className="p-4 text-black">
                {/* <div>
                  <MDBTypography tag='h6'>Exquisite hand henna tattoo</MDBTypography>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <p className="small mb-0"><MDBIcon far icon="clock me-2" />3 hrs</p>
                    <p className="fw-bold mb-0">$90</p>
                  </div>
                </div> */}
                <div className="d-flex align-items-center mb-4">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '70px' }}
                      className="img-fluid rounded-circle border border-dark border-3"
                      src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp'
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <div className="d-flex flex-row align-items-center mb-2">
                      <p className="mb-0 me-2">@sheisme</p>
                      <ul className="mb-0 list-unstyled d-flex flex-row" style={{ color: '#1B7B2C' }}>
                        <li>
                          <MDBIcon fas icon="star fa-xs" />
                        </li>
                        <li>
                          <MDBIcon fas icon="star fa-xs" />
                        </li>
                        <li>
                          <MDBIcon fas icon="star fa-xs" />
                        </li>
                        <li>
                          <MDBIcon fas icon="star fa-xs" />
                        </li>
                        <li>
                          <MDBIcon fas icon="star fa-xs" />
                        </li>
                      </ul>

                    </div>
                    {/* <div>
                      <MDBBtn outline color="dark" rounded size="sm">+ Follow</MDBBtn>
                      <MDBBtn outline color="dark" rounded size="sm" className="mx-1">See profile</MDBBtn>
                      <MDBBtn outline color="dark" floating size="sm"><MDBIcon fas icon="comment" /></MDBBtn>
                    </div> */}
                  </div>
                </div>
                <hr />
                <MDBCardText>
                <div style={{ padding: "10px" }}>
                                <h3 className="normal-text" >
                                    <b>Timings :</b>

                                </h3>
                                <hr />
                                <p>
                                    <b>Phone Number : </b>

                                </p>
                                <p>
                                    <b>Address : </b>

                                </p>
                                <p>
                                    <b>Fee per Visit : </b>
                                    Rs.
                                </p>
                                <p>
                                    <b>Website : </b>

                                </p>
                            </div>
                </MDBCardText>
                
                <MDBBtn color="success" rounded block size="lg">
                  <MDBIcon far icon="clock me-2" /> Book now
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
         
        </MDBRow>
      </MDBContainer>
    </div>
        </>
    )
}

export default DoctorHome
