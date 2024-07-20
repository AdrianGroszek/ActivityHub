import { FaLocationDot, FaUsers } from 'react-icons/fa6';
import styles from './CourtDescription.module.css';
import { useParams } from 'react-router-dom';
import { useCourts } from '../../../context/courts-context';
import { type CourtType } from '../../../data/courts';

export default function CourtDescription() {
	const { courtId } = useParams();
	const { courts } = useCourts();

	const selectedCourt: CourtType | undefined = courts.find(
		(court) => court.id === courtId
	);

	return (
		<section className={styles.sectionContainer}>
			<div className={styles.topContentContainer}>
				<div className={styles.imgContainer}>
					<img src={selectedCourt?.photos[0]} alt={selectedCourt?.name} />
				</div>
				<div className={styles.topContentDescription}>
					<div className={styles.courtNameContainer}>
						<h3>{selectedCourt?.name}</h3>
					</div>
					<div>
						<ul className={styles.courtDetailsList}>
							<li>
								<p>
									<FaUsers className={styles.detailsIcon} />
								</p>
								<span>Prayers {selectedCourt?.capacity}</span>
							</li>
							<li>
								<p>
									<FaLocationDot className={styles.detailsIcon} />
								</p>
								<span>{selectedCourt?.location}</span>
							</li>
						</ul>
					</div>
					<div className={styles.bonusInfoContainer}>
						<span>{selectedCourt?.isFree ? 'FREE' : 'PAID'}</span>
						<span>{selectedCourt?.category}</span>
					</div>
					<p className={styles.courtDescription}>
						{selectedCourt?.courtDescription}
					</p>
				</div>
			</div>
			<div className={styles.bottomContentContainer}></div>
		</section>
	);
}
