import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const RouteLayouts = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default RouteLayouts;
