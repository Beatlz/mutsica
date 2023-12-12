import { SCALES, Scale } from '../..'

describe(`Scale`, () => {
	describe(`chords property`, () => {
		it(`should generate the correct chords for a given scale`, () => {
			const major = SCALES.maj.template
			const cMajorScale = new Scale(`C`, major)
			const chords = cMajorScale.chords

			expect(chords[0].notes).toEqual([`C`, `E`, `G`])
			expect(chords[0].chordName()).toEqual(`Cmaj`)

			const m = SCALES.m.template
			const Am = new Scale(`A`, m)
			
			Am.createChords(4)
      
			const AmChords = Am.chords

			expect(AmChords[0].notes).toEqual([`A`, `C`, `E`, `G`])
			expect(AmChords[0].chordName()).toEqual(`Am7`)
		})
	})
})
