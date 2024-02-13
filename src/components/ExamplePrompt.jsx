import React from "react";
import bulbIcon from "../assets/lightbulb.svg";
import { exampleIndexes } from "../utils.js";

export function ExamplePrompt({ handleButtonClick }) {
	const examplePrompts = [
		,
		"Create a scene where a forest is made entirely of books, with characters reading as they walk through.",
		"Generate an image of a city skyline where buildings are constructed from giant chess pieces.",
		"Design a futuristic kitchen where utensils and appliances are replaced with plant-based alternatives.",
		"Picture a surreal landscape where clouds are made of cotton candy and rivers flow with liquid gold.",
		"Visualize a library filled with books that have covers made of stained glass depicting scenes from famous novels.",
		"Create a living room where the furniture is made of giant musical instruments, with notes floating in the air.",
		"Design a fantasy castle atop a mountain, surrounded by floating islands connected by rainbow bridges.",
		"Generate an underwater world where sea creatures ride bicycles along coral reefs.",
		"Picture a marketplace where fruits and vegetables are shaped like balloons, floating above stalls.",
		"Visualize a desert landscape where cacti are replaced with giant pencils, each topped with an eraser.",
		"Create a futuristic cityscape where skyscrapers are shaped like towering trees, connected by vine-like walkways.",
		"Design a space station where astronauts ride hoverboards through zero-gravity gardens.",
		"Generate an image of a carnival where roller coasters are replaced with giant pencils, looping through the air.",
		"Picture a laboratory where scientists conduct experiments with potions bubbling in oversized test tubes.",
		"Visualize a surreal forest where trees are made of stacked books, with pages fluttering like leaves.",
		"Create a winter wonderland where snowflakes are shaped like tiny gears, turning as they fall.",
		"Design an enchanted garden where flowers bloom in the shape of musical notes, harmonizing with the wind.",
		"Generate an image of a futuristic city where hovercars zip through neon-lit streets lined with holographic trees.",
		"Picture a futuristic sports stadium where athletes compete on hoverboards above a field of glowing energy.",
		"Visualize a cyberpunk marketplace where vendors sell holographic fruits and virtual reality gadgets.",
		"Create a scene where a group of animals is playing soccer on a beach at sunset.",
		"Generate an image of a city skyline where buildings are made of giant playing cards.",
		"Design a futuristic train station where trains are replaced with flying carpets.",
		"Picture a surreal landscape where mountains are made of stacked pancakes, with rivers of syrup flowing between them.",
		"Visualize a library where books have covers made of living plant material, growing and changing over time.",
		"Create a living room where furniture is made of clouds, with rainbows arching overhead.",
		"Design a fantasy castle guarded by dragons, with towers shaped like oversized chess pieces.",
		"Generate an underwater world where mermaids ride seahorses through coral mazes.",
		"Picture a marketplace where fruits and vegetables are shaped like musical instruments, playing tunes as they're picked.",
		"Visualize a desert landscape where sand dunes are replaced with stacks of books, with pages fluttering in the wind.",
		"Create a futuristic cityscape where buildings are shaped like giant robots, with glowing eyes and moving parts.",
		"Design a space station orbiting a distant planet, where astronauts tend to gardens filled with alien plants.",
		"Generate an image of a carnival where rides are made of giant candy, spinning through a cotton candy sky.",
		"Picture a laboratory where scientists conduct experiments with glowing chemicals in oversized test tubes.",
		"Visualize a surreal forest where trees are made of twisted metal, with gears and cogs scattered on the ground.",
		"Create a winter wonderland where snowflakes are shaped like tiny animals, frolicking in the snow.",
		"Design an enchanted garden where flowers bloom in the shape of geometric patterns, glowing softly in the moonlight.",
		"Generate an image of a futuristic city where hoverboards race through neon-lit streets, dodging flying cars.",
		"Picture a cyberpunk marketplace where vendors sell holographic pets and robotic companions.",
		"Visualize a steampunk workshop where inventors create fantastical machines powered by steam and gears.",
		"Create a scene where a group of aliens plays baseball on a distant planet, with moons as bases.",
		"Design a post-apocalyptic cityscape where nature has reclaimed the streets, with vines covering skyscrapers.",
		"Generate an image of a spaceport on a distant moon, with spaceships docking against a starry sky.",
		"Picture a steampunk airship soaring through clouds, powered by giant propellers.",
		"Visualize a futuristic city where buildings are connected by skybridges made of light.",
		"Create a scene where robots tend to gardens filled with mechanical flowers.",
		"Design a cyberpunk nightclub where holographic dancers perform among neon lights.",
		"Generate an image of a fantasy forest where trees are giant mushrooms, with fairies flitting among them.",
		"Picture a post-apocalyptic wasteland where survivors travel in vehicles made of salvaged parts.",
		"Visualize a steampunk city where airships dock at towering spires, surrounded by gears and steam.",
		"Create a scene where wizards duel in a magical arena, surrounded by swirling spells.",
		"Design a cyberpunk cityscape where neon signs reflect off rain-soaked streets.",
		"Generate an image of a futuristic metropolis where flying cars weave through skyscrapers.",
		"Picture a post-apocalyptic world where nature has reclaimed cities, with animals roaming freely.",
		"Visualize a steampunk laboratory where inventors create mechanical wonders.",
		"Create a scene where pirates sail on airships through a sky filled with floating islands.",
		"Design a cyberpunk street market where vendors sell augmented reality gadgets.",
		"Generate an image of a fantasy kingdom where dragons soar above castle spires.",
		"Picture a post-apocalyptic society where survivors live in underground bunkers.",
		"Visualize a steampunk train station where locomotives run on steam and clockwork.",
		"Create a scene where adventurers explore ruins filled with ancient technology.",
		"Design a cyberpunk skyline where skyscrapers are lit by neon signs and holograms.",
		"Generate an image of a fantasy village nestled in the branches of a giant tree.",
		"Picture a post-apocalyptic landscape where ruins are overgrown with vines and moss.",
		"Visualize a steampunk factory where machines churn out gears and gadgets.",
		"Create a scene where time travelers visit historical landmarks in a futuristic city.",
		"Design a cyberpunk alleyway where neon lights flicker and shadows lurk.",
		"Generate an image of a fantasy castle guarded by mythical creatures.",
		"Picture a post-apocalyptic cityscape where survivors scavenge among ruins.",
		"Visualize a steampunk airship race through stormy skies.",
		"Create a scene where a group of animals is having a tea party in a garden filled with oversized flowers.",
		"Generate an image of a city skyline where skyscrapers are replaced with towering trees, with birds nesting in their branches.",
		"Design a futuristic cityscape where hovercrafts glide through neon-lit streets, with holographic advertisements floating in the air.",
		"Picture a surreal landscape where mountains are made of stacked books, with waterfalls flowing from their pages.",
		"Visualize a library where bookshelves are shaped like waves, with books floating on currents of air.",
		"Create a living room where furniture is made of giant crystals, with light refracting through the room.",
		"Design a fantasy castle atop a cloud, with dragons circling in the sky.",
		"Generate an underwater world where jellyfish light up the depths with bioluminescent glow.",
		"Picture a marketplace where fruits and vegetables are shaped like musical instruments, playing melodies as they're picked.",
		"Visualize a desert landscape where sand dunes are replaced with giant hourglasses, with time flowing like sand.",
		"Create a futuristic cityscape where buildings are connected by transparent tubes, with flying cars zooming through them.",
		"Design a space station orbiting a distant planet, with astronauts tending to gardens filled with alien flora.",
		"Generate an image of a carnival where rides are made of gears and cogs, with steam billowing from their engines.",
		"Picture a laboratory where scientists conduct experiments with glowing chemicals in oversized test tubes.",
		"Visualize a surreal forest where trees are made of tangled vines, with fireflies illuminating the darkness.",
		"Create a winter wonderland where snowflakes are shaped like miniature sculptures, with intricate designs.",
		"Design an enchanted garden where flowers bloom in the shape of celestial bodies, with stars twinkling overhead.",
		"Generate an image of a futuristic city where holographic projections create virtual landscapes in the sky.",
		"Picture a cyberpunk marketplace where vendors sell augmented reality gadgets and robotic pets.",
		"Visualize a steampunk workshop where inventors create fantastical machines powered by steam and gears.",
		"Create a scene where a group of aliens plays soccer on a distant planet, with moons as goalposts.",
		"Design a post-apocalyptic cityscape where nature has reclaimed the streets, with vines covering skyscrapers.",
		"Generate an image of a spaceport on a distant moon, with spaceships docking against a starry sky.",
		"Picture a steampunk airship soaring through clouds, with propellers spinning.",
		"Visualize a futuristic city where buildings are connected by skybridges made of light.",
		"Create a scene where robots tend to gardens filled with mechanical flowers.",
		"Design a cyberpunk nightclub where holographic dancers perform among neon lights.",
		"Generate an image of a fantasy forest where trees are giant mushrooms, with fairies flitting among them.",
		"Picture a post-apocalyptic wasteland where survivors travel in vehicles made of salvaged parts.",
		"Visualize a steampunk city where airships dock at towering spires, surrounded by gears and steam.",
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
