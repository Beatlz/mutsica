export const endlessArray = <T>(array: readonly T[], start: number, end: number) => array[(start + end) % array.length]

export const endlessIndexOf = <T>(array: readonly T[], start: number, end: number) => (start + end) % array.length
