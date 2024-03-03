import React from "react";

// import TextInput from "./TextInput.js";
// import SearchResult from "./SearchResult.js";

const ENDPOINT = "https://jor-test-api.vercel.app/api/book-search";

function App() {
	const [searchTerm, setSearchTerm] = React.useState("");
	const [searchResults, setSearchResults] = React.useState([]);
	const [status, setStatus] = React.useState("idle");

	const id = React.useId();
	async function handleSubmit(e) {
		setStatus("loading");
		e.preventDefault();
		// const response = await fetch(`${ENDPOINT}?searchTerm=${searchTerm}`);
		const response = await fetch(`${ENDPOINT}?searchTerm=${searchTerm}`);
		const fetchedData = await response.json();

		if (fetchedData.ok) {
			setStatus(fetchedData.results.length > 0 ? "success" : "empty");
			const data = fetchedData.results;
			setSearchResults(data);
		} else {
			setStatus("error");
		}
	}
	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor={id}>Search the books</label>
				<input
					type="text"
					name="book-search"
					id={id}
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<button>Search the book</button>
			</form>
			{status === "loading" && <h3>Searching....</h3>}
			{status === "error" && <h3>Something went wrong...</h3>}
			{status === "idle" && <h3>Welcome to the book search....</h3>}
			{status === "empty" && <h3>No results....</h3>}

			{status === "success" && (
				<article id="results">
					{searchResults.map((item) => {
						const { isbn, name, author } = item;

						return (
							<article key={isbn}>
								<p>The book name is {name}</p>
								<p>The author is {author}</p>
							</article>
						);
					})}
				</article>
			)}
		</>
	);
}
export default App;
