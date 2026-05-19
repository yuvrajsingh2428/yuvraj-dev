import { motion } from "framer-motion"
import { CONTACT } from "../constants"


const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h1 
        whileInView={{opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100}}
        transition={{ duration:0.5}}
        className="my-10 text-center text-4xl"> Get in Touch</motion.h1>

        <div className="text-center tracking-tighter">
            <motion.p 
            whileInView={{opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100}}
            transition={{ duration: 1}}
            className="my-4">{CONTACT.address} </motion.p>

            <motion.p 
            whileInView={{opacity: 1, x: 0}}
            initial={{ opacity: 0, x: 100}}
            transition={{ duration:0.5}}
            className="my-4"> {CONTACT.phoneNo} </motion.p>
            <a href="#" className="border-b" > {CONTACT.email} </a>

             {/* Download Resume Button */}
             <a
            href="https://drive.google.com/uc?export=download&id=18ozkViRciZPbM-1pCSg03Kc7b2eVIoXO"
            target="_blank"
            download
            className="ml-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-full shadow-lg hover:from-purple-900 hover:via-pink-400 hover:to-red-400 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      
    </div>
  )
}

export default Contact
