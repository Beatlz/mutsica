import { Notes, CUSTOM } from "../.."

describe(`Notes`, () => {
	describe(`updateTemplate`, () => {
		it(`should update the template type to the correct preset name for a known template`, () => {
			const notes = new Notes(`C`, CUSTOM, [4, 7]) // Assuming [4, 7] is a major chord template

			notes.updateTemplate(`chord`)
      
			expect(notes.templateType).toBe(`maj`) // Assuming 'maj' is the name for [4, 7] in CHORDS
		})

		it(`should keep the custom type for an unknown template`, () => {
			const customTemplate = [2, 5]
			const notes = new Notes(`C`, CUSTOM, customTemplate)

			notes.updateTemplate(`chord`)
      
			expect(notes.templateType).toBe(CUSTOM)
		})
	})
})
