import { getNoteFromInterval, type Interval } from ".."

describe(`getNoteFromInterval`, () => {
	it(`should return the correct note for a given interval from a note`, () => {
		// Test with numeric interval
		expect(getNoteFromInterval(`C`, 4)).toBe(`E`) // Major third interval from C
		expect(getNoteFromInterval(`G`, 7)).toBe(`D`) // Perfect fifth interval from G

		// Test with named interval (assuming INTERVAL_DISTANCES is defined correctly)
		expect(getNoteFromInterval(`C`, `maj3` as Interval)).toBe(`E`) // Major third interval from C
		expect(getNoteFromInterval(`G`, `perf5` as Interval)).toBe(`D`) // Perfect fifth interval from G
	})

	// Add more test cases to cover different intervals and edge cases
})
