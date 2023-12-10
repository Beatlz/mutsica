import {
	type ChordType,
	type ScaleType,
	type Note,
	SCALES,
	calculateNotes,
	CUSTOM,
	CHORDS,
	CustomTemplate,
	findTemplate,
} from "../.."

type TemplateType = ScaleType | ChordType | CustomTemplate

export class Notes {
	private _root: Note
	private _template: number[]
	private _notes: Note[]
	private _templateType: TemplateType = CUSTOM

	constructor(root: Note, templateType: TemplateType, template: number[] = []) {
		this._root = root
		this._templateType = templateType
		this._template = templateType === CUSTOM
			? template
			: SCALES[templateType as ScaleType] || CHORDS[templateType as ChordType]
		this._notes = calculateNotes(root, this._template)

		if (templateType === CUSTOM && !template.length) console.warn(`No template provided.`)
	}

	get root(): Note {
		return this._root
	}

	get templateType(): TemplateType {
		return this._templateType
	}
	private set templateType(templateType: TemplateType) {
		this._templateType = this.templateType
	}

	get template(): number[] {
		return this.template
	}

	get notes(): Note[] {
		return this._notes
	}
	set notes(notes: Note[]) {
		this._notes = notes
	}

	addNote(note: Note) {
		if (this.notes.includes(note)) return

		if (this.templateType !== `custom`) throw new Error(`Can't modify notes of a ${this.root}${this.templateType}`)

		this.notes.push(note)
	}

	removeNote(note: Note) {
		if (this.templateType !== `custom`) throw new Error(`Can't modify notes of a ${this.root}${this.templateType}`)

		this.notes.filter(item => item !== note)
	}

	updateTemplate(templateType: `chord` | `scale`) {
		const result = findTemplate(templateType, this.template)

		if (result) this.templateType = result.shift() as TemplateType
	}
}
