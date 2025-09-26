import React, { createContext, useEffect, useState } from 'react'
import axiosInstance from '../utils/axiosInstance'
import { API_PATH } from '../utils/apiPath'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [user, SetUser] = useState(null)
    const [loading, SetLoading] = useState(true)

    useEffect(() => {
        //if(user) return
        const accessToken = localStorage.getItem('token')


        //  MOCK LOGIN (DEV ONLY)
        
        // if (!accessToken) {
        //     console.warn("⚠️ Using mock user for development/testing")
        //     SetUser({
        //         name: "John Doe",
        //         email: "john@example.com",
        //         token: "dev-token"
        //     })
        //     SetLoading(false)
        //     return
        // }
        

        if (!accessToken) {
            SetLoading(false)
            return
        }

        const fetchUser = async () => {
            try {
                const response = await axiosInstance.get(API_PATH.AUTH.GET_PROFILE)
                SetUser(response.data)
            } catch (error) {
                console.error("User not authenticated")
                clearUser()
            } finally {
                SetLoading(false)
            }
        }

        fetchUser()
    }, [])

    const updateUser = (userData) => {
        SetUser(userData)
        if (userData.token) {
            localStorage.setItem('token', userData.token)
        }
        SetLoading(false)
    }

    const clearUser = () => {
        SetUser(null)
        localStorage.removeItem('token')
    }

    return (
        <UserContext.Provider value={{ user, loading, updateUser, clearUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
