import { NOTE_NAMES, INTERVAL_DISTANCES, getNote, type NoteName, type Interval } from ".."

export const getNoteFromInterval = (note: NoteName, interval: Interval | number): NoteName  => {
	const noteIndex = NOTE_NAMES.indexOf(note)
	const steps = typeof interval === `number` ? interval : INTERVAL_DISTANCES[interval]

	return getNote(noteIndex, steps)
}
