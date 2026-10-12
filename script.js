"use strict";

/*
 * Animal Adoption Board
 * Displays shelter animals and updates their adoption status.
 * Extra credit: none.
 */

const animals = [
	{ id: 1, name: "Luna", species: "cat", age: 3, adopted: false },
	{ id: 2, name: "Biscuit", species: "dog", age: 7, adopted: true },
	{ id: 3, name: "Pepper", species: "cat", age: 1, adopted: true },
	{ id: 4, name: "Moose", species: "dog", age: 5, adopted: false },
	{ id: 5, name: "Charly", species: "dog", age: 4, adopted: false },
	{ id: 6, name: "Bill", species: "cat", age: 0.5, adopted: true },
	{ id: 7, name: "Chompers", species: "rabbit", age: 0.5, adopted: false },
	{ id: 8, name: "Beowulf", species: "dog", age: 7, adopted: true },
];

// The selected controls determine which animals appear and in what order.
let activeFilter = "all";
let activeSort = "default";

function displayAnimals(animalArray) {
	const animalList = document.querySelector("#animal-list");
	animalList.innerHTML = "";

	if (animalArray.length === 0) {
		const emptyMessage = document.createElement("p");
		emptyMessage.textContent = "There are no animals to show.";
		emptyMessage.classList.add("empty-message");
		animalList.appendChild(emptyMessage);
		return;
	}

	// Build fresh cards so their labels and styles reflect the latest data.
	animalArray.forEach(function (animal) {
		const card = document.createElement("article");
		card.classList.add("animal-card");
		if (animal.adopted) {
			card.classList.add("adopted");
		}

		const name = document.createElement("h3");
		name.textContent = animal.name;
		const species = document.createElement("p");
		species.textContent = "Species: " + animal.species;
		const age = document.createElement("p");
		age.textContent = "Age: " + animal.age;
		const status = document.createElement("p");
		status.textContent = animal.adopted ? "Adopted" : "Available";
		const button = document.createElement("button");
		button.type = "button";
		button.textContent = animal.adopted ? "Return" : "Adopt";

		// This callback runs when this button is clicked. Its closure remembers
		// the animal from this iteration, so its id identifies the right record.
		button.addEventListener("click", function () {
			toggleAdoption(animal.id);
		});
		card.append(name, species, age, status, button);
		animalList.appendChild(card);
	});
}

function toggleAdoption(animalId) {
	// Locate the shared record so adopting and returning use the same action.
	const animal = animals.find(function (animal) {
		return animal.id === animalId;
	});
	if (!animal) {
		return;
	}
	animal.adopted = !animal.adopted;
	updateDisplay();
}

function updateDisplay() {
}

function updateCount() {
}

const allButton = document.querySelector("#show-all");
const availableButton = document.querySelector("#show-available");
const adoptedButton = document.querySelector("#show-adopted");
const sortSelect = document.querySelector("#sort-animals");

// Show the initial shelter list when the script loads.
displayAnimals(animals);
updateCount();
