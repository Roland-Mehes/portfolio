import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const HeroLinks = () => (
  <div className="flex gap-[16px] justify-center md:justify-start">
    <Link href="https://www.linkedin.com/in/roland-mehes/">
      <FaLinkedin size={32} color="var(--color-2)" />
    </Link>
    <Link href="https://github.com/Roland-Mehes">
      <FaGithub size={32} color="var(--color-2)" />
    </Link>
  </div>
);

export default HeroLinks;
