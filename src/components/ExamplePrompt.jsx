import React from "react";
import bulbIcon from "../assets/lightbulb.svg";
import { exampleIndexes } from "../utils.js";

export function ExamplePrompt({ handleButtonClick }) {
	const examplePrompts = [
		"An elephant with elongated, melting legs, balancing a grand piano on its trunk.",
		"A clock face melting over a desert landscape, with cacti morphing into humanoid figures.",
		"A staircase spiraling endlessly into a cloudy sky, with each step leading to a different surreal scene.",
		"A landscape where the trees have branches made of melting watches, with each watch displaying a different time.",
		"A figure with a melting face, holding a bouquet of flowers where the petals transform into butterflies.",
		"A melting telephone booth in the middle of a bustling city street, with pedestrians walking upside down.",
		"A landscape where the mountains resemble melting wax sculptures, with rivers of colorful paint flowing between them.",
		"A room filled with mirrors, where each reflection shows a distorted and surreal version of reality.",
		"A train station where the trains have legs and walk along the tracks like giant insects.",
		"A fishbowl with fish swimming in the air above a desert, while the bowl itself is melting into the sand.",
	];
	const selectedExample = [
		examplePrompts[exampleIndexes[0]],
		examplePrompts[exampleIndexes[1]],
		examplePrompts[exampleIndexes[2]],
	];
	return (
		<div className="card-group">
			<h2>
				<img src={bulbIcon} className="icon" alt="Light Bulb Icon" />
				Examples:
			</h2>
			<button
				className="btn-example"
				onClick={() => handleButtonClick(selectedExample[0])}
			>
				{selectedExample[0]}
			</button>
			<br />
			<button
				className="btn-example"
				onClick={() => handleButtonClick(selectedExample[1])}
			>
				{selectedExample[1]}
			</button>
			<br />
			<button
				className="btn-example"
				onClick={() => handleButtonClick(selectedExample[2])}
			>
				{selectedExample[2]}
			</button>
		</div>
	);
}
