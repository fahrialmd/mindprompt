import React, { useState, useEffect } from "react";
import "./App.css";
import { PromptInput } from "./components/PromptInput";
import { OutputImage } from "./components/OutputImage";
import { ExamplePrompt } from "./components/ExamplePrompt";
import placeholderImage from "./assets/placeholder-image.png";

function App() {
	const [exampleValue, setExampleValue] = useState("");
	const [promptInput, setPromptInput] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [elapsedTime, setElapsedTime] = useState(0);

	useEffect(() => {
		let timer;
		if (loading) {
			timer = setInterval(() => {
				setElapsedTime((prevTime) => prevTime + 1);
			}, 1000);
		} else {
			setElapsedTime(0);
		}
		return () => clearInterval(timer);
	}, [loading]);

	async function query(data) {
		try {
			setLoading(true);
			const response = await fetch(
				"https://api-inference.huggingface.co/models/segmind/SSD-1B",
				{
					headers: {
						Authorization: "Bearer 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",
					},
					method: "POST",
					body: JSON.stringify(data),
				}
			);
			const result = await response.blob();
			setLoading(false);
			return result;
		} catch (error) {
			setLoading(false);
			setError(error);
		}
	}

	const handleQuery = async (userValue) => {
		try {
			const imageData = await query({ inputs: userValue });
			const imageUrl = URL.createObjectURL(imageData);
			setImageUrl(imageUrl);
		} catch (error) {
			console.error("Error while fetching data:", error);
		}
	};

	const handleButtonClick = (value) => {
		setExampleValue(value);
	};

	return (
		<>
			<h1>Mindprompt.</h1>
			<p style={{ textAlign: "center", fontSize: "20px" }}>
				Visualize your mind
			</p>
			<div className="container">
				<div className="left-side">
					<PromptInput
						promptInput={promptInput}
						setPromptInput={setPromptInput}
						exampleValue={exampleValue}
						setExampleValue={setExampleValue}
						handleQuery={handleQuery}
					/>
					<ExamplePrompt handleButtonClick={handleButtonClick} />
				</div>
				<div className="right-side">
					<div
						className="card-group"
						style={{
							textAlign: "center",
						}}
					>
						<h2>Your Result:</h2>
						<OutputImage
							imageUrl={imageUrl}
							placeholderImage={placeholderImage}
						/>
						<p>Elapsed Time: {elapsedTime} seconds</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
