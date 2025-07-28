import React, { useState } from "react";
import Link from "./link/Link";
// import { FaBeer } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/blog", name: "Blog" },
    { id: 5, path: "/contact", name: "Contact" },
    { id: 6, path: "/login", name: "Login" },
  ];

  return (
    <nav>
      <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
        {open === true ? <MdClose></MdClose> : <RiMenu2Line />}
      </div>
      <ul className="md:flex">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
