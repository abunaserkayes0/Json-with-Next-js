import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/users.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return { props: { users: data } };
};
const Users = ({ users }) => {
  return (
    <>
      <Head>
        <title>JSON || Users</title>
        <meta name="description" content="All Users" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>All Users</h1>
      <div className={styles.singleContainer}>
        {users.map((user) => (
          <Link href={"users/" + user.id} key={user.id}>
            <h2 className={styles.single}>{user.name}</h2>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Users;
