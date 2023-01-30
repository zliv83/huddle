import Head from 'next/head';

import Home from '../components/Home';
import styles from './Home.module.scss';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Home Page</title>
      </Head>
      <Home />
    </div>
  );
}
