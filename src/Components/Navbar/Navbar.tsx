// // Navbar.jsx
// "use client";

// import React, { useState, useEffect } from "react";
// import styles from "../../styles/navbar.module.scss";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter, usePathname } from "next/navigation";
// // import GeekRoomLogo from "../../../public/Images/GeekRoomLogo.svg";
// import Geek2 from "../../../public/Images/Transparent logo.png";
// // import ThemeToggle from "../ThemeToggle/ThemeToggle";
// // import DarkMode from "../DarkMode/DarkMode";
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();
//   const [targetSection, setTargetSection] = useState<string | null>(null);

//   const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "#about-us", label: "About" },
//     { href: "/events", label: "Events" },
//     { href: "#contact-us", label: "Contact" },
//   ];

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
  
//   useEffect(() => {
//     if (targetSection && pathname === "/") {
//       const targetElement = document.querySelector(targetSection);
//       if (targetElement) {
//         targetElement.scrollIntoView({ behavior: "smooth" });
//       }
//       setTargetSection(null); 
//     }
//   }, [pathname, targetSection]);

//   const handleScroll = (e: any, href: any) => {
//     e.preventDefault();

//     if (href.startsWith("#") && pathname === "/") {
//       const targetElement = document.querySelector(href);
//       if (targetElement) {
//         targetElement.scrollIntoView({ behavior: "smooth" });
//       }
//     } else if (href.startsWith("#")) {
//       setTargetSection(href);
//       router.push("/");
//     } else {
//       router.push(href);
//     }
//     setIsOpen(false);
//   };
//   {/*const handleScroll = (e: any, href: any) => {
//     e.preventDefault();

//     if (href.startsWith("#")) {
//       const targetElement = document.querySelector(href);
//       if (targetElement) {
//         targetElement.scrollIntoView({ behavior: "smooth" });
//       }
//     } else {
//       window.location.href = href;
//     }
//   };*/}

//   return (
//     <div className={styles.Navbar}>
//       <div className={styles.GeekRoomLogo}>
//         <Image src={Geek2} alt="GeekRoomLogo" height={60} width={60}/>
//       </div>
//       <div className={styles.Hamburger} onClick={toggleMenu}>
//         <div className={styles.Line}></div>
//         <div className={styles.Line}></div>
//         <div className={styles.Line}></div>
//       </div>
//       <div className={`${styles.Navbar_Links} ${isOpen ? styles.show : ""}`}>
//         <ul>
//           {navLinks.map(({ href, label }) => (
//             <li key={href}>
//               <a href={href} onClick={(e) => handleScroll(e, href)}>
//                 <span className={pathname === href ? styles.active : ""}>
//                   {label}
//                 </span>
//               </a>
//             </li>
//           ))}
//           {/* <div className="flex flex-1 justify-end">
//             <ThemeSwitch />
//           </div> */}
//           {/* <DarkMode /> */}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
'use client';

import Image from 'next/image';
import Link from 'next/link';
import img1 from './gr_left_bracket.svg';
import slash from './gr_slash.svg';
import img2 from './gr_right_bracket.svg';
import { useState } from 'react';

const navItems = [
  { title: 'Home', href: '/', active: true },
  { title: 'About', href: '#about-us', active: false },
  { title: 'Events', href: '/events', active: false },
  { title: 'Contact', href: '#contact-us', active: false },
];

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="relative w-full px-4 py-6 bg-white">
      <div 
        className="max-w-4xl mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Logo Container */}
        <div className="flex justify-center items-center h-24 relative">
          {/* Left Bracket */}
          <Image 
            src={img1}
            alt="Left bracket"
            width={96}
            height={96}
            className={`h-24 w-auto mr-[-70px] transition-transform duration-500 ease-in-out
              ${isHovered ? 'translate-x-[-45vw]' : 'translate-x-0'}`}
          />
          
          {/* Left Dot */}
          <div className={`absolute left-[50%] ml-[-20px] mt-[-6px] bg-black h-2.5 w-2.5 rounded-full
            transition-opacity duration-500 ease-in-out
            ${isHovered ? 'opacity-0' : 'opacity-100'}`}
          />

          {/* Slash */}
          <Image
            src={slash}
            alt="Slash"
            width={96}
            height={96}
            className="h-24 w-auto z-10"
          />

          {/* Right Dot */}
          <div className={`absolute left-[50%] ml-[8px] mt-[-6px] bg-black h-2.5 w-2.5 rounded-full
            transition-opacity duration-500 ease-in-out
            ${isHovered ? 'opacity-0' : 'opacity-100'}`}
          />

          {/* Right Bracket */}
          <Image
            src={img2}
            alt="Right bracket"
            width={96}
            height={96}
            className={`h-24 w-auto ml-[-70px] transition-transform duration-500 ease-in-out
              ${isHovered ? 'translate-x-[45vw]' : 'translate-x-0'}`}
          />
        </div>

        {/* Navigation Items */}
        <div className={`absolute top-14 left-0 w-full
          transition-all duration-500 ease-in-out
          ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex justify-center gap-16 max-w-4xl mx-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-1 px-6 rounded-2xl text-lg text-black transition-colors duration-300
                  ${item.active ? 'bg-[#F15A22] text-white' : 'hover:bg-gray-100'}`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}