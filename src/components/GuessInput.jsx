import { PropTypes } from "prop-types";

export const GuessInput = ({ input, handleCurrentGuess }) => {
	return (
		<form>
			<label htmlFor="currentGuess">
				<input
					type="text"
					id="currentGuess"
					name="currentGuess"
					value={input}
					onChange={(event) => handleCurrentGuess(event.target.value)}
				/>
			</label>
		</form>
	);
};

GuessInput.propTypes = {
	input: PropTypes.string,
	handleCurrentGuess: PropTypes.func,
};
