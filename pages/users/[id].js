export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((singleData) => ({
    params: { id: singleData.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const User = ({ data }) => {
  const { name, username, website, email } = data;
  return (
    <>
      <h2>{name}</h2>
      <h3>{username}</h3>
      <h5>{website}</h5>
      <h6>{email}</h6>
    </>
  );
};

export default User;
