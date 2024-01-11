export const initialState = {
	isSaving: false,
	messageSaved: '',
	notes: [],
	active: null,
};

export const withNoteState = {
	isSaving: false,
	messageSaved: '',
	notes: [
		{
			id: 'NOTE123',
			date: 1704909327123,
			title: 'Nota de prueba',
			body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
		},
		{
			id: 'NOTE124',
			date: 1704909327124,
			title: 'Nota de prueba 2',
			body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
		},
	],
	active: {
		id: 'NOTE123',
		date: 1704909327123,
		title: 'Nota de prueba',
		body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
	},
};

export const noteState = {
	id: 'NOTE123',
	date: 1704909327123,
	title: 'Nota de prueba',
	body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
};

export const emptyNoteState = {
	id: 'NOTE123',
	date: 1704909327123,
	title: '',
	body: '',
};
