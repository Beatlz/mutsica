import { parseChordFromRoman } from "../"

describe(`parseChordFromRoman`, () => {
	it(`should correctly parse a complex Roman numeral chord notation`, () => {
		const notation = `IVmaj7#9`
		const expected = {
			degree: `IV`,
			chordType: `maj7`,
			alteration: `#9`,
		}

		expect(parseChordFromRoman(notation)).toEqual(expected)
	})

	it(`should correctly parse a simple Roman numeral chord notation`, () => {
		const notation = `vi`
		const expected = {
			degree: `vi`,
			chordType: ``,
			alteration: ``,
		}

		expect(parseChordFromRoman(notation)).toEqual(expected)
	})

	// Add more test cases for different notations, including edge cases
})
