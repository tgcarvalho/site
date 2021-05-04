import styles from '../styles/app.module.scss';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <div className={styles.container}>
          <Component {...pageProps} />
        </div>
      </main>
    </div>
  )
}

export default MyApp
