import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/footer.module.scss'
import Geek2 from "../../../public/Images/Transparent logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faInstagram, faLinkedin, faTwitter)

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoSection}>
          <div className={styles.logoWithText}>
            <Image src={Geek2} alt="Footer Logo" width={120} height={120} />
            <span className={styles.geekRoomText}>Geek Room</span>
          </div>
        </div>
        <div className={styles.linksSection}>
          <Link href="/about" className={styles.link}>About Us</Link>
          <Link href="/events" className={styles.link}>Events</Link>
          <Link href="#" className={styles.link}>Team</Link>
          <Link href="#" className={styles.link}>Collaborate</Link>
        </div>
        <div className={styles.bottomRow}>
          <span className={styles.copyright}>© Copyrights@GeekRoom</span>
          <div className={styles.socialIcons}>
            <Link href="https://www.instagram.com/_geek.room/">
              <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} />
            </Link>
            <Link href="https://www.linkedin.com/company/geekr00m/mycompany/">
              <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcon} />
            </Link>
            <Link href="https://x.com/geek__room_">
              <FontAwesomeIcon icon={faTwitter} className={styles.socialIcon} />
            </Link>
          </div>
          <span className={styles.designedBy}>Learn.Connect.Grow</span>
        </div>
      </div>
    </footer>
  )
}