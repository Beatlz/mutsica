import { Scale } from '../..'

describe(`Scale`, () => {
	describe(`chords property`, () => {
		it(`should generate the correct chords for a given scale`, () => {
			// Example with C major scale
			const cMajorScale = new Scale(`C`, `major`)
			const chords = cMajorScale.chords

			expect(chords[0].notes).toEqual([`C`, `E`, `G`])

			const Am = new Scale(`A`, `m`)
			
			Am.createChords(4)
      
			const AmChords = Am.chords

			expect(AmChords[0].notes).toEqual([`A`, `C`, `E`, `G`])
		})

		// Additional tests for other scales and edge cases
	})
})
