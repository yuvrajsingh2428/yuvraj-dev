import logo from "../assets/info/yslogo.png"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
       <nav className=" mb-20 flex items-center justify-between px-4 py-1 ">
        <div className="flex flex-shrink-0 items-center h-14">
          <img src={logo} alt="logo" className="mx-2 w-12"/> 
          </div>
          <div className="m-6 flex items-center  justify-center gap-4 text-2xl">
            {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/yuvrajsingh024/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          {/* GitHub */}
          <a href="https://github.com/yuvrajsingh2428" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          {/* X (Twitter) */}
          <a href="https://x.com/yuvrajS2428" target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter/>
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/iamnotyuvrajsingh/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
            </a>

          
            
          </div>
       </nav>
    </div>
  )
}

export default Navbar
