import { useState } from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as Icon } from '~/assets/icons/Group 16.svg';
import { Button } from '~/shared/ui/Button/Button';

import styles from './Header.module.scss';

export const Header = () => {
  const [search, setSearch] = useState('');

  const handleSubmit = () => {
    setSearch(search);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.icon}>
          <Icon />
        </div>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/news">Продукция</Link>
          </li>
          <li>
            <Link to="/blog">Контакты</Link>
          </li>
        </ul>
        <div>
          <form
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="поиск..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <Button
              appearance="formButton"
              type="submit"
            >
              искать
            </Button>
          </form>
        </div>
      </nav>
    </header>
  );
};
