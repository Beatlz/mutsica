import { NOTES, Note } from ".."

export const getIntervalFromNote = (root: Note, note: Note) => {
	const rootIndex = NOTES.indexOf(root)
	const targetIndex = NOTES.indexOf(note)
  
	let steps = targetIndex - rootIndex

	if (steps < 0) {
		steps += NOTES.length // Correct for wrapping around the array
	}

	return steps
}
