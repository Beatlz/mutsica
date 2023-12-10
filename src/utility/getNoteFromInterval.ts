import { NOTES, INTERVAL_DISTANCES, getNote, type Note, type Interval } from ".."

export const getNoteFromInterval = (note: Note, interval: Interval | number): Note  => {
	const noteIndex = NOTES.indexOf(note)
	const steps = typeof interval === `number` ? interval : INTERVAL_DISTANCES[interval]

	return getNote(noteIndex, steps)
}
