import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <div className="header">
        <Logo />

        <h1 className="title">The Gilded Serpent</h1>

        <Logo />
      </div>
      <h2 className="sub-title">A stay like no other</h2>

      <Navbar />
    </>
  );
}
