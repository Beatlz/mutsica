import { NOTES, INTERVAL_DISTANCES, getNote, type Note, type Interval } from ".."

export const getInterval = (note: Note, interval: Interval | number): Note  => {
	const startIndex = NOTES.indexOf(note)
	const steps = typeof interval === `number` ? interval : INTERVAL_DISTANCES[interval]
	const targetIndex = getNote(startIndex, steps)

	return NOTES[targetIndex]
}
