export type ChordConst = `chord`
export type ScaleConst = `scale`
export type CustomConst = `custom`

export const CHORD: ChordConst = `chord`
export const SCALE: ScaleConst = `scale`
export const CUSTOM: CustomConst = `custom`

export type TemplateType = ChordConst | ScaleConst

export interface BuildingBlock {
	name?: string
  type: `chord` | `scale`
  template: number[]
}

export interface ScaleBuildingBlock extends BuildingBlock {
	type: `scale`
}

export interface ChordBuildingBlock extends BuildingBlock {
	type: `chord`
}

export const CHORDS: { [key: string]: ChordBuildingBlock } = {
	"maj": { type: `chord`, template: [4, 7] },
	"m": { type: `chord`, template: [3, 7] },
	"dim": { type: `chord`, template: [3, 6] },
	"aug": { type: `chord`, template: [4, 8] },
	"dom7": { type: `chord`, template: [4, 7, 10] },
	"b5b7": { type: `chord`, template: [3, 6, 10] },
	"maj7": { type: `chord`, template: [4, 7, 11] },
	"m7": { type: `chord`, template: [3, 7, 10] },
	"dim7": { type: `chord`, template: [3, 6, 9] },
	"mMaj7": { type: `chord`, template: [3, 7, 11] },
	"aug7": { type: `chord`, template: [4, 8, 10] },
	"sus2": { type: `chord`, template: [2, 7] },
	"sus4": { type: `chord`, template: [5, 7] },
	"6": { type: `chord`, template: [4, 7, 9] },
	"m6": { type: `chord`, template: [3, 7, 9] },
	"9": { type: `chord`, template: [4, 7, 10, 14] },
	"maj9": { type: `chord`, template: [4, 7, 11, 14] },
	"m9": { type: `chord`, template: [3, 7, 10, 14] },
	"11": { type: `chord`, template: [4, 7, 10, 14, 17] },
	"13": { type: `chord`, template: [4, 7, 10, 14, 17, 21] },
}

export const SCALES: { [key: string]: ScaleBuildingBlock } = {
	"maj": { type: `scale`, template: [2, 4, 5, 7, 9, 11] },
	"m": { type: `scale`, template: [2, 3, 5, 7, 8, 10] },
	"melodicMinor": { type: `scale`, template: [2, 3, 5, 7, 9, 11] },
	"harmonicMajor": { type: `scale`, template: [2, 4, 5, 7, 8, 11] },
	"harmonicMinor": { type: `scale`, template: [2, 3, 5, 7, 8, 11] },
	"pentatonicMajor": { type: `scale`, template: [2, 4, 7, 9] },
	"pentatonicmor": { type: `scale`, template: [3, 5, 7, 10] },
	"blues": { type: `scale`, template: [3, 5, 6, 7, 10] },
	"dorian": { type: `scale`, template: [2, 3, 5, 7, 9, 10] },
	"phrygian": { type: `scale`, template: [1, 3, 5, 7, 8, 10] },
	"lydian": { type: `scale`, template: [2, 4, 6, 7, 9, 11] },
	"mixolydian": { type: `scale`, template: [2, 4, 5, 7, 9, 10] },
	"locrian": { type: `scale`, template: [1, 3, 5, 6, 8, 10] },
	"wholeTone": { type: `scale`, template: [2, 4, 6, 8, 10] },
	"chromatic": { type: `scale`, template: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
	"melodicMinor2": { type: `scale`, template: [2, 4, 6, 8, 9, 11] }, // Dorian ♭2
	"melodicMinor3": { type: `scale`, template: [1, 4, 5, 7, 8, 10] }, // Lydian Augmented
	"melodicMinor4": { type: `scale`, template: [2, 4, 6, 7, 9, 10] }, // Lydian Dominant
	"melodicMinor5": { type: `scale`, template: [2, 4, 5, 7, 9, 10] }, // Mixolydian ♭6
	"melodicMinor6": { type: `scale`, template: [2, 3, 5, 7, 8, 9] }, // Locrian ♮2
	"melodicMinor7": { type: `scale`, template: [1, 3, 4, 6, 8, 9] }, // Altered Scale (Super Locrian)
	"harmonicMinor2": { type: `scale`, template: [1, 3, 5, 7, 8, 11] }, // Locrian ♮6
	"harmonicMinor3": { type: `scale`, template: [2, 4, 5, 7, 9, 11] }, // Ionian Augmented
	"harmonicMinor4": { type: `scale`, template: [2, 4, 6, 7, 8, 10] }, // Dorian ♯4
	"harmonicMinor5": { type: `scale`, template: [2, 4, 5, 7, 8, 11] }, // Phrygian Dominant
	"harmonicMinor6": { type: `scale`, template: [2, 3, 5, 7, 9, 10] }, // Lydian ♯2
	"harmonicMinor7": { type: `scale`, template: [1, 3, 4, 6, 7, 10] }, // Super Locrian ♭♭7 (Altered ♭♭7)
	"harmonicMajor2": { type: `scale`, template: [2, 3, 5, 7, 9, 11] }, // Dorian ♭5
	"harmonicMajor3": { type: `scale`, template: [1, 4, 5, 7, 8, 10] }, // Phrygian ♭4
	"harmonicMajor4": { type: `scale`, template: [2, 4, 6, 7, 9, 11] }, // Lydian Minor
	"harmonicMajor5": { type: `scale`, template: [2, 4, 5, 8, 9, 10] }, // Mixolydian ♭2
	"harmonicMajor6": { type: `scale`, template: [1, 3, 5, 6, 8, 10] }, // Lydian Augmented ♯2
	"harmonicMajor7": { type: `scale`, template: [2, 4, 5, 7, 8, 10] }, // Locrian ♭♭3
}

export const chordsAndScales = { ...CHORDS, ...SCALES }

export const getChord = (chord: string) => {
	if (chord === CUSTOM) return

	if (!(chord in CHORDS)) {
		throw new Error (`Chord not found`)
	}

	return CHORDS[chord]
}

export const getScale = (scale: string) => {
	if (scale === CUSTOM) return

	if (!(scale in SCALES)) {
		throw new Error (`Scale not found`)
	}

	return SCALES[scale]
}

export const findTemplate = (template: number[], templateType: TemplateType) => {
	const searchIn = templateType === CHORD ? CHORDS : SCALES
	const result = Object.entries(searchIn).find(([_, block]) => block.template.join(`,`) === template.join(`,`))

	return result
}
