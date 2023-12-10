export const endlessArray = <T>(array: readonly T[], start: number, end: number) => array[(start + end) % array.length]
