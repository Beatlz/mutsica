import { CHORD, CUSTOM, NoteName } from "../.."
import { Notes } from "../Notes"

export class Chord extends Notes {
	constructor(root: NoteName, template: number[]) {
		super({
			root,
			template,
			templateType: CHORD,
		})
	}

	chordName(): string {
		return this.name === CUSTOM
			? `${this.root} ${CUSTOM}`
			: `${this.root}${this.name}`
	}

	invert(n: number) {
		const chordSize = this.notes.length

		if (n >= chordSize) throw new Error(`Invalid inversion number`)

		this.notes = [...this.notes.slice(n, chordSize), ...this.notes.slice(0, n)]
	}
}
