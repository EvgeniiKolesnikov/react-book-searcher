import styles from './Main.module.scss';

export const Main: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.main__container}>
        <div className={styles.main__content}>main</div>
      </div>
    </main>
  );
};
