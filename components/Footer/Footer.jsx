import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <section id="footer">
      <div
        className={`flex flex-col gap-[64px] justify-center items-center pt-0 md:pt-[64px] pb-[128px]`}
      >
        <div className="grid gap-[32px]">
          <div className={'flex gap-[16px] justify-center'}>
            <Link href="https://www.linkedin.com/in/roland-mehes/">
              <FaLinkedin size={'32'} color={'#a9c5f1'} />
            </Link>
            <Link href="https://github.com/Roland-Mehes">
              <FaGithub size={'32'} color={'#a9c5f1'} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
