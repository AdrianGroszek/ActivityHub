import { useCourts } from '../../../context/courts-context';
import CourtItem from './CourtItem';
import styles from './CourtsList.module.css';

export default function CourtsList() {
	const { filteredCourts } = useCourts();
	return (
		<ul className={styles.courtsList}>
			{filteredCourts.map((court) => (
				<CourtItem key={court.id} court={court} />
			))}
		</ul>
	);
}
