import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';

cloudinary.config({
	cloud_name: 'dxl2vuiee',
	api_key: '487253474356563',
	api_secret: '17MQofRPxtfRmDoH7s4teNpZqFg',
	secure: true,
});

describe('Pruebas en fileUpload', () => {
	test('Debe de subir el archivo correctamente en cloudinary', async () => {
		const imageUrl =
			'https://st2.depositphotos.com/7520448/10747/i/450/depositphotos_107479104-stock-photo-a-scenic-view-of-the.jpg';
		const resp = await fetch(imageUrl);
		const blob = await resp.blob();
		const file = new File([blob], 'foto.jpg');

		const url = await fileUpload(file);
		expect(typeof url).toBe('string');

		const segments = url.split('/');
		const imageId = segments[segments.length - 1].replace('.webp', '');

		const cloudResp = await cloudinary.api.delete_resources(
			[`journal/${imageId}`],
			{
				resource_type: 'image',
			},
		);
	});

	test('debe de retornar null', async () => {
		const file = new File([], 'foto.jpg');

		const url = await fileUpload(file);
		expect(url).toBe(null);
	});
});
