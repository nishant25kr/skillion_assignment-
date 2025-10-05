import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const handleLoginLogout = () => {
    navigate("/login");
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-indigo-100/20 to-blue-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-50/20 to-pink-50/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 py-20 md:py-32 min-h-screen">
        {/* Left Content */}
        <div className={`flex-1 mb-16 md:mb-0 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {/* Premium Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-full px-6 py-2 mb-8 shadow-sm">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-semibold text-blue-700">AI-Powered Recruitment Platform</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-[1.1]">
            <span className="block">Intelligent</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              ResumeRAG
            </span>
            <span className="block text-4xl md:text-5xl font-bold text-gray-700 mt-2">
              Revolution
            </span>
          </h1>

          {/* Enhanced Description */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed font-medium">
            Transform your recruitment process with our cutting-edge AI platform. 
            <span className="text-gray-800 font-semibold"> Analyze, rank, and manage resumes</span> with 
            unprecedented accuracy and efficiency. Built for the future of talent acquisition.
          </p>

          {/* Feature Highlights */}
         

          {/* Admin Notice */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 mb-10">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-amber-800 mb-2">Admin Access Required</h3>
                <p className="text-amber-700">
                  Secure administrator authentication is required to access the resume dashboard 
                  and manage candidate profiles with enterprise-grade privacy controls.
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleLoginLogout} 
              className="group relative inline-flex items-center justify-center bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 text-white font-bold px-10 py-5 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <svg className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
              </svg>
              <span className="text-xl">Admin Access Portal</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-5 rounded-2xl border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300">
              <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Learn More</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center space-x-8 mt-12 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Enterprise Grade</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              <span>GDPR Compliant</span>
            </div>
          </div>
        </div>

        {/* Right Enhanced Illustration */}
        <div className={`flex-1 flex justify-center transform transition-all duration-1000 ease-out delay-300 ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
        }`}>
          <div className="relative">
            {/* Floating Elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl shadow-xl animate-bounce delay-1000 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl shadow-lg animate-bounce delay-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div className="absolute top-1/2 -right-12 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-md animate-bounce delay-700 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>

            {/* Main Image Container */}
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/9422/9422363.png"
                alt="AI Resume Analysis Illustration"
                className="w-80 md:w-96 drop-shadow-2xl group-hover:scale-105 transition-transform duration-500 relative z-10"
              />
              
              {/* Decorative Elements */}
              <div className="absolute inset-0 rounded-3xl border border-white/20 pointer-events-none"></div>
            </div>

            {/* Stats Cards */}
            <div className="absolute -bottom-8 -left-12 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">98%</p>
                  <p className="text-sm text-gray-600">Accuracy Rate</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-12 -right-16 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">2.5s</p>
                  <p className="text-sm text-gray-600">Avg. Processing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Preview Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-blue-600">ResumeRAG</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of recruitment with our AI-powered platform designed for modern HR professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Lightning Fast",
                description: "Process thousands of resumes in seconds with our advanced AI algorithms."
              },
              {
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                title: "Smart Analytics",
                description: "Get detailed insights and rankings based on job requirements and candidate qualifications."
              },
              {
                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                title: "Secure & Private",
                description: "Enterprise-grade security ensures your candidate data remains protected and confidential."
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon}></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
