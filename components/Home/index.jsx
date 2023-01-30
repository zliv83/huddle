import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import styles from './Home.module.scss';
import Social from './Social';

export default function Home() {
  const socials = [faFacebookF, faTwitter, faInstagram];
  return (
    <div className={styles.page}>
      <div className={styles.background} />
      <div className={styles.logo} />
      <div className={styles.grid}>
        <div className={styles.hero} />
        <div className={styles.info}>
          <span className={styles.title}>
            Build The Community Your Fans Will Love
          </span>
          <span className={styles.description}>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </span>
          <button type="button" className={styles.button}>
            Register
          </button>
        </div>
      </div>
      <div className={styles.socials}>
        {socials.map((social) => (
          <Social key={social.iconName} icon={social} />
        ))}
      </div>
    </div>
  );
}
