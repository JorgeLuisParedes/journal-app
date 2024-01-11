import {
	loginWithEmailPassword,
	logoutFirebase,
	registerUserWithEmailPassword,
	signInWithGoogle,
} from '../../../src/firebase/providers';
import {
	checkingCredentials,
	login,
	logout,
	startGoogleSignIn,
} from '../../../src/store/auth';
import {
	checkingAuthentication,
	startCreatingUserWithEmailPassword,
	startLoginWithEmailPassword,
	startLogout,
} from '../../../src/store/auth/thunks';
import { clearNotesLogout } from '../../../src/store/journal';
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

	test('startLoginWithEmailPassword debe de llamar el checkingCredentials y login - Exito', async () => {
		const loginData = { ok: true, ...demoUser };
		const formData = { email: demoUser.email, password: '123456' };

		await loginWithEmailPassword.mockResolvedValue(loginData);
		await startLoginWithEmailPassword(formData)(dispatch);

		expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
		expect(dispatch).toHaveBeenCalledWith(login(loginData));
	});

	test('startLoginWithEmailPassword debe de llamar el checkingCredentials y login - Error', async () => {
		const loginData = { ok: false, errorMessage: 'Un error en el login' };
		const formData = { email: 'paredes@google.com', password: '123456' };

		await loginWithEmailPassword.mockResolvedValue(loginData);
		await startLoginWithEmailPassword(formData)(dispatch);

		expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
		expect(dispatch).toHaveBeenCalledWith(logout(loginData));
	});

	test('startCreatingUserWithEmailPassword debe de llamar el checkingCredentials y login - Exito', async () => {
		const loginData = { ok: true, ...demoUser };
		const formData = {
			displayName: demoUser.displayName,
			email: demoUser.email,
			password: '123456',
		};

		await registerUserWithEmailPassword.mockResolvedValue(loginData);
		await startCreatingUserWithEmailPassword(formData)(dispatch);

		expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
		expect(dispatch).toHaveBeenCalledWith(login(loginData));
	});

	test('startCreatingUserWithEmailPassword debe de llamar el checkingCredentials y login - Error', async () => {
		const loginData = { ok: false, errorMessage: 'Un error en el registro' };
		const formData = {
			displayName: demoUser.displayName,
			email: demoUser.email,
			password: '123456',
		};

		await registerUserWithEmailPassword.mockResolvedValue(loginData);
		await startCreatingUserWithEmailPassword(formData)(dispatch);

		expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
		expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
	});

	test('startLogout debe de llamar logoutFirebase, clearNotesLogout, logout', async () => {
		await startLogout()(dispatch);

		expect(logoutFirebase).toHaveBeenCalled();
		expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
		expect(dispatch).toHaveBeenCalledWith(logout());
	});
});
