import { Chord } from "./modules/Chord"
import { romanToChord } from "./utility/romanToChord"

const { template } = romanToChord(`VII7`) as { degreeNumber: number; template: number[]; }
const notes = new Chord(`C`, template).notes

console.log(notes)
