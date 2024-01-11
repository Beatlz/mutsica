import { Scale, romanToChord } from "../.."

export class ChordProgression {
	private _scale: Scale
	progression: number[][]

	constructor(scale: Scale, progression: number[][]) {
		this._scale =	scale
		this.progression = progression
	}

	get scale(): Scale {
		return this._scale
	}
	set scale(scale: Scale) {
		this._scale = scale
	}

	parseTemplates(items: (string | number)[]) {
		return items.map(item => {
			if (typeof item !== `string`) return item

			romanToChord(item)
		})
	}
}
