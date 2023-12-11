import { Note } from "../.."

export class ChordProgression {
	private _root: Note
	chordProgression: string[]
  
	constructor (root: Note, chordProgression: string[]) {
		this._root = root
		this.chordProgression = chordProgression
	}

	get root(): Note {
		return this._root
	}
}
