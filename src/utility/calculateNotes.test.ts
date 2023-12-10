import { calculateNotes } from '..'

describe(`calculateNotes`, () => {
	it(`should calculate the correct notes for a given root and interval template`, () => {
		// Example test case
		const root = `C`
		const template = [4, 7] // For a major chord (C, E, G)

		const result = calculateNotes(root, template)
		expect(result).toEqual([`C`, `E`, `G`])
	})

	it(`should handle different roots and intervals`, () => {
		// Add more test cases as needed
		const root = `G`
		const template = [3, 7] // For a minor chord (G, Bb, D)

		const result = calculateNotes(root, template)
		expect(result).toEqual([`G`, `A#`, `D`])
	})

	// Add additional tests to cover edge cases, different interval templates, etc.
})
