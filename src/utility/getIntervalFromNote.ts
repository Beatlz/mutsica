import { NOTE_NAMES, NoteName } from ".."

export const getIntervalFromNote = (root: NoteName, note: NoteName) => {
	const rootIndex = NOTE_NAMES.indexOf(root)
	const targetIndex = NOTE_NAMES.indexOf(note)
  
	let steps = targetIndex - rootIndex

	if (steps < 0) {
		steps += NOTE_NAMES.length // Correct for wrapping around the array
	}

	return steps
}
