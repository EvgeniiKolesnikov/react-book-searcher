import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <h1 className={styles.header__title}>Book Searcher</h1>
      </div>
    </header>
  );
};
