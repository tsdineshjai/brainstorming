/* eslint-disable no-inner-declarations */
/* eslint-disable react/prop-types */
import React from "react";

import "./Modal.css";

function Modal({ isOpen, handleClickOpen }) {
	const modalRef = React.useRef(null);

	React.useEffect(() => {
		if (isOpen) {
			const modalElement = modalRef.current;
			const focusableElements = modalElement.querySelectorAll(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			);

			const firstElement = focusableElements[0];
			const lastElement = focusableElements[focusableElements.length - 1];

			const handleFocusWithin = (e) => {
				if (e.key === "Tab") {
					if (e.shiftKey && document.activeElement === firstElement) {
						e.preventDefault();
						lastElement.focus();
					} else if (!e.shiftKey && document.activeElement === lastElement) {
						e.preventDefault();
						firstElement.focus();
					}
				}
			};
			const handleEscKey = (e) => {
				if (e.key == "Escape") {
					handleClickOpen();
				}
			};

			document.addEventListener("keydown", handleFocusWithin);
			document.addEventListener("keydown", handleEscKey);

			return () => {
				document.removeEventListener("keydown", handleFocusWithin);
				document.removeEventListener("keydown", handleEscKey);
			};
		}
	}, [isOpen, handleClickOpen]);
	//return fucntions in the useEffect will be run just before the Modal component unmounts
	//this also runs when useEffect runs for the second time.
	return isOpen ? (
		<div className="modal" ref={modalRef}>
			<input type="text" name="name" id="firstName" />
			<input type="text" name="name" id="firstName" />
			<input type="text" name="name" id="firstName" />
			<a href="www.google.com">Google</a>
			<a href="www.google.com">Google</a>
			<a href="www.google.com">Google</a>
			<button type="button" onClick={handleClickOpen}>
				Close the modal
			</button>
		</div>
	) : null;
}

export default Modal;
