import { NOTE_NAMES, endlessArray } from "../"

export const getNote = (rootIndex: number, steps: number) => endlessArray(NOTE_NAMES, rootIndex, steps)
