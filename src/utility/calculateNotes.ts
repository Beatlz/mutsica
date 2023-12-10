import { NOTES, Note, getNoteFromInterval } from ".."

export const calculateNotes = (root: Note, template: number[]) => {
	const rootIndex = NOTES.indexOf(root)
  
	return [root, ...template.map(interval => getNoteFromInterval(NOTES[rootIndex], interval))]
}
