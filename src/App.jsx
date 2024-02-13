import React, { useState } from "react";
import rocketIcon from "./assets/rocket.svg";
import placeholderImage from "./assets/placeholder-image.png";
import "./App.css";

function ButtonTextBox({ exampleValue, setExampleValue, handleButtonClick }) {
	return (
		<div className="card-group">
			<h2>
				<img src={rocketIcon} className="icon" alt="Rocket Icon" />
				Examples:
			</h2>
			<button onClick={() => handleButtonClick("Button 1")}>Button 1</button>
			<br />
			<button onClick={() => handleButtonClick("Button 2")}>Button 2</button>
			<br />
			<button onClick={() => handleButtonClick("Button 3")}>Button 3</button>
			<br />
			<input
				type="text"
				value={exampleValue}
				onChange={(e) => setExampleValue(e.target.value)}
				placeholder="Text Box"
			/>
		</div>
	);
}

function PromptInput({
	promptInput,
	setPromptInput,
	exampleValue,
	setExampleValue,
}) {
	exampleValue ? (promptInput = exampleValue) : "";
	const handleInputChange = (event) => {
		setPromptInput(event.target.value);
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		console.log("Form submitted with value:", promptInput);
		// Handle form submission logic here
	};

	const handleFormReset = () => {
		setPromptInput(""); // Reset the input field
		setExampleValue("");
	};

	return (
		<div className="card-group">
			<h2>
				<img src={rocketIcon} className="icon" alt="Rocket Icon" />
				Enter Prompt:
			</h2>
			<form className="form-group" onSubmit={handleFormSubmit}>
				<label htmlFor="promptInput"></label>
				<input
					type="text"
					className={promptInput ? "form-prompt has-value" : "form-prompt"}
					id="promptInput"
					name="promptInput"
					value={promptInput}
					onChange={handleInputChange}
				/>
				<span className="form-label">prompt here</span>
				<button type="submit">Send</button>
				<button type="reset" onClick={handleFormReset}>
					Reset
				</button>
			</form>
		</div>
	);
}

function ImageComponent() {
	const handleImageError = (e) => {
		const target = e.target;
		target.onerror = null;
		target.src = placeholderImage;
	};

	return (
		<img
			src="./assets/image.jpg"
			alt="Description of the image"
			onError={handleImageError}
		/>
	);
}

function App() {
	const [exampleValue, setExampleValue] = useState("");
	const [promptInput, setPromptInput] = useState("");

	const handleButtonClick = (title) => {
		setExampleValue(title);
	};

	return (
		<>
			<h1>Mindprompt.</h1>
			<div className="container">
				<div className="left-side">
					<PromptInput
						promptInput={promptInput}
						setPromptInput={setPromptInput}
						exampleValue={exampleValue}
						setExampleValue={setExampleValue}
					/>
					<ButtonTextBox
						exampleValue={exampleValue}
						setexampleValue={setExampleValue}
						handleButtonClick={handleButtonClick}
					/>
				</div>
				<div className="right-side">
					<div>
						<h2>Your Result:</h2>
						<ImageComponent />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
