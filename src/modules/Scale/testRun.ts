import { SCALES, Scale } from "../.."

const major = SCALES.maj.template
const C = new Scale(`C`, major)

console.log(C.chords)
