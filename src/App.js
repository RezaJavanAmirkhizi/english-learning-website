import "../src/styles/app.scss";
import FirstPage from "../src/components/FirstPage";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Words from "../src/data/words";
import SecondPage from "./components/SecondPage";
import Exam from "./components/Exam";
import Learn from "./components/Learn";

function App() {
	const [words, setWords] = useState(
		JSON.parse(localStorage.getItem("words")) === null
			? Words()
			: JSON.parse(localStorage.getItem("words"))
	);

	return (
		<div className="pages">
			<Routes>
				<Route
					exact
					path="/"
					element={<FirstPage words={words} setWords={setWords} />}
				></Route>
				<Route exact path="/secondpage" element={<SecondPage />} />
				<Route
					path="/secondpage/exam"
					element={<Exam words={words} />}
				/>
				<Route
					path="/secondpage/learn"
					element={<Learn words={words} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
