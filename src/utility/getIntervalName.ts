import { INTERVAL_DISTANCES, Interval } from ".."

export const getIntervalName = (interval: number): Interval | null => {
	const entry = Object.entries(INTERVAL_DISTANCES).find(([_, distance]) => interval === distance)
	const name = entry ? entry.shift() as Interval : null

	return name
}
