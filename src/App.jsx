import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import JobPostForm from './components/JobPostForm';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Layout from './Pages/Layout';
import EmployerRegister from './components/Employer panel/EmployerRegister';
import EmployerLogin from './components/Employer panel/EmployerLogin';
import About from './Pages/About';
import Services from './Pages/Service';
import ContactUs from './Pages/contactUs';
import PracticeArea from './components/PracticeArea';
import CandidateLogin from './components/Candidate/CandidateLogin';
import CandidateRegister from './components/Candidate/CandidateRegister';
import JobOpen from './components/JobOpen';
import ForgotPassword from './components/Recruiter/ForgotPassword';
import ResetPassword from './components/Recruiter/ResetPassword';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import JobDetails from './components/JobDetails';
import EmployerForgotPassword from './components/Employer panel/EmployerForgotPassword';
import EmployerResetPassword from './components/Employer panel/EmployerResetPassword';
import EmployerOtpVerify from './components/Employer panel/EmployerVerifyOtp';
import OTPVerify from './components/Recruiter/OTPVerify';

// ✅ Protected Routes
import EmployerProtectedRoute from "./components/EmployerProtectedRoute";
import RecruiterProtectedRoute from "./components/RecruiterProtectedRoute";


// ✅ Protected Pages
import EmployerDashboard from './components/Employer panel/EmployerDashboard';
import EmployerFormData from './components/EmployerFormData';
import EmployerProfile from './components/Employer panel/Employer.profile';
import EmployerJobList from './components/Employer panel/EmployerJobList';

import RecruiterPage from './components/RecruiterPage';
import ProfilePage from './components/ProfilePage';
import ChangePassword from './components/RecruiterPassword';
import JobList from './components/Recruiter.manageJob';
import RecruiterAllJobList from './components/RecruiterAllJobList';
import AppliedJobsList from './components/AppliedJobList';

import RecruiterTable from './components/RecruiterTable';
import CandidateDetailsFetch from './components/CandidateDetailsFetch';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/jobdetails" element={<JobDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/employer-register" element={<EmployerRegister />} />
          <Route path="/employer-login" element={<EmployerLogin />} />
          <Route path="/candidate-login" element={<CandidateLogin />} />
          <Route path="/candidate-register" element={<CandidateRegister />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/practice-areas" element={<PracticeArea />} />
          <Route path="/open-job" element={<JobOpen />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp-verify" element={<OTPVerify />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/employer-forgot-password" element={<EmployerForgotPassword />} />
          <Route path="/employer-reset-password" element={<EmployerResetPassword />} />
          <Route path="/employer-otp-verify" element={<EmployerOtpVerify />} />


          {/* ✅ Recruiter Protected Routes */}
          <Route element={<RecruiterProtectedRoute allowedRoles={["recruiter"]} />}>
            <Route path="/recruiter" element={<RecruiterPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/jobpost" element={<JobPostForm />} />
            <Route path="/manageJob" element={<JobList />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/all-jobs" element={<RecruiterAllJobList />} />
            <Route path="/applied-job" element={<AppliedJobsList />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recruiter-table" element={<RecruiterTable />} />
            <Route path="/employerUpdate" element={<EmployerFormData />} />
            <Route path="/candidate-fetch" element={<CandidateDetailsFetch />} />



          </Route>

          {/* ✅ Employer Protected Routes */}
          <Route element={<EmployerProtectedRoute allowedRoles={["employer"]} />}>
            <Route path="/employer-dashboard" element={<EmployerDashboard />} />
            <Route path="/edit-profile" element={<EmployerProfile />} />
            <Route path="/employer-jobs" element={<EmployerJobList />} />
          </Route>

      

          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </Layout>

      {/* Toast */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Router>
  );
};

export default App;
