import {
	type ScaleType,
	type Note,
	Notes,
	CUSTOM,
	CustomTemplate,
	Chord,
	endlessArray,
} from "../.."

type ChordSize = 3 | 4 | 5 | 6 | 7

export class Scale extends Notes {
	_chords: Chord[] = []

	constructor(root: Note, chordType: ScaleType | CustomTemplate = CUSTOM, template: number[] = []) {
		super(root, chordType, template)

		this.updateTemplate(`scale`)
		this.createChords()
	}

	get chords(): Chord[] {
		return this._chords
	}
	private set chords(chords: Chord[]) {
		this._chords = chords
	}

	chordTemplates(size: ChordSize = 3) {
		const chords = this.notes.map((note, index) => {
			const chordTemplate: number[] = []

			for (let i = 1; i <= size; i++) {
				const interval = endlessArray(this.template, index, index + 2 * i)

				chordTemplate.push(interval < index ? interval + this.template.length - index : interval)
			}

			return chordTemplate
		})

		return chords
	}

	createChords() {
		this.chords = this.chordTemplates().map(template => new Chord(this.root, CUSTOM, template))
	}
}
