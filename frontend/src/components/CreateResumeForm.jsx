import React, { useState } from "react";
import { Input } from "./inputs";
import { useNavigate } from 'react-router-dom'
import axiosInstance from "../utils/axiosInstance";
import { API_PATH } from "../utils/apiPath";

const CreateResumeForm = () => {
    const [title, setTitle] = useState('')
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleCreateResume = async (e) => {
        e.preventDefault()
        if(!title) {
            setError('Please Enter Resume Title')
            return
        }

        try {
            const response = await axiosInstance.post(API_PATH.RESUME.CREATE,{title})
            if(response.data?._id){
                navigate(`/resume/${response.data?._id}`)

            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                setError(error.response.data.message)
            }else{
                setError('Something went wrong, Please try again!')
            }
        }
    }

    return (
        <div className='w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg'>
            <h1 className='text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2'>Create New Resume</h1>
            <p className='text-gray-500 dark:text-gray-400 mb-8'>
                Give your resume a title to get started. You can customize everything later.
            </p>

            <form onSubmit={handleCreateResume}>
                <Input value={title} onChange={(e) => { setTitle(e.target.value) }}
                label='Resume Title' placeholder='e.g, Software Engineer - Software Engineer'
                type="text"/>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <button type="submit" className="w-full py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-black 
                 rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-rose-200 transition-all">
                     Create Resume
                </button>
            </form>
        </div>
    )
}
export default CreateResumeForm