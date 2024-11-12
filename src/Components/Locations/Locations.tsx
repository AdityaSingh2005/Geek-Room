"use client"
import React, { useEffect, useRef } from 'react';
import styles from '@/styles/locations.module.scss';
import Image from 'next/image';

const collegeList = [
  { name: 'Maharaja Surajmal Institute of Technology', logo: '/Locations/msit.png' },
  { name: 'Jagan Institute of Management Studies', logo: '/Locations/JIMS.png' },
  { name: 'Institute of Information Technology & Management', logo: '/Locations/IITMJanakpuri.png' },
  // { name: 'Bennett University', logo: '/Locations/Bennet.png' },

];

const sponsorList = [
  { name: 'Orkes', logo: '/Sponsors/Orkes.png' },
  { name: 'Coding Blocks', logo: '/Sponsors/CodingBlocks.jpg' },
  { name: 'Polygon', logo: '/Sponsors/Polygon.png' },
  { name: 'LazerCrazer', logo: '/Sponsors/LazerCrazer.png' },
  { name: 'Github', logo: '/Sponsors/Github.png' },
  { name: 'TechCanvas', logo: '/Sponsors/TechCanvas.png' },
  { name: 'JetBrain', logo: '/Sponsors/JetBrains.png' },
  { name: 'Replit', logo: '/Sponsors/Replit.png' },
  { name: 'Devfolio', logo: '/Sponsors/Devfolio.png' },
  { name: 'Ox.Day', logo: '/Sponsors/OxDay.png' },
  { name: 'Coding Ninja', logo: '/Sponsors/codingNinja.png' },
  { name: 'ETH India', logo: '/Sponsors/ETHIndia.png' },

];

const Locations = () => {

  const chapterSecRef = useRef<HTMLDivElement>(null);
  const ballRef1 = useRef<HTMLDivElement>(null);
  const ballRef2 = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (chapterSecRef.current && ballRef1.current && ballRef2.current) {
        const { width, height } = chapterSecRef.current.getBoundingClientRect();
        const x = e.clientX / width - 0.5;
        const y = e.clientY / height - 0.5;

        ballRef1.current.style.transform = `translate(${-x * 500}px, ${-y * 500}px)`;
        ballRef2.current.style.transform = `translate(${-x * 700}px, ${-y * 700}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.Locations}>
      <div style={{ width: '100%', height: '100%', position: 'relative' }} ref={chapterSecRef}>
        <div className={styles.LocationsHeading}>
          <h1>Geek Room Chapters</h1>
          <p>Experience the Geek Room revolution at these prestigious institutions.</p>
        </div>
        <div className={styles.collegeGrid}>
          {collegeList.map((college, index) => (
            <div key={index} className={styles.collegeItem}>
              <Image
                src={college.logo}
                alt={`${college.name} logo`}
                width={100}
                height={100}
              />
              <p>{college.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.LocationsHeading}>
        <h1>Past Partners</h1>
        <p>We&apos;re proud to partner with industry leaders who share our vision for a tech-empowered future.</p>
      </div>
      <div className={styles.collegeGrid}>
        {sponsorList.map((college, index) => (
          <div key={index} className={styles.collegeItem}>
            <Image
              src={college.logo}
              alt={`${college.name} logo`}
              width={100}
              height={100}
            />
            <p>{college.name}</p>
          </div>
        ))}
      </div>
      <div>
        And Many More...
      </div>
      <div className={styles.ball1} ref={ballRef1}></div>
      <div className={styles.ball2} ref={ballRef2}></div>
    </div>
  )
}

export default Locations