# doctor-appointment
mern stack booking app

## Table of contents

- [Introduction](#introduction)
- [Run](#run)
- [Technology](#technology)
- [Features](#features)
- [License](#license)

## Introduction

Doctor Appointment Booking Application using  Reactjs,Node js, Express js, and MongoDb.

NOTE: Please read the RUN section before opening an issue.

The application frontend is deployed to vercel and  backend is deployed to cyclic can be accessed through the following link:

[doctor Appointment](https://doctor-appointment-client-ameen-ts.vercel.app/)

The website resembles a real store and you can add products to your cart and wishlist and pay for them. If you want to try the checkout process, you can use the dummy card number/ upi/ Internet Bankinng provided by Razorpay for testing . Please <u><b>DO NOT</b></u> provide real card number and data.

In order to access the admin panel on "/admin" you need to provide the admin email and password.


## Run

To run this application, you have to set your own environmental variables. For security reasons, some variables have been hidden from view and used as environmental variables with the help of dotenv package. Below are the variables that you need to set in order to run the application:

- KEY_ID:     This is the razorpay key_Id (string).

- KEY_SECRET:  This is the razorpay key_Secret (string).

- NODE MAILER_email:This is the email id(string)

- NODE MAILER-password : This is the password(String)

- PORT: Specify the port Number

After you've set these environmental variables in the .env file at the root of the project, and intsall node modules using  `npm install`

Now you can run `npm start` in the terminal and the application should work.

## Technology

The application is built with:

- React.js
- Node.js 
- Node mailer
- MongoDB
- Express 
- Bootstrap 
- material ui 
- Antid
- Razorpay
- SweetAlert

## Features

This is a multi featured web application for booking appointment of doctor. This application has 3 UI interfaces i.e, User,Admin and Doctor.

Users can do the following:

- Login and signup with OTP verification using node mailer
-Through otp verification, the user can manage forgotten passwords
- Doctors can be viewed from landing page with name and specialization 
- User can view single Doctor details
- User have profile page
- Doctors search also needed Doctors can be filtered out
- Payment Gateway is integrated with RAZOR PAY
- User can apply coupen before final billing
- User can track the purchased products
- Status update of tracking is showed on notifications

Admins can do the following:

- Admin login with pre defined credentials
- Admin Dashboard is implemented with sales report and brand report
- Admin can handle user and Doctor block , unblock and delete
- Admin can approve doctors
- Admin can manage appointment details and doctors details

Doctor can do the following:

- Doctor account only active when admin approved other wise its user
- Doctor can change profile Details
- Doctor can give approve for appoinment only for  paymentent sucesss 
- BookingManagement

## License

[![License](https://img.shields.io/:License-MIT-blue.svg?style=flat-square)](http://badges.mit-license.org)

- MIT License
- Copyright 2022 © [AMEEN TS](https://github.com/AMEEN-TS/)
