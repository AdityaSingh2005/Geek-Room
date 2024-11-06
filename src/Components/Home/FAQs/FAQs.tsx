"use client"
import React, { useState, useRef, useEffect } from 'react'
import styles from '@/styles/faq.module.scss';
import Image from 'next/image';
import Plus from '../../../../public/Images/plus.svg'
import Minus from '../../../../public/Images/minus.png'


interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [displayedAnswer, setDisplayedAnswer] = useState('');
  // const [isAnimating, setIsAnimating] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);

    const HandleAnswer = () => {
      setIsOpen(!isOpen);
    };

   
    
    return (
      <div className={styles.FAQItem}>
        <button 
          className={`${styles.FAQQuestion} ${isOpen ? styles.expanded : ''}`} 
          onClick={HandleAnswer}
          style={{ color: isOpen ? '#222222' : '#222222' }}
        >
          {question}
          <Image 
            src={isOpen ? Minus : Plus} 
            alt={isOpen ? 'Collapse' : 'Expand'} 
            width={20} 
            height={20}
            style={{backgroundColor: "gainsboro", borderRadius: "50%"  }}
          />
        </button>
        <div 
          className={`${styles.FAQAnswer} ${isOpen ? styles.open : ''}`}
          style={{ maxHeight: isOpen ? '500px' : '0' }} 
        >
          <p>{answer}</p>  
        </div>
      </div>
    );
  };
    


const FAQs = () => {
  const faqData = [
    {
      question: "What is Geek Room?",
      answer: "Geek Room is a widespread coding community with over 7500+ active coders nationwide. It was started by three 1st year coding enthusiasts with the main objective to create a transparent community where sharing of ideas and helping other people is the main goal . Geek Room boasts of various hackathon winning teams , 6 independent institutes with Geek Room chapters and so much more."
    },
    {
      question: "How to become Community Partner for Geek Room events",
      answer: "To become a community partner for Geek Room , one will only need to fill up a Google form without any charging fee . Since we at Geek Room are committed to build a transparent and free community , community partnerships are greatly appreciated and one can expect the best experience."
    },
    {
      question: "How do I connect with Geek Room? Do I need to pany any fees?",
      answer: "You can connect with Geek Room via our social media handles (Instagram , LinkedIn , Email , WhatsApp) etc . No , you dont need any fees to join Geek Room . You simply fill the google form , give the interview and if considered applicable , you shall be selected in a free and fair manner."
    },
    {
      question: "What makes Geek Room unique?",
      answer: "Our vast connections , a widespread community of over 7500+ coders nationwide , conduction of successful hackathons and events , boasting multi hackathon winning teams comprised purely of Geek Room members , a philosophy of a community of the coders , for the coders and by the coders and a transparent community where anyone can start coding easily , Geek Room is a unique trendsetter that is built for the upliftment of the Indian coding community."
    }
  ];

  const ballRef1 = useRef<HTMLDivElement>(null);
  const ballRef2 = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.FAQ}>
      <div className={styles.FAQs_Box}>
        <div className={styles.FAQ_Heading}>
          <h1>FAQS</h1>
          {/* <p>Frequently Asked Questions</p> */}
        </div>
        <div className={styles.FAQ_Container}>
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      <div className={styles.ball1} ref={ballRef1}></div>
      <div className={styles.ball2} ref={ballRef2}></div>
    </div>
  )
}

export default FAQs