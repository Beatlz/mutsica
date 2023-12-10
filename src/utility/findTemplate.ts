import { CHORDS, SCALES } from ".."

export const findTemplate = (templateType: `chord` | `scale`, template: number[]) => {
	const templates = templateType === `chord` ? CHORDS : SCALES
	const result = Object.entries(templates).find(([_, _template]) => _template.join(`,`) === template.join(`,`))

	return result
}
