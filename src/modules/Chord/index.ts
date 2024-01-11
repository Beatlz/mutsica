import { CHORD, CUSTOM, ChordName, NoteName, getChordBlock, getSortedNotes } from "../.."
import { Notes } from "../Notes"
import { Frequency } from "tone/build/esm/core/type/Units"

export class Chord extends Notes {
	constructor(root: NoteName, template: number[] | ChordName) {
		if (typeof template === `string`) template = getChordBlock(template).template

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

		return [...this.notes.slice(n, chordSize), ...this.notes.slice(0, n)]
	}

	closed(bassNote = 3): Frequency[] {
		return getSortedNotes(this.notes, 1, bassNote)
	}

	open({ bassNote, brilliance }: { bassNote?: number, brilliance?: 2 | 3 | 4 }): Frequency[] {
		return getSortedNotes(this.notes, brilliance || 2, bassNote || 3)
	}
}
