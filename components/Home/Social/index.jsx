import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Social.module.scss';

export default function Social({ icon }) {
  return (
    <div className={styles.social}>
      <FontAwesomeIcon icon={icon} className={styles.icon} />
    </div>
  );
}
