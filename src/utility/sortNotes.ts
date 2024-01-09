import { NOTE_NAMES, type NoteName } from ".."

export const getNextNoteWithOctave = (firstNoteWithOctave: string, secondNote: NoteName) => {
	const firstNote = firstNoteWithOctave.slice(0, -1)
	const firstOctave = parseInt(firstNoteWithOctave.slice(-1), 10)
	const firstNoteIndex = NOTE_NAMES.findIndex(n => n === firstNote)
	const secondNoteIndex = NOTE_NAMES.findIndex(n => n === secondNote)

	if (secondNoteIndex <= firstNoteIndex || !secondNoteIndex) {
		return `${secondNote}${firstOctave + 1}`
	}

	return `${secondNote}${firstOctave}`
}

export const getSortedNotes = (scale: NoteName[], octaves: number, firstOctave: number) => {
	const notes: string[] = []
  
	let currentNoteIndex = 0

	for (let currentOctave = firstOctave; currentOctave < firstOctave + octaves; currentOctave++) {
		scale.forEach((note, index) => {
			if (index < 1) {
				notes.push(`${note}${currentOctave}`)
			} else {
				const previousNote = notes[currentNoteIndex - 1] as string

				notes.push(getNextNoteWithOctave(previousNote, note))
			}

			currentNoteIndex++
		})
	}

	return notes.reverse()
}
