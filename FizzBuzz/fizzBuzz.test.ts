// fizzbuzz.test.ts
import { expect } from "chai";
import { createRule, createFizzBuzz, playFizzBuzz } from "./fizzBuzz";

describe("FizzBuzz básico", () => {
	const fizz = createRule(3, "Fizz");
	const buzz = createRule(5, "Buzz");
	const game = createFizzBuzz([fizz, buzz]);

	it("devuelve el número si no cumple reglas", () => {
		expect(game(1)).to.equal("1");
	});

	it("Fizz si es divisible por 3", () => {
		expect(game(3)).to.equal("Fizz");
	});

	it("Buzz si es divisible por 5", () => {
		expect(game(5)).to.equal("Buzz");
	});

	it("FizzBuzz si es divisible por ambos", () => {
		expect(game(15)).to.equal("FizzBuzz");
	});
});

describe("Extensibilidad (Open/Closed)", () => {
	it("permite agregar nuevas reglas sin modificar el juego", () => {
		const fizz = createRule(3, "Fizz");
		const buzz = createRule(5, "Buzz");
		const pop = createRule(7, "Pop");

		const game = createFizzBuzz([fizz, buzz, pop]);

		expect(game(7)).to.equal("Pop");
		expect(game(21)).to.equal("FizzPop");
		expect(game(35)).to.equal("BuzzPop");
		expect(game(105)).to.equal("FizzBuzzPop");
	});
});

describe("Modo jugar", () => {
	it("juega del 1 a un número y devuelve una lista", () => {
		const fizz = createRule(3, "Fizz");
		const buzz = createRule(5, "Buzz");
		const game = createFizzBuzz([fizz, buzz]);

		const result = playFizzBuzz(game, 5);

		expect(result).to.deep.equal(["1", "2", "Fizz", "4", "Buzz"]);
	});
});
