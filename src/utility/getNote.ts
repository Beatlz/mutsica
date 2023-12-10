import { NOTES, endlessArray } from "../"

export const getNote = (rootIndex: number, steps: number) => endlessArray(NOTES, rootIndex, steps)
