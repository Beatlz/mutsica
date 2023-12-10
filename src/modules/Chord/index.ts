import {
	type Note,
	type ChordType,
	Notes,
	CUSTOM,
	CustomTemplate,
} from "../.."

export class Chord extends Notes {
	constructor(root: Note, chordType: ChordType | CustomTemplate = CUSTOM, template: number[] = []) {
		super(root, chordType, template)

		this.updateTemplate(`chord`)
	}

	name(): string {
		return this.templateType === CUSTOM
			? `${this.root} ${CUSTOM}`
			: `${this.root}${this.templateType}`
	}

	invert(n: number) {
		const chordSize = this.notes.length

		if (n >= chordSize) throw new Error(`Invalid inversion number`)

		this.notes = [...this.notes.slice(n, chordSize), ...this.notes.slice(0, n)]
	}
}
