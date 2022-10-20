import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>JSON || Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello Next Js ✋</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
        maxime cum recusandae, deserunt soluta incidunt perspiciatis labore
        nesciunt error perferendis ratione voluptatibus est dolorem numquam
        reiciendis, nam, quo reprehenderit rem!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
        maxime cum recusandae, deserunt soluta incidunt perspiciatis labore
        nesciunt error perferendis ratione voluptatibus est dolorem numquam
        reiciendis, nam, quo reprehenderit rem!
      </p>
      <Link href="about">
        <a className="btn">see more</a>
      </Link>
    </div>
  );
}
