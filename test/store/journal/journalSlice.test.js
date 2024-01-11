import {
	addNewEmptyNote,
	clearNotesLogout,
	deleteNoteById,
	journalSlice,
	savingNewNote,
	setActiveNote,
	setNotes,
	setPhotosToActiveNote,
	setSaving,
	updateNote,
} from '../../../src/store/journal/journalSlice';
import {
	emptyNoteState,
	initialState,
	noteState,
	withNoteState,
} from '../../fixtures/journalFixture';

describe('Pruebas en el journalSlice', () => {
	test('Debe de llamar el estado inicial y llamarse journal', () => {
		const state = journalSlice.reducer(initialState, {});

		expect(journalSlice.name).toBe('journal');
		expect(state).toEqual(initialState);
	});

	test('Debe de poder cargar las notas', () => {
		const state = journalSlice.reducer(initialState, setNotes([noteState]));
		expect(state).toEqual({
			isSaving: false,
			messageSaved: '',
			notes: [
				{
					id: noteState.id,
					date: noteState.date,
					title: noteState.title,
					body: noteState.body,
				},
			],
			active: null,
		});
	});

	test('Debe de guardar una nueva nota', () => {
		const isSaving = true;
		const state = journalSlice.reducer(initialState, savingNewNote(isSaving));
		expect(state).toEqual({
			isSaving: true,
			messageSaved: '',
			notes: [],
			active: null,
		});
	});

	test('Debe de agregar una nueva nota vacia', () => {
		const state = journalSlice.reducer(
			initialState,
			addNewEmptyNote(emptyNoteState),
		);
		expect(state).toEqual({
			isSaving: false,
			messageSaved: '',
			notes: [
				{
					id: emptyNoteState.id,
					date: emptyNoteState.date,
					title: emptyNoteState.title,
					body: emptyNoteState.body,
				},
			],
			active: null,
		});
	});

	test('Debe de seleccionar una nota activa', () => {
		const state = journalSlice.reducer(
			initialState,
			setActiveNote(emptyNoteState),
		);
		expect(state).toEqual({
			isSaving: false,
			messageSaved: '',
			notes: [],
			active: {
				id: emptyNoteState.id,
				date: emptyNoteState.date,
				title: emptyNoteState.title,
				body: emptyNoteState.body,
			},
		});
	});

	test('Debe de activar una nueva nota', () => {
		const state = journalSlice.reducer(initialState, setSaving());
		expect(state).toEqual({
			isSaving: true,
			messageSaved: '',
			notes: [],
			active: null,
		});
	});

	test('Debe de actualizar una nota', () => {
		const state = journalSlice.reducer(initialState, updateNote(noteState));
		const messageSaved = `${noteState.title}, actualizada correctamente`;
		expect(state).toEqual({
			isSaving: false,
			messageSaved,
			notes: [],
			active: null,
		});
	});

	// ! Este test no funciona
	test('Debe agregar imagenes a la nota', () => {
		const imageUrl = 'http://demo.jpg';
		const state = journalSlice.reducer(
			initialState,
			setPhotosToActiveNote(imageUrl),
		);
	});

	test('Debe de limpiar las notas', () => {
		const state = journalSlice.reducer(initialState, clearNotesLogout());
		expect(state).toEqual(initialState);
	});

	// ! Este test funciona pero pienso que no está correcto
	test('debe de eliminar una nota', () => {
		const noteId = 'NOTE123';
		const state = journalSlice.reducer(withNoteState, deleteNoteById(noteId));
		expect(state.active).toBe(null);

		const searchDeleteNote = state.notes.find(notes => notes.id === noteId);
		expect(searchDeleteNote).toBeUndefined();
	});
});
