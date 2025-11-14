export class FizzBuzz {
	fizzCount = 0;
	buzzCount = 0;

	isFizz(num: number): boolean {
		return num % 3 === 0;
	}

	isBuzz(num: number): boolean {
		return num % 5 === 0;
	}

	playFizzBuzz(numero: number): { Fizz: number; Buzz: number } {
		this.fizzCount = 0;
		this.buzzCount = 0;

		for (let i = 1; i <= numero; i++) {
			if (this.isFizz(i)) this.fizzCount++;
			if (this.isBuzz(i)) this.buzzCount++;
		}

		return { Fizz: this.fizzCount, Buzz: this.buzzCount };
	}
}
