import { SCALES, Scale, getIntervalName } from "../.."

const C = new Scale(`C`, SCALES.melodicMinor3.template)

C.createChords(4)

console.log(C.template.map(interval => getIntervalName(interval)))
console.log(C.chords[6].notes)
