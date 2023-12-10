import { CHORDS, SCALES, findTemplate } from '..'

describe(`findTemplate`, () => {
	it(`should find the correct chord template`, () => {
		const template = CHORDS[`maj`] // Assuming 'maj' is a key in CHORDS
		const result = findTemplate(`chord`, template)

		expect(result).toEqual([`maj`, CHORDS[`maj`]])
	})

	it(`should find the correct scale template`, () => {
		const template = SCALES[`major`] // Assuming 'major' is a key in SCALES
		const result = findTemplate(`scale`, template)

		expect(result).toEqual([`major`, SCALES[`major`]])
	})

	it(`should return undefined for a non-existing template`, () => {
		const template = [1, 2, 3] // Some arbitrary template not in CHORDS or SCALES
		const result = findTemplate(`chord`, template)

		expect(result).toBeUndefined()
	})
})
