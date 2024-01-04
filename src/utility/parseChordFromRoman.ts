import {
	ChordStructure,
	ChordConst,
	RomanNumeral,
	ROMAN_NUMERAL_INTERVALS,
	// MAJOR_ROMAN_NUMERALS,
} from ".."

// type MajorRomans = typeof majorRomanNumerals[number]

export const parseChordFromRoman = (roman: string): ChordStructure => {
	// Step 1: Extract the Roman numeral (scale degree)
	const degreeRegex = /^[iIvV]+/
	const degreeMatch = roman.match(degreeRegex)
	const degree = (degreeMatch ? degreeMatch[0] : ``) as RomanNumeral

	if (!degree) throw new Error(`Roman numeral not found.`)

	// Step 2: Remove the degree part from the original notation
	const remaining = roman.substring(degree.length)

	// Step 3: Define known chord types for matching
	const knownChordTypes = [`maj7`, `m7`, `7`, `dim`, `aug`] // Add more as needed
	let chordType = ``
	let alteration = ``

	// Step 4: Find the chord type (if any)
	for (const type of knownChordTypes) {
		if (remaining.startsWith(type)) {
			chordType = type
			alteration = remaining.substring(type.length)
			break
		}
	}

	return { degree: ROMAN_NUMERAL_INTERVALS[degree] as number, name: chordType as ChordConst, alteration }
}
