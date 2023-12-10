import { ChordType, Note, splitChordName } from '..'

describe(`splitChordName`, () => {
	it(`should correctly split a chord string into root and type`, () => {
		// Assuming 'Cmaj7' is a valid chord in your system
		const chord = `Cmaj7`
		const expected: { root: Note; type: ChordType } = {
			root: `C`,
			type: `maj7`,
		}

		const result = splitChordName(chord)

		expect(result).toEqual(expected)
	})
})
