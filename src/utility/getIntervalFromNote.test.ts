import { getIntervalFromNote } from '..'

describe(`getIntervalFromNote`, () => {
	it(`should return the correct interval between two notes`, () => {
		// Example test case
		expect(getIntervalFromNote(`C`, `E`)).toBe(4) // Major third interval
		expect(getIntervalFromNote(`G`, `B`)).toBe(4) // Another major third interval
	})

	it(`should handle wrapping around the array`, () => {
		expect(getIntervalFromNote(`B`, `D`)).toBe(3) // Minor third interval, wrapping around
		expect(getIntervalFromNote(`E`, `C`)).toBe(8) // Major sixth interval, wrapping around
	})

	// Add more test cases to cover different intervals and edge cases
})
