"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '@/styles/counter.module.scss';

interface CounterProps {
  finalNumber: number;
  label: string;
  iconSrc: any;
}

const CounterCard: React.FC<CounterProps> = ({ finalNumber, label, iconSrc }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && count < finalNumber) {
      const increment = finalNumber / 40; 
      const timer = setInterval(() => {
        setCount(prev => {
          const next = prev + increment;
          return next >= finalNumber ? finalNumber : next;
        });
      }, 50);
      return () => clearInterval(timer);
    }
  }, [count, finalNumber, isVisible]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      const thousands = Math.floor(num / 1000);
      return `${thousands}K`;
    }
    return Math.round(num).toString();
  };

  const formattedNumber = formatNumber(count);

  return (
    <div className={styles.counterCard} ref={cardRef}>
      <div className={styles.svgIcon}>
        <Image src={iconSrc} alt={label} width={90} height={90} priority/>
      </div>
      <div className={styles.counterNumber}>{formattedNumber}+</div>
      <div className={styles.counterLabel}>{label}</div>
    </div>
  );
};

interface HackathonDetail {
  number?: number;
  name?: string;
  finalNumber?: number;
  label?: string;
  iconSrc?: any;
}

interface ContainerProps {
  hackathonDetails?: HackathonDetail[];
}

const CounterCardContainer: React.FC<ContainerProps> = ({ hackathonDetails = [] }) => {
  const defaultCounters: CounterProps[] = [
    { finalNumber: 25000, label: "Active Members", iconSrc: "/Images/CounterCard1.svg" },
    { finalNumber: 20, label: "Events Organized", iconSrc: "/Images/CounterCard2.svg" },
    { finalNumber: 400, label: "Team Members", iconSrc: "/Images/CounterCard3.svg" }
  ];

  const counters = hackathonDetails.length > 0 
    ? hackathonDetails.map((detail, index) => ({
        finalNumber: detail.finalNumber ?? defaultCounters[index]?.finalNumber ?? 0,
        label: detail.label ?? defaultCounters[index]?.label ?? '',
        iconSrc: detail.iconSrc ?? defaultCounters[index]?.iconSrc ?? '',
      }))
    : defaultCounters;

  return (
    <div className={styles.container}>
      {counters.map((counter, index) => (
        <CounterCard key={index} {...counter} />
      ))}
    </div>
  );
};

export default CounterCardContainer;