import {
	type NoteName,
	Chord,
	endlessArray,
	getIntervalFromNote,
	SCALE,
	getScaleBlock,
	ScaleName,
	RomanNumeral,
	romanToChord,
} from "../.."
import { Notes } from "../Notes"

type ChordSize = 3 | 4 | 5 | 6 | 7

export class Scale extends Notes {
	_chords: Chord[] = []

	constructor(root: NoteName, template: number[] | ScaleName) {
		if (typeof template === `string`) template = getScaleBlock(template).template

		super({
			root,
			template,
			templateType: SCALE,
		})

		this.createChords()
	}

	get chords(): Chord[] {
		return this._chords
	}
	private set chords(chords: Chord[]) {
		this._chords = chords
	}

	createChords(size: ChordSize = 3) {
		this.chords = this.notes.map((note, index) => {
			const chord: number[] = []

			for (let i = 1; i <= size - 1; i++) {
				const third = endlessArray(this.notes, index, 2 * i)

				chord.push(getIntervalFromNote(note, third))
			}

			return new Chord(note, chord)
		})
	}

	chordProgression(chords: RomanNumeral[]): Chord[] {
		return chords.map(chord => romanToChord(chord, this) as Chord)
	}
}
