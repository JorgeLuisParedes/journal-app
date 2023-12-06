import { Navigate, Route, Routes } from 'react-router-dom';
import { JournalPages } from '../pages';

export const JournalRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<JournalPages />} />

			<Route path='/*' element={<Navigate to='/' />} />
		</Routes>
	);
};
