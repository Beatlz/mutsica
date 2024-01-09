import { NOTE_NAMES, NoteName, getNoteFromInterval } from "../"

export const calculateNotes = (root: NoteName, template: number[]) => {
	const rootIndex = NOTE_NAMES.indexOf(root)
  
	return [root, ...template.map(interval => getNoteFromInterval(NOTE_NAMES[rootIndex], interval))]
}
