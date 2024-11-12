"use client"
import React from 'react';
import Image from 'next/image';
import styles from '@/styles/ourWork.module.scss';
import { useEffect,useRef } from 'react';
interface WorkBoxProps {
  title: string;
  icon: string;
  icon2: string;
}
const WorkBox: React.FC<WorkBoxProps> = ({ title, icon, icon2 }) => (
  <div className={styles.box}>
    <div className={styles.iconBox}>
      <Image src={icon} alt={title} className={styles.icon} width={166} height={166} />
      <Image src={icon2} alt={title} className={styles.icon2} width={80} height={70}/>
    </div>
    <h3 className={styles.title}>{title}</h3>
  </div>
);

const OurWork: React.FC = () => {
  const workPageRef = useRef<HTMLDivElement>(null);
  const ballRef1 = useRef<HTMLDivElement>(null);
  const ballRef2 = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (workPageRef.current && ballRef1.current && ballRef2.current) {
        const { width, height } = workPageRef.current.getBoundingClientRect();
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
  const workAreas: WorkBoxProps[] = [
    { title: 'Quality', icon: '/Images/rect4.png', icon2:'/Images/Star.png' },
    { title: 'Mentors', icon: '/Images/rect2.png', icon2:'/Images/People.png'  },
    { title: 'Develop', icon: '/Images/rect3.png', icon2:'/Images/Comp.png' },
    { title: 'Product', icon: '/Images/rect1.png', icon2:'/Images/Frame.png' },
  ];

  return (
    <section className={styles.ourWork} ref={workPageRef}>
      <h2 className={styles.sectionTitle}>Our Work</h2>
      <div className={styles.gridContainer}>
        {workAreas.map((area, index) => (
          <WorkBox key={index} title={area.title} icon={area.icon} icon2={area.icon2} />
        ))}
      </div>
      <div className={styles.ball1} ref={ballRef1}></div>
      <div className={styles.ball2} ref={ballRef2}></div>
    </section>
  );
};

export default OurWork;