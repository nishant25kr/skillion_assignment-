import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home"
import Login from "./components/Login"
import Profile from "./components/Profile"
import Resumes from "./components/Resumes"
import ResumePDF from "./components/ResumePDF"

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <main >
        <Routes >
          <Route path="/" Component={Home} /> 
          <Route path="/login" Component={Login} /> 
          <Route path="/dashboard" Component={Profile} />
          <Route path="/resumes" Component={Resumes}/>
          <Route path="/resumes/pdf/:id" Component={ResumePDF} />


        </Routes >
      </main>
      <Footer/>

    </BrowserRouter>
  )
}

export default App
