export const NOTES = [`C`, `C#`, `D`, `D#`, `E`, `F`, `F#`, `G`, `G#`, `A`, `A#`, `B`] as const
export type Note = typeof NOTES[number]

export type CustomTemplate = `custom`

export const CUSTOM: CustomTemplate = `custom`

export const INTERVALS = [
	`root`, `m2`, `maj2`, `m3`, `maj3`, 
	`perf4`, `aug4`, `tritone`, `perf5`, `dim5`, `aug5`, `m6`, `maj6`, 
	`m7`, `maj7`, `octave`, `m9`, `maj9`, 
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
	perf11: 17,
	aug11: 18,
	perf12: 19,
	m13: 20,
	maj13: 21,
}

export const CHORD_NAMES = [
	`maj`, `m`, `dim`, `aug`, 
	`dom7`, `maj7`, `m7`, `dim7`, `mMaj7`, 
	`aug7`, `sus2`, `sus4`, 
	`6`, `m6`, 
	`9`, `maj9`, `m9`, `11`, `13`,
] as const
export type ChordType = typeof CHORD_NAMES[number]
export const CHORDS: Record<ChordType, number[]> = {
	'maj': [4, 7],
	'm': [3, 7],
	'dim': [3, 6],
	'aug': [4, 8],
	'dom7': [4, 7, 10],
	'maj7': [4, 7, 11],
	'm7': [3, 7, 10],
	'dim7': [3, 6, 9],
	'mMaj7': [3, 7, 11],
	'aug7': [4, 8, 10],
	'sus2': [2, 7],
	'sus4': [5, 7],
	'6': [4, 7, 9],
	'm6': [3, 7, 9],
	'9': [4, 7, 10, 14],
	'maj9': [4, 7, 11, 14],
	'm9': [3, 7, 10, 14],
	'11': [4, 7, 10, 14, 17],
	'13': [4, 7, 10, 14, 17, 21],
}

export const SCALE_NAMES = [
	`major`, `m`, `harmonicMinor`, `harmonicMajor`, `melodicMinor`, 
	`pentatonicMajor`, `pentatonicmor`, `blues`, 
	`dorian`, `phrygian`, `lydian`, `mixolydian`, `locrian`, 
	`wholeTone`, `chromatic`,
	`melodicMinor2`, `melodicMinor3`, `melodicMinor4`, `melodicMinor5`, `melodicMinor6`, `melodicMinor7`,
	`harmonicMinor2`, `harmonicMinor3`, `harmonicMinor4`, `harmonicMinor5`, `harmonicMinor6`, `harmonicMinor7`,
	`harmonicMajor2`, `harmonicMajor3`, `harmonicMajor4`, `harmonicMajor5`, `harmonicMajor6`, `harmonicMajor7`,
] as const
export type ScaleType = typeof SCALE_NAMES[number];
export const SCALES: Record<ScaleType, number[]> = {
	'major': [2, 4, 5, 7, 9, 11],
	'm': [2, 3, 5, 7, 8, 10],
	'melodicMinor': [2, 3, 5, 7, 9, 11],
	'harmonicMajor': [2, 4, 5, 7, 8, 11],
	'harmonicMinor': [2, 3, 5, 7, 8, 11],
	'pentatonicMajor': [2, 4, 7, 9],
	'pentatonicmor': [3, 5, 7, 10],
	'blues': [3, 5, 6, 7, 10],
	'dorian': [2, 3, 5, 7, 9, 10],
	'phrygian': [1, 3, 5, 7, 8, 10],
	'lydian': [2, 4, 6, 7, 9, 11],
	'mixolydian': [2, 4, 5, 7, 9, 10],
	'locrian': [1, 3, 5, 6, 8, 10],
	'wholeTone': [2, 4, 6, 8, 10],
	'chromatic': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
	'melodicMinor2': [2, 4, 6, 8, 9, 11], // Dorian ♭2
	'melodicMinor3': [1, 4, 5, 7, 8, 10], // Lydian Augmented
	'melodicMinor4': [2, 4, 6, 7, 9, 10], // Lydian Domant
	'melodicMinor5': [2, 4, 5, 7, 9, 10], // Mixolydian ♭6
	'melodicMinor6': [2, 3, 5, 7, 8, 9], // Locrian ♮2
	'melodicMinor7': [1, 3, 4, 6, 8, 9], // Altered Scale (Super Locrian)
	'harmonicMinor2': [1, 3, 5, 7, 8, 11], // Locrian ♮6
	'harmonicMinor3': [2, 4, 5, 7, 9, 11], // Ionian Augmented
	'harmonicMinor4': [2, 4, 6, 7, 8, 10], // Dorian ♯4
	'harmonicMinor5': [2, 4, 5, 7, 8, 11], // Phrygian Domant
	'harmonicMinor6': [2, 3, 5, 7, 9, 10], // Lydian ♯2
	'harmonicMinor7': [1, 3, 4, 6, 7, 10], // Super Locrian ♭♭7 (Altered ♭♭7)
	'harmonicMajor2': [2, 3, 5, 7, 9, 11], // Dorian ♭5
	'harmonicMajor3': [1, 4, 5, 7, 8, 10], // Phrygian ♭4
	'harmonicMajor4': [2, 4, 6, 7, 9, 11], // Lydian mor
	'harmonicMajor5': [2, 4, 5, 8, 9, 10], // Mixolydian ♭2
	'harmonicMajor6': [1, 3, 5, 6, 8, 10], // Lydian Augmented ♯2
	'harmonicMajor7': [2, 4, 5, 7, 8, 10], // Locrian ♭♭3
}
