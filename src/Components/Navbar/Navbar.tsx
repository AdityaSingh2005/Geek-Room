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
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../styles/navbar2.module.scss';

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '#about-us' },
  { title: 'Events', href: '/events' },
  { title: 'Contact', href: '#contact-us' },
];

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState<string>('Home');
  const router = useRouter();

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (currentPath === '/') {
      setActiveNavItem('Home');
    } else if (currentPath === '/events') {
      setActiveNavItem('Events');
    }
  }, []);

  const handleNavigation = (title: string, href: string) => {
    if (href.startsWith('#')) {
      router.push('/');
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      router.push(href);
    }
    setActiveNavItem(title);
  };

  return (
    <nav
      className={styles['nav-container']}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`${styles['nav-logo-container']} ${
          isHovered ? styles['hovered'] : ''
        }`}
      >
        <Image
          src={img1}
          alt="Left bracket"
          width={96}
          height={96}
          className={`${styles['nav-logo-bracket-left']} ${
            isHovered ? styles['hovered-left'] : ''
          }`}
        />
        <div
          className={`${styles['nav-logo-dot']} ${styles['dot-left']} ${
            isHovered ? styles['hidden'] : styles['visible']
          }`}
        />
        <Image
          src={slash}
          alt="Slash"
          width={96}
          height={96}
          className={styles['nav-logo-slash']}
        />
        <div
          className={`${styles['nav-logo-dot']} ${styles['dot-right']} ${
            isHovered ? styles['hidden'] : styles['visible']
          }`}
        />
        <Image
          src={img2}
          alt="Right bracket"
          width={96}
          height={96}
          className={`${styles['nav-logo-bracket-right']} ${
            isHovered ? styles['hovered-right'] : ''
          }`}
        />
      </div>
      <div
        className={`${styles['nav-items']} ${
          isHovered ? styles['visible'] : styles['hidden']
        }`}
      >
        <div className={styles['nav-items-list']}>
          {navItems.map((item) => (
            <span
              key={item.href}
              className={`${styles['nav-items-list-link']} ${
                activeNavItem === item.title ? styles['active'] : ''
              }`}
              onClick={() => handleNavigation(item.title, item.href)}
            >
              {item.title}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
}
