import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout';
import { NoteView, NothingSelectedView } from '../views';
import { AddOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { startNewNote } from '../../store/journal';

export const JournalPages = () => {
	const dispatch = useDispatch();
	const onClickNewNote = () => {
		dispatch(startNewNote());
	};

	return (
		<JournalLayout>
			{/* <Typography>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
				repudiandae inventore doloribus pariatur eius nemo necessitatibus ea
				sint sed quo quisquam, nihil, ipsa amet. Sequi eos pariatur veniam. At,
				necessitatibus.
			</Typography> */}
			<NothingSelectedView />
			<IconButton
				onClick={onClickNewNote}
				size='large'
				sx={{
					color: 'white',
					backgroundColor: 'error.main',
					':hover': { backgroundColor: 'error.main', opacity: 0.9 },
					position: 'fixed',
					right: 50,
					bottom: 50,
				}}
			>
				<AddOutlined sx={{ fontSize: 30 }} />
			</IconButton>
			{/* <NoteView /> */}
		</JournalLayout>
	);
};
