import { ROMAN_NUMERAL_INTERVALS, parseChordFromRoman } from "../"

describe(`parseChordFromRoman`, () => {
	it(`should correctly parse a complex Roman numeral chord notation`, () => {
		const notation = `IVmaj7#9`
		const expected = {
			degree: ROMAN_NUMERAL_INTERVALS.IV,
			name: `maj7`,
			alteration: `#9`,
		}

		expect(parseChordFromRoman(notation)).toEqual(expected)
	})

	it(`should correctly parse a simple Roman numeral chord notation`, () => {
		const notation = `vi`
		const expected = {
			degree: ROMAN_NUMERAL_INTERVALS.vi,
			name: ``,
			alteration: ``,
		}

		expect(parseChordFromRoman(notation)).toEqual(expected)
	})

	// Add more test cases for different notations, including edge cases
})
