import { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Google } from '@mui/icons-material';
import {
	Alert,
	Button,
	Grid,
	Link,
	TextField,
	Typography,
} from '@mui/material';
import { AuthLayout } from '../layout';
import { useForm } from '../../hooks';
import {
	startGoogleSignIn,
	startLoginWithEmailPassword,
} from '../../store/auth';

const formData = {
	email: '',
	password: '',
};

export const LoginPage = () => {
	const dispatch = useDispatch();
	const { status, errorMessage } = useSelector(state => state.auth);
	const isAutheticating = useMemo(() => status === 'checking', [status]);

	const { email, password, onInputChange, formState } = useForm(formData);

	const onSubmit = event => {
		event.preventDefault();
		// console.log({ email, password });
		dispatch(startLoginWithEmailPassword(formState));
	};

	const onGoogleSignIn = () => {
		// console.log('onGoogleSignIn');
		dispatch(startGoogleSignIn());
	};
	return (
		<AuthLayout title='Login'>
			<form
				aria-label='submit-form'
				onSubmit={onSubmit}
				className='animate__animated animate__fadeIn animate__faster'
			>
				<Grid container>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label='Correo'
							type='email'
							placeholder='correo@google.com'
							fullWidth
							name='email'
							value={email}
							onChange={onInputChange}
						/>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label='Contraseña'
							type='password'
							placeholder='Contraseña'
							fullWidth
							name='password'
							inputProps={{
								'data-testid': 'password',
							}}
							value={password}
							onChange={onInputChange}
						/>
					</Grid>

					<Grid container display={!!errorMessage ? '' : 'none'} sx={{ mt: 2 }}>
						<Grid item xs={12}>
							<Alert severity='error'>{errorMessage}</Alert>
						</Grid>
					</Grid>

					<Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
						<Grid item xs={12} sm={6}>
							<Button
								type='submit'
								variant='contained'
								fullWidth
								disabled={isAutheticating}
							>
								Login
							</Button>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Button
								variant='contained'
								fullWidth
								aria-label='google-btn'
								onClick={onGoogleSignIn}
								disabled={isAutheticating}
							>
								<Google />
								<Typography sx={{ ml: 1 }}>Google</Typography>
							</Button>
						</Grid>
					</Grid>

					<Grid container direction='row' justifyContent='end'>
						<Link component={RouterLink} color={'inherit'} to='/auth/register'>
							Crear una cuenta
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};
