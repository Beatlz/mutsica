import {
	CHORDS,
	CHORD_NAMES,
	Chord,
	ChordName,
	ROMAN_NUMERALS,
	ROMAN_NUMERAL_INTERVALS,
	RomanNumeral,
	Scale,
} from ".."

export const romanToChord = (romanChord: string, scale?: Scale) => {
	const degreeRegex = /^[iIvV]+/
	const degree = romanChord.match(degreeRegex)?.shift() as RomanNumeral
	const removeDegree = romanChord.replace(degreeRegex, ``)
	const chordType = CHORD_NAMES.find(chord => chord.includes(removeDegree)) as ChordName

	console.log(degree, chordType)

	if (!degree) throw new Error(`Roman numeral not found.
	Available roman numerals: ${JSON.stringify(ROMAN_NUMERALS)}`)

	const degreeNumber = ROMAN_NUMERAL_INTERVALS[degree]

	if (!chordType) throw new Error(`Chord type not found. Available chord
	Available chord types: ${JSON.stringify(CHORD_NAMES)}`)

	if (!scale) return { degreeNumber, template: CHORDS[chordType].template }

	if (degreeNumber > scale.notes.length - 1) {
		throw new Error(`Chord is larger than the number of notes in the scale (${degree} > ${scale.notes.length}).`)
	}

	const note = scale.notes[degreeNumber]

	return new Chord(note, chordType)
}
