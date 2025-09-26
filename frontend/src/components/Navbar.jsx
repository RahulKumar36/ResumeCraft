import { Layers2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { ProfileInfoCard } from "./card";

export const Navbar = () => {

    return (
        <>
            <div className='fixed top-0 w-full z-50 bg-gray-900/70 backdrop-blur-xl border-b border-gray-700'>
                <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center'>
                    <Link to='/' className='flex items-center gap-3'>
                        
                        <div className='w-10 h-10 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-black/50'>
                            <Layers2 className='w-5 h-5 text-white' />
                        </div>
                
                        <span className='text-xl sm:text-2xl font-black bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent'>
                            ResumeCraft
                        </span>
                    </Link>

                    
                    <ProfileInfoCard />
                </div>
            </div>
        </>
    )
}