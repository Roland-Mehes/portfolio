import Image from 'next/image';
import styles from './Hero.module.css';

const HeroImage = () => (
  <div className={`${styles.imageContainer} self-center`}>
    <Image
      alt="Profil Picture"
      src="/images/profile-anime-image.png"
      height={280}
      width={280}
      priority
      className="lg:min-w-[382px]"
    />
  </div>
);

export default HeroImage;
