import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <section id="footer">
      <div
        className={`flex flex-col gap-[64px] justify-center items-center pt-0 md:pt-[64px] pb-[128px]`}
      >
        <div className="grid gap-[16px] justify-center">
          <div className="grid gap-[16px] text-center">
            <h1 className="text-[40px] font-bold">
              Do you want to contact me?
            </h1>
            <p className="text-[18px] leading-[180%]">
              Let's set up a meeting, talk and see what we can create together.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Link href="#">
              <span className="custom-button">Send email</span>
            </Link>
          </div>
        </div>
        <div className="grid gap-[32px]">
          <div className={'flex gap-[16px] justify-center'}>
            <Link href="https://www.linkedin.com/in/roland-mehes/">
              <FaLinkedin size={'32'} color={'#a9c5f1'} />
            </Link>
            <Link href="https://github.com/Roland-Mehes">
              <FaGithub size={'32'} color={'#a9c5f1'} />
            </Link>
          </div>
          {/* © 2025 becoder.dev */}
        </div>
      </div>
    </section>
  );
};

export default Footer;
