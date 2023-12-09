import {
	type Note,
	type ChordPreset,
	CHORDS,
	NOTES,
	getInterval,
} from "../.."

export class Chord {
	root: Note
	chordType: ChordPreset
	notes: string[]

	constructor(root: Note, chordType: ChordPreset) {
		this.root = root
		this.chordType = chordType
		this.notes = this.calculateNotes()
	}

	private calculateNotes(): string[] {
		const rootIndex = NOTES.indexOf(this.root)
		if (rootIndex === -1) {
			throw new Error(`Invalid root note`)
		}

		const intervals = CHORDS[this.chordType]
		return [this.root, ...intervals.map(interval => getInterval(NOTES[rootIndex], interval))]
	}
}
