import styles from './CourtItem.module.css';

import { FaStar } from 'react-icons/fa6';
import { FaUsers } from 'react-icons/fa6';
import { FaLocationDot } from 'react-icons/fa6';
import { type CourtType } from '../../../data/courts';
import { Link, useParams } from 'react-router-dom';
import { useCourts } from '../../../context/courts-context';

type CourtItemProps = {
	court: CourtType;
};

export default function CourtItem({ court }: CourtItemProps) {
	const { selectCourt } = useCourts();
	const { courtId } = useParams<{ courtId: string }>();

	const selectedStyle: string =
		courtId === court.id ? styles.activeCourtItem : '';

	function handleClick() {
		selectCourt(court);
	}

	return (
		<li>
			<Link
				to={`${court.id}`}
				className={`${styles.courtItem} ${selectedStyle}`}
				onClick={handleClick}>
				<img src={court.photos[0]} alt='' className={styles.courtImg} />
				<div className={styles.descriptionContainer}>
					<div className={styles.topContainer}>
						<p>{court.name}</p>
						<p>
							<FaStar className={styles.starIcon} />
						</p>
					</div>
					<div className={styles.bottomContainer}>
						<ul className={styles.courtDetailsList}>
							<li>
								<p>
									<FaUsers className={styles.detailsIcon} />
								</p>
								<span>Prayers {`${court.capacity}`}</span>
							</li>
							<li>
								<p>
									<FaLocationDot className={styles.detailsIcon} />
								</p>
								<span>{court.location}</span>
							</li>
						</ul>
						<div>
							<span>{court.isFree ? 'FREE' : 'PAID'}</span>
						</div>
					</div>
				</div>
			</Link>
		</li>
	);
}
