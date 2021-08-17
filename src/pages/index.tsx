import Head from 'next/head';
import { FaGithub, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { MdMarkunread } from "react-icons/md";
import styles from './Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Thiago Carvalho | Full-Stack Web Developer</title>
      </Head>
      <div className={styles.home}>
        <h2 className={styles.text}>
          Hello, I'm <span className={styles.highlight}>Thiago Carvalho</span>.<br/>
          I'm a full-stack web developer.
        </h2>
        <div className={styles.socialButtons}>
          <a href="mailto:thiago.xsource@gmail.com?subject=Hi Thiago Carvalho!" title="Mail me">
            <MdMarkunread />
          </a>
          <a href="https://github.com/tgcarvalho" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/tgcarvalho/" target="_blank">
            <FaLinkedinIn />
          </a>
          <a href="https://tgcarvalho.medium.com" title="Publicações" target="_blank">
            <FaMediumM />
          </a>           
        </div>
      </div> 
    </>
  )
}
