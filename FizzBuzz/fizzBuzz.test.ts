import { expect } from "chai";
import { FizzBuzz } from "./fizzBuzz";


describe("FizzBuzz", () => {
	it("Debería retornar {Fizz:0, Buzz:0} 1", () => {
		const fb = new FizzBuzz();
		expect(fb.playFizzBuzz(1)).to.deep.equal({ Fizz: 0, Buzz: 0 });
	});

	it("Debería retornar {Fizz:0, Buzz:0} al ingresar 2", () => {
		const fb = new FizzBuzz();
		expect(fb.playFizzBuzz(2)).to.deep.equal({ Fizz: 0, Buzz: 0 });
	});

	it("Debería retornar {Fizz:2, Buzz:1} al ingresar 6", () => {
		const fb = new FizzBuzz();
		expect(fb.playFizzBuzz(6)).to.deep.equal({ Fizz: 2, Buzz: 1 });
	});

	it("Debería retornar {Fizz:3, Buzz:2} al ingresar 10", () => {
		const fb = new FizzBuzz();
		expect(fb.playFizzBuzz(10)).to.deep.equal({ Fizz: 3, Buzz: 2 });
	});
});
