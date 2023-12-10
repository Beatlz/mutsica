import { type ChordType, Note, NOTES, CHORD_NAMES } from ".."

interface ChordStructure {
  root: Note
  type: ChordType
}

export const splitChordName = (chord: string): ChordStructure => {
	const note = NOTES.find(_note => chord.startsWith(_note))
	const chordType = CHORD_NAMES.find(_chord => chord.endsWith(_chord))

	if (!note) throw new Error(`Note not found.`)
	if (!chordType) throw new Error(`Chord type not found`)

	return {
		root: note,
		type: chordType,
	}
} 
