import { JournalLayout } from '../layout';
import { NoteView, NothingSelectedView } from '../views';

export const JournalPages = () => {
	return (
		<JournalLayout>
			{/* <Typography>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
				repudiandae inventore doloribus pariatur eius nemo necessitatibus ea
				sint sed quo quisquam, nihil, ipsa amet. Sequi eos pariatur veniam. At,
				necessitatibus.
			</Typography> */}
			{/* <NothingSelectedView /> */}
			<NoteView />
		</JournalLayout>
	);
};
