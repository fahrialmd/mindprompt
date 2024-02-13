async function query(data) {
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
	return result;
}
query({ inputs: "Astronaut riding a horse" }).then((response) => {
	console.log(response);
});
