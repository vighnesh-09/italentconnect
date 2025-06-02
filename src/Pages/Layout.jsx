import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import RecruiterNavbar from "./RecruiterNavbar";
import EmployerNavbar from "../components/Employer panel/EmployerNavbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const location = useLocation();

  const recruiterPages = [
    "/recruiter",
    "/profile",
    "/employerUpdate",
    "/jobpost",
    "/manageJob",
    "/change-password",
    "/all-jobs",
    "/applied-job",
    "/register",
    "/recruiter-table",
    "/candidate-fetch"
  ];

  const employerPages = [
    "/employer-dashboard",
    "/employer-jobs",
    "/edit-profile"
  ];

  const isEmployerNavbar = employerPages.some(path =>
    location.pathname.startsWith(path)
  );

  const isRecruiterNavbar = recruiterPages.some(path =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      {isEmployerNavbar ? (
        <EmployerNavbar />
      ) : isRecruiterNavbar ? (
        <RecruiterNavbar />
      ) : (
        <Navbar />
      )}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
