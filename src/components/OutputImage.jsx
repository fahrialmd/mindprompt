import React, { useState } from "react";

export function OutputImage({ imageUrl, placeholderImage }) {
	return (
		<>
			{imageUrl ? (
				<img
					src={imageUrl}
					alt="Generated Image"
					style={{ width: "512px", height: "512px" }}
				/>
			) : (
				<img
					src={placeholderImage}
					alt="Placeholder Image"
					style={{ width: "512px", height: "512px" }}
				/>
			)}
		</>
	);
}

// function ImageDisplay() {
// 	const [imageUrl, setImageUrl] = useState("");

// 	async function query(data) {
// 		const response = await fetch(
// 			"https://api-inference.huggingface.co/models/segmind/SSD-1B",
// 			{
// 				headers: {
// 					Authorization: "Bearer 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",
// 				},
// 				method: "POST",
// 				body: JSON.stringify(data),
// 			}
// 		);
// 		const result = await response.blob();
// 		return result;
// 	}

// 	// Function to handle the API call and display the image
// 	const handleQuery = async () => {
// 		const imageData = await query({
// 			inputs:
// 				"An elephant with elongated, melting legs, balancing a grand piano on its trunk.",
// 		});
// 		const imageUrl = URL.createObjectURL(imageData);
// 		setImageUrl(imageUrl);
// 	};

// 	return (
// 		<div>
// 			<button onClick={handleQuery}>Generate Image</button>
// 			{imageUrl && <img src={imageUrl} alt="Generated Image" />}
// 		</div>
// 	);
// }
