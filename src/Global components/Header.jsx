import { useState } from "react";
import headerLogo from "/headerlogo.svg";
import { IoIosHelpCircle } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex justify-between items-center px-10 h-24 fixed top-0 w-full bg-white shadow-md z-50">
      <div className="logo">
        <img src={headerLogo} alt="Header Logo" />
      </div>
      <nav className="hidden md:flex links font-lato">
        <ul className="flex">
          <li className="mr-5 hover:underline cursor-pointer">For Families</li>
          <li className="mr-5 hover:underline cursor-pointer">For Nannies</li>
          <li className="mr-5 hover:underline cursor-pointer">Nanny Share</li>
          <li className="hover:underline cursor-pointer">Services</li>
        </ul>
      </nav>
      <div className="hidden md:block">
        <button className="bg-white text-semi-transparent-black py-1 px-4 border border-gray-600 rounded-3xl transition duration-300 ease-in-out transform hover:bg-gray-200 hover:text-black hover:border-gray-800 hover:shadow-lg hover:scale-105 flex items-center">
          <IoIosHelpCircle className="mr-1" /> Help
        </button>
      </div>
      <div className="md:hidden max-md:flex max-md:items-center z-60">
        <button
          onClick={toggleMobileMenu}
          className="text-gray-600 focus:outline-none"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <nav className="absolute top-24 left-0 w-full h-screen bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center mt-20">
            <li className="py-2 hover:underline cursor-pointer mb-2">
              For Families
            </li>
            <li className="py-2 hover:underline cursor-pointer mb-2">
              For Nannies
            </li>
            <li className="py-2 hover:underline cursor-pointer mb-2">
              Nanny Share
            </li>
            <li className="py-2 hover:underline cursor-pointer mb-2">
              Services
            </li>
            <li className="py-2">
              <button className="bg-white text-semi-transparent-black py-1 px-4 border border-gray-600 rounded-3xl transition duration-300 ease-in-out transform hover:bg-gray-200 hover:text-black hover:border-gray-800 hover:shadow-lg hover:scale-105 flex items-center">
                <IoIosHelpCircle className="mr-1" /> Help
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

// import { useState, useEffect } from "react";
// import headerLogo from "/headerlogo.svg";
// import { IoIosHelpCircle } from "react-icons/io";
// import { FaBars, FaTimes } from "react-icons/fa";
// // import "./App.css";

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = (event) => {
//     event.stopPropagation();
//     setIsMobileMenuOpen((prev) => !prev);
//   };

//   const closeMobileMenu = (event) => {
//     event.stopPropagation();
//     setIsMobileMenuOpen(false);
//   };

//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       // Close mobile menu if clicked outside of it
//       if (
//         !event.target.closest(".mobile-menu") &&
//         !event.target.closest(".mobile-menu-button")
//       ) {
//         setIsMobileMenuOpen(false);
//       }
//     };

//     // Attach event listener to detect clicks outside
//     if (isMobileMenuOpen) {
//       document.addEventListener("click", handleOutsideClick);
//     } else {
//       document.removeEventListener("click", handleOutsideClick);
//     }

//     return () => {
//       document.removeEventListener("click", handleOutsideClick);
//     };
//   }, [isMobileMenuOpen]);

//   return (
//     <header className="header">
//       <div className="logo">
//         <img src={headerLogo} alt="Header Logo" />
//       </div>
//       <nav className="nav-links">
//         <ul>
//           <li>For Families</li>
//           <li>For Nannies</li>
//           <li>Nanny Share</li>
//           <li>Services</li>
//         </ul>
//       </nav>
//       <div className="help-button">
//         <button className="help-btn">
//           <IoIosHelpCircle className="icon" /> Help
//         </button>
//       </div>
//       <div className="mobile-menu-toggle">
//         {/* Toggle to open menu with FaBars, close with FaTimes */}
//         <button
//           onClick={isMobileMenuOpen ? closeMobileMenu : toggleMobileMenu}
//           className="mobile-menu-button"
//         >
//           {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </button>
//       </div>
//       {isMobileMenuOpen && (
//         <nav className="mobile-menu">
//           <ul>
//             <li>For Families</li>
//             <li>For Nannies</li>
//             <li>Nanny Share</li>
//             <li>Services</li>
//             <li>
//               <button className="help-btn">
//                 <IoIosHelpCircle className="icon" /> Help
//               </button>
//             </li>
//           </ul>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;
