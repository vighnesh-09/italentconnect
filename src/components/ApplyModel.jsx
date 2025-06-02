import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Navbar.css'; // Import CSS file

const ApplyJobModal = ({ jobId, onClose }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { mobile: '' },
    validationSchema: Yup.object({
      mobile: Yup.string()
        .matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits')
        .required('Mobile number is required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch(
          'https://itc-backend-241149078260.us-central1.run.app/api/applications/apply',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ mobile: values.mobile.trim(), jobId }),
          }
        );

        const data = await response.json();

        if (response.ok) {
          alert(data.message);
          onClose();
        } else {
          if (data.message === 'Candidate not registered') {
            navigate('/candidate-register', {
              state: { mobile: values.mobile, jobId },
            });
          } else {
            alert(data.message);
          }
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong');
      }
    },
  });

  return (
    <div className="apply-modal">
      <div className="apply-modal-content">
        <h2>Apply for Job</h2>

        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="mobile"
            placeholder="Enter your mobile number"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.mobile && formik.errors.mobile && (
            <div style={{ color: 'red', fontSize: '0.9rem' }}>
              {formik.errors.mobile}
            </div>
          )}

          <div className="apply-modal-buttons">
            <button className="submit-btn" type="submit">
              Submit
            </button>
            <button className="cancel-btn" type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyJobModal;
