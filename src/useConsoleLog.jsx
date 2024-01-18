import { useEffect } from "react";

function useConsoleLog(argument) {
	useEffect(() => {
		console.log(argument);
	}, [argument]);
}

export default useConsoleLog;
