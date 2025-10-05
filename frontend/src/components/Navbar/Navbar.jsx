import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    const handleLoginLogout = () => {
        localStorage.removeItem("User");
        navigate("/");
    };

    const handleLogout = () => {
        localStorage.removeItem("User");
        setIsLoggedIn(false) 
        navigate("/");
    }

     const handleLogin = () => {
      
        navigate("/login");
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("User"));
        if(user){
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    },);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`
            fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out
            ${isScrolled 
                ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100/50' 
                : 'bg-white shadow-sm'
            }
        `}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center h-20">
                    {/* Enhanced Company Brand */}
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            {/* Logo Icon */}
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                                <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                ResumeRAG
                            </h1>
                            <p className="text-xs text-gray-500 font-medium -mt-1">AI-Powered Recruitment</p>
                        </div>
                    </div>

                    {/* Navigation Links (for larger screens) */}
                   

                    {/* User Profile & Auth Section */}
                    <div className="flex items-center space-x-4">
                        {isLoggedIn ? (
                            <div className="flex items-center space-x-4">
                                {/* User Avatar */}
                                <div className="hidden sm:flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-md">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                        </svg>
                                    </div>
                                    <div className="hidden lg:block">
                                        <p className="text-sm font-semibold text-gray-800">Admin User</p>
                                        <p className="text-xs text-gray-500">Administrator</p>
                                    </div>
                                </div>

                                {/* Logout Button */}
                                <button
                                    onClick={handleLogout}
                                    className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                >
                                    <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                    </svg>
                                    <span>Logout</span>
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={handleLogin}
                                className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                                </svg>
                                <span>Login</span>
                            </button>
                        )}

                        {/* Mobile Menu Button */}
                        {isLoggedIn && (
                            <button className="md:hidden w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-200">
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        )}
                    </div>
                </div>

                {/* Mobile Navigation Menu (hidden by default, you can add state to toggle) */}
                
            </div>

            {/* Subtle bottom border with gradient */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </nav>
    );
};

export default Navbar;
