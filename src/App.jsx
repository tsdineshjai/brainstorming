import {} from "react";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import RouteLayouts from "./Layouts/RouteLayouts";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Login, { dataLoader } from "./Screens/Login";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RouteLayouts />}>
			<Route index element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/login" element={<Login />} loader={dataLoader} />
		</Route>
	)
);

function App() {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
