import {
	type Note,
	calculateNotes,
	CUSTOM,
	// findTemplate,
	TemplateType,
	findTemplate,
	getChord,
	getScale,
	CHORD,
} from "../.."

interface NotesConstructor {
	root: Note
	templateType: TemplateType
	template: number[]
}

export class Notes {
	private _root: Note
	private _template: number[]
	private _name: string
	private _notes: Note[]
	private _templateType: TemplateType

	constructor(init: NotesConstructor) {
		const { root, template, templateType } = init

		this._root = root
		this._templateType = templateType
		this._template = template
		this._notes = calculateNotes(root, this._template)
		
		const isPreset = findTemplate(template, templateType)

		this._name = isPreset ? isPreset.shift() : CUSTOM
	}

	get root(): Note {
		return this._root
	}
	set root(root: Note) {
		this.root = root
		this.notes = calculateNotes(root, this.template)

		const isPreset = findTemplate(this.template, this.templateType)

		this.name = isPreset ? isPreset.shift() : CUSTOM
	}

	get templateType(): TemplateType {
		return this._templateType
	}
	private set templateType(templateType: TemplateType) {
		this._templateType = templateType
	}

	get name(): string {
		return this._name
	}
	private set name(name: string) {
		this._name = name
	}

	get template(): number[] {
		return this._template
	}

	get notes(): Note[] {
		return this._notes
	}
	set notes(notes: Note[]) {
		this._notes = notes
	}

	getTemplate() {
		const searchIn = this.templateType === CHORD ? getChord : getScale
		const result = searchIn(this.name)

		return result
	}

	addNote(note: Note) {
		if (this.notes.includes(note)) return

		if (this.name !== `custom`) throw new Error(`Can't modify notes of a ${this.root}${this.templateType}`)

		this.notes.push(note)
	}

	removeNote(note: Note) {
		if (this.name !== `custom`) throw new Error(`Can't modify notes of a ${this.root}${this.templateType}`)

		this.notes.filter(item => item !== note)
	}
	
	modulate(note: Note) {
		if (this.root === note) return

		this.root = note
	}
}
