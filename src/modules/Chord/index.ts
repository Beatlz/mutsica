import { CHORD, CUSTOM, ChordName, NoteName, getChordBlock, getSortedNotes } from "../.."
import { Notes } from "../Notes"
import { Frequency } from "tone/build/esm/core/type/Units"

export class Chord extends Notes {
	tones: Frequency[] = []

	constructor(root: NoteName, template: number[] | ChordName) {
		if (typeof template === `string`) template = getChordBlock(template).template

		super({
			root,
			template,
			templateType: CHORD,
		})

		this.close()
	}

	chordName(): string {
		return this.name === CUSTOM
			? `${this.root} ${CUSTOM}`
			: `${this.root}${this.name}`
	}

	invert(n: number): Frequency[] {
		const chordSize = this.notes.length

		if (n >= chordSize) throw new Error(`Invalid inversion number`)

		const bassTone = this.tones[n]

		return [bassTone, ...this.tones.slice(0, n), ...this.tones.slice(n)]
	}

	close(bassNote = 3) {
		this.tones = getSortedNotes(this.notes, 1, bassNote)
	}

	open({ bassNote, brilliance }: { bassNote?: number, brilliance?: 2 | 3 | 4 }) {
		this.tones = getSortedNotes(this.notes, brilliance || 2, bassNote || 3)
	}
}
