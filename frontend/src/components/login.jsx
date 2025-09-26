import axios from "axios";
import React, { useContext, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { API_PATH } from "../utils/apiPath";
import { authStyles as styles } from "../assets/dummystyle";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { Input } from "./inputs";
import { validateEmail } from "../utils/helper";

const LogIn = ({ setCurrentPage }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const { updateUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault()
        if (!validateEmail(email)) {
            setError('please enter a valid email')
            return
        }
        if (!password) {
            setError('Please enter password')
            return
        }
        setError('')

        try {
            const response = await axiosInstance.post(API_PATH.AUTH.LOGIN, { email, password })

            const { token } = response.data
            if (token) {
                localStorage.setItem('token', token)
                updateUser(response.data)
                navigate('/dashboard')

            }
        } catch (error) {
            setError(error.response?.data?.message || 'something went wrong. Please try again')
        }

    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.headerWrapper}>
                    <h3 className={styles.title}>Welcome Back!</h3>
                    <p className={styles.subtitle}>Sign In To Continue Building amazing Resumes</p>

                </div>
                {/*handle form */}
                <form onSubmit={handleLogin} className={styles.form}>
                    <Input value={email} onChange={(e) => { setEmail(e.target.value) }}
                        label='Email'
                        placeholder='example@gmail.com'
                        type="text"
                    />
                    <Input value={password} onChange={(e) => { setPassword(e.target.value) }}
                        label='Password'
                        placeholder='Enter Password'
                        type="password"
                    />
                    {error && <div className={styles.errorMessage}>{error}</div>}
                    <button type="submit" className={styles.submitButton}>
                        Sign In
                    </button>
                    {/*footer*/}
                    <p className={styles.switchText}>
                        Don't have an Acount?{' '}
                        <button onClick={() => setCurrentPage('signup')}
                            type="button" className={styles.signupSwitchButton}>
                            Sign Up
                        </button>
                    </p>

                </form>

            </div>
        </>
    )
}

export default LogIn