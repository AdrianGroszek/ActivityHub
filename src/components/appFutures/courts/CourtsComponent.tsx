import { useCourts } from '../../../context/courts-context';
import styles from './CourtsComponent.module.css';

import CourtsList from './CourtsList';

export default function CourtsComponent() {
	const { filteredCourts, filterCategory } = useCourts();

	const sumOfCourts: number = filteredCourts.length;
	return (
		<section className={styles.courtsContainer}>
			<p>
				{filterCategory} Courts, {sumOfCourts}
			</p>
			<div className={styles.courtsListWrapper}>
				<CourtsList />
			</div>
		</section>
	);
}
