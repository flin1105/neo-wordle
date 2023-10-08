import { settings } from "../constants";
import { PropTypes } from "prop-types";

const MainMenu = ({ handleSetDifficulty }) => {
	return (
		<>
			<h1>Please Select a Difficulty:</h1>
			<section>
				{settings.map(({ difficulty, numOfGames }, index) => {
					return (
						<button
							key={index}
							onClick={() => handleSetDifficulty(numOfGames)}
							value={numOfGames}
						>
							{difficulty}
						</button>
					);
				})}
			</section>
		</>
	);
};

MainMenu.propTypes = {
	handleSetDifficulty: PropTypes.func,
};

export default MainMenu;
