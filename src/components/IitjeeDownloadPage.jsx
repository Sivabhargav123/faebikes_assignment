import React, { useState } from "react";
import "./ProductList.css";
const App = () => {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    if (page < 4) setPage(page + 1);
  };

  const handleNexttoThirdpage = () => {
    setPage(3); // directly sets to 3rd page
  };

  const handleBack = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {page === 1 && (
        <div className="w-80 p-6 bg-white rounded-xl shadow">
          <h1 className="text-xl font-bold">Welcome to PopX</h1>
          <p className="text-sm text-gray-500 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          {/* <button onClick={handleNexttoThirdpage} className="w-full mb-2 bg-purple-600 text-white p-2 rounded">Create Account</button>
          <button onClick={() => setPage(2)} className="w-full bg-purple-300 text-black p-2 rounded">Already Registered? Login</button> */}

          <button onClick={handleNexttoThirdpage} className="button-primary">
            Create Account
          </button>
          <button onClick={() => setPage(2)} className="button-secondary">
            Already Registered? Login
          </button>
        </div>
      )}

      {page === 2 && (
        <div className="signin-container">
          <h2>Signin to your PopX account</h2>
          <input
            name="email"
            type="email"
            placeholder="Enter email address"
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Enter password"
            onChange={handleChange}
          />
          <button onClick={handleNext} className="button-login">
            Login
          </button>
        </div>
      )}

      {page === 3 && (
        <div className="form-container">
          <h2>Create your PopX account</h2>
          <input
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            type="text"
          />
          <input
            name="phoneNumber"
            placeholder="Phone number"
            onChange={handleChange}
            type="tel"
          />
          <input
            name="email"
            placeholder="Email address"
            onChange={handleChange}
            type="email"
          />
          <input
            name="password"
            placeholder="Password"
            type="password"
            onChange={handleChange}
          />
          <input
            name="companyName"
            placeholder="Company name"
            onChange={handleChange}
            type="text"
          />

          <div className="radio-group">
            <p>
              Are you an Agency? <span style={{ color: "red" }}>*</span>
            </p>
            <label>
              <input
                type="radio"
                name="agency"
                value="Yes"
                onChange={handleChange}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="agency"
                value="No"
                onChange={handleChange}
              />{" "}
              No
            </label>
          </div>

          <button onClick={handleNext} className="button-primary">
            Create Account
          </button>
        </div>
      )}

      {page === 4 && (
        <div className="account-container">
          <h2>Account Settings</h2>
          <div className="account-header">
            <img
              className="account-avatar"
              src="https://via.placeholder.com/48"
              alt="avatar"
            />
            <div>
              <p className="account-info-name">
                {formData.fullName || "Marry Doe"}
              </p>
              <p className="account-info-email">
                {formData.email || "marry@gmail.com"}
              </p>
            </div>
          </div>
          <p className="account-description">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      )}

      <div className="mt-6 flex gap-4 buttonsFlex">
        <button
          onClick={handleBack}
          disabled={page === 1}
          className={`text-blue-500 px-3 py-1 rounded ${
            page === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          ← Back
        </button>
        
        <p className="mt-5 flex gap-4">Page {page} of 4</p>
         <div className="mt-6 flex items-center gap-4">
        <button
          onClick={handleNext}
          disabled={page === 4}
          className={`text-blue-500 px-3 py-1 rounded ${
            page === 4 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Next →
        </button>
      </div>
      </div>
     

      {/* JSON Output */}
      {/* <pre className="mt-6 p-4 w-full max-w-md bg-gray-100 text-xs overflow-auto">{JSON.stringify(formData, null, 2)}</pre> */}
    </div>
  );
};

export default App;
