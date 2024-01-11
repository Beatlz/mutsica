export const NOTE_NAMES = [`C`, `C#`, `D`, `D#`, `E`, `F`, `F#`, `G`, `G#`, `A`, `A#`, `B`] as const
export type NoteName = typeof NOTE_NAMES[number]

export type Tonality = `maj` | `m`
export const MAJOR: Tonality = `maj`
export const MINOR: Tonality = `m`

export const INTERVALS = [
	`root`, `m2`, `maj2`, `m3`, `maj3`, 
	`perf4`, `aug4`, `tritone`, `perf5`, `dim5`, `aug5`, `m6`, `maj6`, 
	`m7`, `maj7`, `octave`, `m9`, `maj9`, `#9`, `#11`,
	`perf11`, `aug11`, `perf12`, `m13`, `maj13`,
] as const
export type Interval = typeof INTERVALS[number]
export const INTERVAL_DISTANCES: Record<Interval, number> = {
	root: 0,
	m2: 1,
	maj2: 2,
	m3: 3,
	maj3: 4,
	perf4: 5,
	aug4: 6,
	tritone: 6,
	perf5: 7,
	dim5: 6,
	aug5: 8,
	m6: 8,
	maj6: 9,
	m7: 10,
	maj7: 11,
	octave: 12,
	m9: 13,
	maj9: 14,
	"#9": 15,
	"#11": 18,
	perf11: 17,
	aug11: 18,
	perf12: 19,
	m13: 20,
	maj13: 21,
}

export interface ChordStructure {
  degree: number
  name: string
  alteration: string
}

export const MAJOR_ROMAN_NUMERALS = [`I`, `II`, `III`, `IV`, `V`, `VI`, `VII`] as const
export const MINOR_ROMAN_NUMERALS = [`i`, `ii`, `iii`, `iv`, `v`, `vi`, `vii`] as const
export const ROMAN_NUMERALS = [...MAJOR_ROMAN_NUMERALS, ...MINOR_ROMAN_NUMERALS] as const

export type RomanNumeral = typeof ROMAN_NUMERALS[number]

export const ROMAN_NUMERAL_INTERVALS: Record<RomanNumeral, number> = {
	i: 0,
	ii: 1,
	iii: 2,
	iv: 3,
	v: 4,
	vi: 5,
	vii: 6,
	I: 0,
	II: 1,
	III: 2,
	IV: 3,
	V: 4,
	VI: 5,
	VII: 6,
}

export const ALTERATION_MODIFIERS = {
	dim: -1,
	aug: 1,
	"#": 1,
	"##": 2,
	bb: -2,
	b: -1,
}
