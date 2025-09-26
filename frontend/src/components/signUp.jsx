import React, { useContext, useState } from "react";
import { authStyles as styles } from "../assets/dummystyle";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../utils/helper";
import axiosInstance from "../utils/axiosInstance";
import { API_PATH } from "../utils/apiPath";
import { Input } from "./inputs";
import { Target } from "lucide-react";

const SignUp = ({setCurrentPage}) => {


    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const { updateUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSignup = async(e)=>{
        e.preventDefault()
        if (!fullName) {
            setError('please enter fullname')
            return
        }
        if(!validateEmail(email)){
            setError('please enter a valid email')
            return
        }
        if(!password){
            setError('Please enter password')
            return
        }
        setError('');

        try {
            const response = await axiosInstance.post(API_PATH.AUTH.REGISTER, {
                name:fullName,
                email,
                password,
            })

            const {token} = response.data
            if (token) {
                localStorage.setItem('token',token)
                updateUser(response.data)
                navigate('/dashboard')
                
            }

        } catch (error) {
            setError(error.response?.data?.message || 'something went wrong. Please try again')
        }
    }


    return (
        <>
            <div className={styles.signupContainer}>
                <div className={styles.headerWrapper}>
                    <h3 className={styles.signupTitle}>Create Account</h3>
                    <p className={styles.signupSubtitle}>Join thousands of professional today</p>

                </div>
                {/*form */}
                <form onSubmit={handleSignup} className={styles.signupForm}>
                    <Input value={fullName} onChange={(e)=>{setFullName(e.target.value)}}
                    label='Full Name'
                    placeholder='Write Your Name'
                    type="text"
                    />
                    <Input value={email} onChange={(e)=>{setEmail(e.target.value)}}
                    label='Email'
                    placeholder='example@gmail.com'
                    type="text"
                    />
                    <Input value={password} onChange={(e)=>{setPassword(e.target.value)}}
                    label='Password'
                    placeholder='Enter Password'
                    type="password"
                    />

                    {error && <div className={styles.errorMessage}>{error}</div>}
                    <button type="submit" className={styles.signupSubmit}>
                      Create Account
                    </button>
                    {/*footer*/}
                    <p className={styles.switchText}>
                        Already have an Acount?{' '}
                        <button onClick={()=>setCurrentPage('login')} 
                        type="button" className={styles.signupSwitchButton}>
                         Sign In
                        </button>
                    </p>



                </form>

            </div>
        </>
    )
}

export default SignUp