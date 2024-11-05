import React from 'react';
import Image from 'next/image';
import styles from '@/styles/ourWork.module.scss';

interface WorkBoxProps {
  title: string;
  icon: string;
  icon2: string;
}

const WorkBox: React.FC<WorkBoxProps> = ({ title, icon, icon2 }) => (
  <div className={styles.box}>
    <Image src={icon} alt={title} className={styles.icon} width={200} height={200} />
    <Image src={icon2} alt={title} className={styles.icon2} width={80} height={70}/>
    <h3 className={styles.title}>{title}</h3>
  </div>
);

const OurWork: React.FC = () => {
  const workAreas: WorkBoxProps[] = [
    { title: 'Quality', icon: '/Images/rect4.png', icon2:'/Images/Star.png' },
    { title: 'Mentors', icon: '/Images/rect2.png', icon2:'/Images/People.png'  },
    { title: 'Develop', icon: '/Images/rect3.png', icon2:'/Images/Comp.png' },
    { title: 'Product', icon: '/Images/rect1.png', icon2:'/Images/Frame.png' },
  ];

  return (
    <section className={styles.ourWork}>
      <h2 className={styles.sectionTitle}>Our Work</h2>
      <div className={styles.gridContainer}>
        {workAreas.map((area, index) => (
          <WorkBox key={index} title={area.title} icon={area.icon} icon2={area.icon2} />
        ))}
      </div>
    </section>
  );
};

export default OurWork;