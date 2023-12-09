import { NOTES } from "../"

export const getNote = (root: number, steps: number) => root + steps % NOTES.length
