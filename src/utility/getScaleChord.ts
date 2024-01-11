import { NoteName, calculateNotes } from ".."

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

export const CHORD_NAMES = ["maj", "m", "dim", "aug", "dom7", "b5b7", "maj7", "m7", "dim7", "mMaj7", "aug7", "sus2", "sus4", "6", "m6", "9", "maj9", "m9", "11", "13"] as const

export type ChordName = typeof CHORD_NAMES[number]

export const CHORDS: Record<ChordName, ChordBuildingBlock> = {
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

export const SCALE_NAMES = [ "maj", "m", "melodicMinor", "harmonicMajor", "harmonicMinor", "pentatonicMajor", "pentatonicMinor", "blues", "dorian", "phrygian", "lydian", "mixolydian", "locrian", "wholeTone", "chromatic", "melodicMinor2", "melodicMinor3", "melodicMinor4", "melodicMinor5", "melodicMinor6", "melodicMinor7", "harmonicMinor2", "harmonicMinor3", "harmonicMinor4", "harmonicMinor5", "harmonicMinor6", "harmonicMinor7", "harmonicMajor2", "harmonicMajor3", "harmonicMajor4", "harmonicMajor5", "harmonicMajor6", "harmonicMajor7"] as const

export type ScaleName = typeof SCALE_NAMES[number]

export const SCALES: Record<ScaleName, ScaleBuildingBlock> = {
	"maj": { type: `scale`, template: [2, 4, 5, 7, 9, 11] },
	"m": { type: `scale`, template: [2, 3, 5, 7, 8, 10] },
	"melodicMinor": { type: `scale`, template: [2, 3, 5, 7, 9, 11], name: "Melodic minor" },
	"harmonicMajor": { type: `scale`, template: [2, 4, 5, 7, 8, 11], name: "Harmonic major" },
	"harmonicMinor": { type: `scale`, template: [2, 3, 5, 7, 8, 11], name: "Harmonic minor" },
	"pentatonicMajor": { type: `scale`, template: [2, 4, 7, 9], name: "Major pentatonic" },
	"pentatonicMinor": { type: `scale`, template: [3, 5, 7, 10], name: "Minor pentatonic" },
	"blues": { type: `scale`, template: [3, 5, 6, 7, 10], },
	"dorian": { type: `scale`, template: [2, 3, 5, 7, 9, 10], },
	"phrygian": { type: `scale`, template: [1, 3, 5, 7, 8, 10], },
	"lydian": { type: `scale`, template: [2, 4, 6, 7, 9, 11] },
	"mixolydian": { type: `scale`, template: [2, 4, 5, 7, 9, 10] },
	"locrian": { type: `scale`, template: [1, 3, 5, 6, 8, 10] },
	"wholeTone": { type: `scale`, template: [2, 4, 6, 8, 10], name: "Whole tone" },
	"chromatic": { type: `scale`, template: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
	"melodicMinor2": { type: `scale`, template: [2, 4, 6, 8, 9, 11], name: "Dorian ♭2" },
	"melodicMinor3": { type: `scale`, template: [1, 4, 5, 7, 8, 10], name: "Lydian Augmented" },
	"melodicMinor4": { type: `scale`, template: [2, 4, 6, 7, 9, 10], name: "Lydian Dominant" },
	"melodicMinor5": { type: `scale`, template: [2, 4, 5, 7, 9, 10], name: "Mixolydian ♭6" },
	"melodicMinor6": { type: `scale`, template: [2, 3, 5, 7, 8, 9], name: "Locrian ♮2" },
	"melodicMinor7": { type: `scale`, template: [1, 3, 4, 6, 8, 9], name: "Altered Scale (Super Locrian)" },
	"harmonicMinor2": { type: `scale`, template: [1, 3, 5, 7, 8, 11], name: "Locrian ♮6" },
	"harmonicMinor3": { type: `scale`, template: [2, 4, 5, 7, 9, 11], name: "Ionian Augmented" },
	"harmonicMinor4": { type: `scale`, template: [2, 4, 6, 7, 8, 10], name: "Dorian ♯4" },
	"harmonicMinor5": { type: `scale`, template: [2, 4, 5, 7, 8, 11], name: "Phrygian Dominant" },
	"harmonicMinor6": { type: `scale`, template: [2, 3, 5, 7, 9, 10], name: "Lydian ♯2" }, // Lydian ♯2
	"harmonicMinor7": { type: `scale`, template: [1, 3, 4, 6, 7, 10], name: "Super Locrian ♭♭7 (Altered ♭♭7)" },
	"harmonicMajor2": { type: `scale`, template: [2, 3, 5, 7, 9, 11], name: "Dorian ♭5" },
	"harmonicMajor3": { type: `scale`, template: [1, 4, 5, 7, 8, 10], name: "Phrygian ♭4" },
	"harmonicMajor4": { type: `scale`, template: [2, 4, 6, 7, 9, 11], name: "Lydian Minor" },
	"harmonicMajor5": { type: `scale`, template: [2, 4, 5, 8, 9, 10], name: "Mixolydian ♭2" },
	"harmonicMajor6": { type: `scale`, template: [1, 3, 5, 6, 8, 10], name: "Lydian Augmented ♯2" },
	"harmonicMajor7": { type: `scale`, template: [2, 4, 5, 7, 8, 10], name: "Locrian ♭♭3" },
}

export const chordsAndScales = { ...CHORDS, ...SCALES }

export const getChordBlock = (chord: ChordName) => {
	if (!(chord in CHORDS)) {
		throw new Error (`Chord not found`)
	}

	return CHORDS[chord]
}

export const getScaleBlock = (scale: ScaleName) => {
	if (!(scale in SCALES)) {
		console.warn(`Scale not found`)

		return {
			name: `scale not found`,
			type: `scale`,
			template: [],
		}
	}

	return SCALES[scale]
}

export const getChord = (root: NoteName, chord: keyof typeof CHORDS) => calculateNotes(root, CHORDS[chord].template)

export const getScale = (root: NoteName, scale: keyof typeof SCALES) => calculateNotes(root, SCALES[scale].template)

export const findTemplate = (template: number[], templateType: TemplateType) => {
	const searchIn = templateType === CHORD ? CHORDS : SCALES
	const result = Object.entries(searchIn).find(([_, block]) => block.template.join(`,`) === template.join(`,`))

	return result
}
