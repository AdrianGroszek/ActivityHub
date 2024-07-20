// TEMPORARY STYLES %@#%
import styles from '../courts/CourtItem.module.css';

import { Link, useParams } from 'react-router-dom';
import { useEvents } from '../../../context/events-context';
import { type EventType } from '../../../data/events';
import { FaLocationDot, FaUsers } from 'react-icons/fa6';
import { useCourts } from '../../../context/courts-context';
import { formatEventTime } from '../../../helpers';

type EventItemProp = {
	event: EventType;
};

export default function EventItem({ event }: EventItemProp) {
	const { selectEvent } = useEvents();
	const { courts } = useCourts();
	const { eventId } = useParams<{ eventId: string }>();

	const selectedStyle: string =
		eventId === event.id ? styles.activeCourtItem : '';

	//Find court which match with current event courtId
	const eventCourt = courts.find((court) => court.id === event.courtId);

	function handleClick() {
		selectEvent(event);
	}

	return (
		<li>
			<Link
				to={event.id}
				className={`${styles.courtItem} ${selectedStyle}`}
				onClick={handleClick}>
				<img
					src={eventCourt?.photos[0]}
					alt={eventCourt?.name}
					className={styles.courtImg}
				/>
				<div className={styles.descriptionContainer}>
					<div className={styles.topContainer}>
						<p>{event.title}</p>
						<p>{formatEventTime(event.eventTime)}</p>
					</div>
					<div className={styles.bottomContainer}>
						<ul className={styles.courtDetailsList}>
							<li>
								<p>
									<FaUsers className={styles.detailsIcon} />
								</p>
								<span>Prayers {event.participants.length}</span>
							</li>
							<li>
								<p>
									<FaLocationDot className={styles.detailsIcon} />
								</p>
								<span>{event.location}</span>
							</li>
						</ul>
						<div>
							<span>{event.isFree ? 'FREE' : 'PAID'}</span>
						</div>
					</div>
				</div>
			</Link>
		</li>
	);
}
