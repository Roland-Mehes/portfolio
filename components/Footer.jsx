import styles from './Footer.module.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.mainContainer}>
      <div className="grid gap-[16px] justify-center">
        <div className="grid gap-[16px] text-center">
          <h1 className={styles.h1}>Do you want to contact me?</h1>
          <h2>
            Let's set up a meeting, talk and see what we can create together.
          </h2>
        </div>

        <div className="flex items-center justify-center">
          <Link href="#">
            <span className="custom-button">Send email</span>
          </Link>
        </div>
      </div>
      <div className="grid gap-[32px]">
        <div className={'flex gap-[16px] justify-center'}>
          <Link href="#">
            <FaLinkedin size={'32'} color={'#a9c5f1'} />
          </Link>

          <Link href="#">
            <FaGithub size={'32'} color={'#a9c5f1'} />
          </Link>
        </div>
        {/* © 2025 becoder.dev */}
      </div>
    </div>
  );
};

export default Footer;
