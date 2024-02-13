import React from "react";
import rocketIcon from "../assets/rocket.svg";

export function PromptInput({
	promptInput,
	setPromptInput,
	exampleValue,
	setExampleValue,
	handleQuery,
}) {
	const handleInputChange = (event) => {
		setPromptInput(event.target.value);
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		console.log("User Request:", promptInput);
		await handleQuery(promptInput);
	};

	const handleFormReset = () => {
		setPromptInput("");
		setExampleValue("");
	};

	exampleValue && (promptInput = exampleValue); // Avoid overwriting user input

	return (
		<div className="card-group">
			<h2>
				<img src={rocketIcon} className="icon" alt="Rocket Icon" />
				Enter Prompt:
			</h2>
			<form
				className="form-group"
				onSubmit={handleFormSubmit}
				onReset={handleFormReset}
			>
				<label htmlFor="promptInput"></label>
				<textarea
					type="text"
					className={promptInput ? "form-prompt has-value" : "form-prompt"}
					id="promptInput"
					name="promptInput"
					value={promptInput}
					onChange={handleInputChange}
				/>
				<span className="form-label">prompt here</span>
				<button type="submit">Send</button>
				<button type="reset">Reset</button>
			</form>
		</div>
	);
}
