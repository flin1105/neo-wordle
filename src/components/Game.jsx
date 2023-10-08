import { useState } from "react";
import MainMenu from "./MainMenu";
import { GuessInput } from "./GuessInput";

const Game = () => {
	const [difficulty, setDifficulty] = useState(null);
	const [input, setInput] = useState("");

	const handleSetDifficulty = (choice) => {
		const newDifficulty = choice;
		setDifficulty(newDifficulty);
	};

	const handleCurrentGuess = (guess) => {
		setInput(guess);
	};

	return (
		<div>
			<MainMenu handleSetDifficulty={handleSetDifficulty} />
			<h2>Game is on {difficulty} difficulty</h2>
			<GuessInput
				input={input}
				handleCurrentGuess={handleCurrentGuess}
			/>
		</div>
	);
};

export default Game;
