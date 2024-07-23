import React, { useState } from "react"
import Logo from "../Pages/img/logo.png"
import { TypeAnimation } from "react-type-animation"
import { CiLogout } from "react-icons/ci";
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../contexts/authContext";
import { doSignOut } from "../firebase/auth";

import { Link } from "react-router-dom";



const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [openProfile, setOpenProfile] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const navigate = useNavigate()
    const { userLoggedIn } = useAuth()
	

	return (
		<>
			{/* Mobile */}
			<div className="flex justify-between relative top-3 lg:hidden">
				<div className="w-10 h-10 rounded-full flex justify-center items-center" id="UserButton">
					<img src="/NavIcon.png" alt="" className="w-6 h-6" onClick={toggleMenu} />
				</div>
				<div className={`text-center text-white  ${isMenuOpen ? "hidden" : ""}`}>
					<h1 className="font-bold text-xs mt-4">
					<TypeAnimation
					sequence={[
					  // Same substring at the start will only be typed out once, initially
					  'Hi,Everyone!',
					  1000, // wait 1s before replacing "Mice" with "Hamsters"
					  'Welcome',
					  1000
					]}
					wrapper="span"
					speed={20}
					style={{ fontSize: '2em', display: 'inline-block' }}
					repeat={Infinity}
				  />
					</h1>
				</div>
					
				<div
					className={`w-10 h-10 flex justify-center items-center `}
					id="UserButton">
					<img src="/user.svg" alt="" /> 
				</div>

				{isMenuOpen && (
					<div className="fixed inset-0 bg-black opacity-50 z-10" onClick={toggleMenu}></div>
				)}

				<div
					className={`fixed top-0 left-0 h-full w-64  shadow-lg transform transition-transform duration-300 ease-in-out ${
						isMenuOpen ? "translate-x-0" : "-translate-x-full"
					}`}
					id="IsiNavbar">
					<ul className="mt-8">
					<div className="flex items-center justify-between ">
						<h2 className="font-bold  ">X RPL 4</h2>
						<img src={Logo} className="w-12 h-12" alt="" />
						</div>
					<div className="border-b-2 " id="user">
		
				</div>
				
						<li className="mb-2 item-enter" id="navbar1">
							<a href="#" className="text-white opacity-80 text-lg font-bold">
								Home
							</a>
						</li>
						<li className="mb-2" id="navbar1">
							<a href="#Gallery" className="text-white opacity-80 text-lg font-bold">
								Gallery
							</a>
						</li>
						<li id="navbar1">
							<a href="#Tabs" className="text-white opacity-80 text-lg font-bold">
								Structure & Schedule
							</a>
						</li>
						
						<div className="border-t-2 border-t-transparent mt-2">
						<div className="flex gap-2 md: mt-80 border-b-2 pb-2">
							<div className="flex gap-">
						</div>
						</div>
						
						<div  className="flex items-center mt-2">
						<Link to="/"><button class="BtnL">
  
  <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
  
  <div class="text">Logout</div>
</button></Link>
						</div>
						</div>
					

						{/* btn */}
					
					
					</ul>
	
				</div>
				
			</div>
			

			{/* Dekstop */}
			<div className="flex justify-between relative top-4 hidden lg:flex h-24 item-center">
				<div>
					<img src={Logo}  className="w-14 h-14 rounded-full color" alt="" />
				</div>
				<ul className="mt-2 flex gap-6">
					<li className="mt-2 item-center" id="navbar">
						<a href="#" className="text-white opacity-80 text-[1rem] font-semibold">
							Home
						</a>
					</li>
					<li className="mt-2"id="navbar">
						<a href="#Gallery" className="text-white opacity-80 text-[1rem] font-semibold">
							Gallery
						</a>
					</li>
					<li className="mt-2" id="navbar">
						<a href="#Tabs" className="text-white opacity-80 text-[1rem] font-semibold">
							Structure & Schedule
						</a>
					</li>
					
					{
                userLoggedIn
                    ?
                    <div className="flex" id="logout">
                        <button onClick={() => { doSignOut().then(() => { navigate('/') }) }} className='absolute w-20 h-10 bg-blue-600 hover: border-2 rounded-full'>Logout</button>
                    </div>
                    :
                    <>
                      
                    </>
            }

				</ul>
			</div>
		</>
	)
}

export default Navbar
