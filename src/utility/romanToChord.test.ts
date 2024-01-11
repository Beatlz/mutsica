import { Chord, Scale, romanToChord } from ".."

describe(`romanToChord`, () => {
	it(`Should return the notes for a Cmaj7 (C, E, G, B)`, () => {
		const notation = `Imaj7`
		const expected = [`C`, `E`, `G`, `B`]
		const chord = romanToChord(notation, new Scale(`C`, `maj`)) as Chord

		expect(chord.notes).toEqual(expected)
	})

	it(`Should return the seventh note in the scale of C and the chord template for a C7 (C, E, G, A#)`, () => {
		const { degreeNumber, template } = romanToChord(`VII7`) as { degreeNumber: number; template: number[]; }
		const notes = new Chord(`C`, template).notes
		const cMaj = new Scale(`C`, `maj`)

		expect(notes).toStrictEqual([`C`, `E`, `G`, `A#`])
		expect(degreeNumber).toEqual(6)
		expect(cMaj.notes[degreeNumber]).toEqual(`B`)
	})
})
