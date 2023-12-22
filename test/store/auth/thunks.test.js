import { signInWithGoogle } from '../../../src/firebase/providers';
import {
	checkingCredentials,
	login,
	logout,
	startGoogleSignIn,
} from '../../../src/store/auth';
import { checkingAuthentication } from '../../../src/store/auth/thunks';
import { demoUser } from '../../fixtures/authFixture';

jest.mock('../../../src/firebase/providers');

describe('Pruebas en AuthThunks', () => {
	const dispatch = jest.fn();
	beforeEach(() => jest.clearAllMocks());

	test('Debe de invocar el checkingAuthentication', async () => {
		await checkingAuthentication()(dispatch);
		expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
	});

	test('startGoogleSignIn debe de llamar el checkingCredentials y login - Exito', async () => {
		const loginData = { ok: true, ...demoUser };

		await signInWithGoogle.mockResolvedValue(loginData);
		await startGoogleSignIn()(dispatch);
		expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
		expect(dispatch).toHaveBeenCalledWith(login(loginData));
	});

	test('startGoogleSignIn debe de llamar el checkingCredentials y login - Error', async () => {
		const loginData = { ok: false, errorMessage: 'Un error en Google' };

		await signInWithGoogle.mockResolvedValue(loginData);
		await startGoogleSignIn()(dispatch);
		expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
		expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
	});
});
