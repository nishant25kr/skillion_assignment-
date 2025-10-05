import React from 'react'

function Footer() {
  return (
    <div>

      <footer className="bg-gray-50 py-6 m-2 mt-auto">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} ResumeRAG — All Rights Reserved
        </div>
      </footer>
    </div>
  )
}

export default Footer
