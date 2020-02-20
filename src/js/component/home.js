import React, { useState, useEffect } from "react";
import { Card } from "./card";
//create your first component
export function Home() {
	const [cards, setCards] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	const [people, setPeople] = useState([]);
	useEffect(() => {
		fetch("https://swapi.com/api/people/")
			.then(resp => resp.json())
			.then(data => {
				setPeople(data.results);
				console.log(data);
			});
	});

	return (
		<>
			<div className="d-flex justify-content-center">
				{cards.map((item, index) => {
					return <Card key={index} />;
				})}
			</div>

			<div classname="d-flex justify-content-center">
				{people.map((item, index) => {
					return <Card key={item.name} />;
				})}
			</div>
		</>
	);
}
