export const diff = <T>(A: T[], B: T[]) => B.filter(item => !A.includes(item))
