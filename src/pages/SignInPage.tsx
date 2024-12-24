import React from 'react';

const SignInPage: React.FC = () => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:4500/api/auth/google';
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center p-5 bg-white shadow rounded" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="mb-4 text-primary">Welcome Back!</h2>
        <p className="mb-4 text-secondary">Sign in to continue to your dashboard</p>
        <button 
          className="btn btn-primary d-flex align-items-center justify-content-center px-4 py-2 w-100" 
          onClick={handleLogin}
          style={{ fontSize: '1rem', fontWeight: '500' }}
        >
          <img
            className="me-2"
            src="https://banner2.cleanpng.com/20240216/tgc/transparent-google-logo-google-logo-in-black-circle-colorful-1710875587150.webp"
            alt="Google Icon"
            style={{ width: '20px', height: '20px' }}
          />
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
