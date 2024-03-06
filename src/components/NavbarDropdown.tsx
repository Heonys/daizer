"use client";
import Link from "next/link";

const NavbarDropdown = () => {
  const handleClick = () => {
    const elem = document.activeElement as HTMLElement;
    if (elem) {
      elem.blur();
    }
  };
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-5 h-5 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li onClick={handleClick}>
          <Link href="/main">Main</Link>
        </li>
        <li onClick={handleClick}>
          <Link href="/use">Canvas</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarDropdown;
