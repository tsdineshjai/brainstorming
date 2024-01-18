import { useState } from "react";
import "./NavbarStyle.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const [active, setActive] = useState("home");
	return (
		<div className="navbar">
			<h3>React Router</h3>
			<nav>
				<ul>
					<NavLink
						to="/"
						onClick={() => setActive("home")}
						className={active === "home" ? "highlight" : ""}
					>
						Home
					</NavLink>
					<NavLink
						onClick={() => setActive("about")}
						className={active === "about" ? "highlight" : ""}
						to="about"
					>
						About
					</NavLink>
					<NavLink
						onClick={() => setActive("login")}
						className={active === "login" ? "highlight" : ""}
						to="login"
					>
						Login
					</NavLink>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
