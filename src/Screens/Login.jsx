/* eslint-disable react-refresh/only-export-components */
import {} from "react";
import { useLoaderData, useNavigation } from "react-router-dom";

function Login() {
	const data = useLoaderData();

	const navigation = useNavigation();
	console.log(navigation);
	if (navigation.state === "loading") return <h1>The page is Loading....</h1>;
	return (
		<div style={{ padding: "100px" }}>
			<img
				src={data}
				alt="random image"
				height={200}
				width={400}
				style={{ objectFit: "contain" }}
			/>
		</div>
	);
}

export default Login;

export async function dataLoader() {
	const response = await fetch("https://random.dog/woof.json");
	const data = await response.json();
	return data.url;
}
