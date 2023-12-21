import { fileUpload } from '../../src/helpers/fileUpload';

describe('Pruebas en fileUpload', () => {
	test('Debe de subir el archivo correctamente en cloudinary', async () => {
		const imageUrl =
			'https://st2.depositphotos.com/7520448/10747/i/450/depositphotos_107479104-stock-photo-a-scenic-view-of-the.jpg';
		const resp = await fetch(imageUrl);
		const blob = await resp.blob();
		const file = new File([blob], 'foto.jpg');

		const url = await fileUpload(file);
		expect(typeof url).toBe('string');
	});
});
