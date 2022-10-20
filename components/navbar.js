import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
const Navbar = () => {
  return (
    <>
      <nav>
        <Link href="/">
          <div className="logo">
            <Image width="30" height="30" src={logo} alt="Logo" />
            <h1>Json</h1>
          </div>
        </Link>
        <ul>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="about">
            <a>About</a>
          </Link>
          <Link href="users">
            <a>User Data</a>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
