// ContactForm.tsx
"use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/styles/contactForm.module.scss";
import Contact_Image from "../../../public/Images/contactUsImage1.jpg";

const ContactForm: React.FC = () => {
  const contactPageRef = useRef<HTMLDivElement>(null);
  const ballRef1 = useRef<HTMLDivElement>(null);
  const ballRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (contactPageRef.current && ballRef1.current && ballRef2.current) {
        const { width, height } = contactPageRef.current.getBoundingClientRect();
        const x = e.clientX / width - 0.5;
        const y = e.clientY / height - 0.5;

        ballRef1.current.style.transform = `translate(${-x * 500}px, ${-y * 500}px)`;
        ballRef2.current.style.transform = `translate(${-x * 700}px, ${-y * 700}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.contactFormContainer} id="contact-us" ref={contactPageRef}>
      <div className={styles.contactFormHeading}>
        <h2>HAVE A QUESTION?</h2>
        <p className={styles.aboutHeadingUnderline}>
          We are here to help. Send us your query and our team will get back to
          you as soon as possible!!
        </p>
      </div>
      <div className={styles.contactFormContent}>
        <div className={styles.contactform}>
          <form>
            <div className={styles.inputGroup}>
              <input type="text" id="fullName" required />
              <label htmlFor="fullName">Full Name</label>
            </div>
            <div className={styles.inputGroup}>
              <input type="email" id="email" required />
              <label htmlFor="email">Email</label>
            </div>
            <div className={styles.inputGroup}>
              <textarea id="message" rows={4} required></textarea>
              <label htmlFor="message">Message</label>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className={styles.contactFormImage}>
          <Image src={Contact_Image} alt="Contact" priority />
        </div>
      </div>
      <div className={styles.ball1} ref={ballRef1}></div>
      <div className={styles.ball2} ref={ballRef2}></div>
    </div>
  );
};

export default ContactForm;
