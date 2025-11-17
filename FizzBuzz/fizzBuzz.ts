// fizzbuzz.ts

export function createRule(divisor: number, word: string) {
	return function (n: number): string {
		return n % divisor === 0 ? word : "";
	};
}

export function createFizzBuzz(rules: Array<(n: number) => string>) {
	return function (n: number): string {
		let result = "";

		for (const rule of rules) {
			result += rule(n);
		}

		return result === "" ? String(n) : result;
	};
}

export function playFizzBuzz(
	fizzBuzzFn: (n: number) => string,
	max: number,
): string[] {
	const output: string[] = [];

	for (let i = 1; i <= max; i++) {
		output.push(fizzBuzzFn(i));
	}

	return output;
}
