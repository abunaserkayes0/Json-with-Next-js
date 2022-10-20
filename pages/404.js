import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "../styles/NotFound.module.css";
const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [router]);
  return (
    <div className={styled.container}>
      <h1>Oooops...</h1>
      <h2>Page Not Exit or Found</h2>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </div>
  );
};

export default NotFound;
