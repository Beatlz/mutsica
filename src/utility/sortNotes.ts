import { Frequency } from "tone/build/esm/core/type/Units"
import { NOTE_NAMES, type NoteName } from ".."

export const getNextNoteWithOctave = (firstNoteWithOctave: Frequency, secondNote: NoteName): Frequency => {
	/*
	Given a tone (Frequency) and a NoteName(e.g. "C4", "B"), returns the second note with the closest higher octave
	E.g. getNextNoteWithOctave("C4", "D") => "D4"
	*/
	const firstNote = (<string>firstNoteWithOctave).slice(0, -1)
	const firstOctave = parseInt((<string>firstNoteWithOctave).slice(-1), 10)
	const firstNoteIndex = NOTE_NAMES.findIndex(n => n === firstNote)
	const secondNoteIndex = NOTE_NAMES.findIndex(n => n === secondNote)

	if (secondNoteIndex <= firstNoteIndex || !secondNoteIndex) {
		return `${secondNote}${firstOctave + 1}`
	}

	return `${secondNote}${firstOctave}`
}

export const getSortedNotes = (scale: NoteName[], octaves: number, firstOctave: number) => {
	/* Given an array of note names, the number of octaves, and the lowest octave,
	this function returns a list from highest to lowest Frequency (in C4 form) */
	const notes: Frequency[] = []
  
	let currentNoteIndex = 0

	for (let currentOctave = firstOctave; currentOctave < firstOctave + octaves; currentOctave++) {
		scale.forEach((note, index) => {
			if (index < 1) {
				notes.push(`${note}${currentOctave}` as NoteName)
			} else {
				const previousNote = notes[currentNoteIndex - 1] as string

				notes.push(getNextNoteWithOctave(previousNote, note))
			}

			currentNoteIndex++
		})
	}

	return notes.reverse() as NoteName[]
}

export const sortTones = (tones: NoteName[], rootOctave: number) => {
	const root = tones[0]
	const sortedTones = [...tones.slice(1), ...tones.slice(0, 1)]
	const sortedTonesWithOctaves = getSortedNotes(sortedTones, 1, rootOctave)

	return sortedTonesWithOctaves
}
