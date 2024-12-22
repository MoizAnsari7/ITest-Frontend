import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';

const CLIENT_ID = '244190870432-8cbmecah0r4ebg1cf4djurcqlgemdgj3.apps.googleusercontent.com'; // Replace with your actual Google Client ID

interface GoogleUser {
    name: string;
    email: string;
    picture: string;
    sub: string; // Google user ID
}

const SignInPage: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleLoginSuccess = async (response: any) => {
        try {
            if (response?.credential) {
                const token = response.credential;
    
                // Decode the JWT token
                const userData: GoogleUser = jwtDecode<GoogleUser>(token);
                console.log('Decoded User Data:', userData);
    
                // Send the token to the backend
                const res = await axios.post('http://192.168.29.88:5000/api/auth/google', { token });
    
                console.log('Server Response:', res.data);
                alert(`Welcome, ${res.data.user.name}!`);
            } else {
                console.error('Credential not found in response');
                alert('Login failed. No credential received.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred. Please try again.');
        }
    };
    

    return (
        <div className="container w-50 pt-5 mt-5">
        <GoogleOAuthProvider  clientId={CLIENT_ID}>
            <div style={{ textAlign: 'center', marginTop: '100px' }}>
                <h1>Sign In Page</h1>
                <p>Please log in with your Google account to continue.</p>
                <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    onError={() => {
                        console.error('Login Failed');
                        alert('Google Login failed. Please try again.');
                    }}
                />
            </div>
        </GoogleOAuthProvider>
        </div>
    );
};

export default SignInPage;
