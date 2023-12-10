import { Chord, CUSTOM } from '../..'

describe(`Chord`, () => {
	describe(`name`, () => {
		it(`should return the correct name for a standard chord`, () => {
			const chord = new Chord(`C`, `maj`)
			expect(chord.name()).toBe(`Cmaj`)
		})

		it(`should return the correct name for a custom chord`, () => {
			const chord = new Chord(`C`, CUSTOM, [2, 4])
			expect(chord.name()).toBe(`C ${CUSTOM}`)
		})
	})

	describe(`invert`, () => {
		it(`should correctly invert the chord`, () => {
			const chord = new Chord(`C`, `maj`) // Assuming Cmaj has notes ['C', 'E', 'G']
			chord.invert(1)
			expect(chord.notes).toEqual([`E`, `G`, `C`]) // First inversion
		})

		it(`should throw an error for an invalid inversion number`, () => {
			const chord = new Chord(`C`, `maj`)
			expect(() => {
				chord.invert(3) // Assuming Cmaj chord doesn't have 4 notes
			}).toThrow(`Invalid inversion number`)
		})
	})
})
