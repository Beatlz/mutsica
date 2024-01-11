import { Chord } from "./modules/Chord"
import { Scale } from "./modules/Scale"
import { romanToChord } from "./utility/romanToChord"

const { degreeNumber, template } = romanToChord(`VII7`) as { degreeNumber: number; template: number[]; }
const notes = new Chord(`C`, template).notes

console.log(notes)
