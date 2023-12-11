import { CHORD_TEMPLATES, SCALE_TEMPLATES } from ".."

export const findTemplate = (templateType: `chord` | `scale`, template: number[]) => {
	const templates = templateType === `chord` ? CHORD_TEMPLATES : SCALE_TEMPLATES
	const result = Object.entries(templates).find(([_, _template]) => _template.join(`,`) === template.join(`,`))

	return result
}
