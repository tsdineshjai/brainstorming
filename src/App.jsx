import React from "react";
import { Modal } from "./Modal";
import "./App.css";

function App() {
	const [isOpen, setIsOpen] = React.useState(false);

	function handleOpen() {
		setIsOpen((currentIsOpen) => !currentIsOpen);
	}

	return (
		<div>
			{!isOpen && (
				<button type="button" onClick={handleOpen}>
					Open the modal
				</button>
			)}
			<Modal isOpen={isOpen} handleClickOpen={handleOpen} />
		</div>
	);
}

export default App;
