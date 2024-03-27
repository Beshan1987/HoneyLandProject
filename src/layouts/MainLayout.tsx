import { Outlet } from 'react-router-dom';

import { Footer } from '~/features/Footer/Footer';
import { Header } from '~/features/Header/Header';

import styles from './MainLayout.module.scss';

export const MainLayout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
