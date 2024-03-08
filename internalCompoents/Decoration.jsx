/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React from "react";

function Decoration({ logSomething }) {
	console.info("Decoration render");

	return (
		<>
			<div className="decoration">⛵️⛵️⛵️⛵️⛵️⛵️⛵️⛵️⛵️</div>
			<button onClick={logSomething}>click</button>
		</>
	);
}

const PureDecoration = React.memo(Decoration);
export default PureDecoration;
