// TEMPORARY STYLES from courtItem
import styles from '../courts/CourtItem.module.css';

import { Link, useLocation, useParams } from 'react-router-dom';
import { useEvents } from '../../../context/events-context';
import { type EventType } from '../../../data/events';
import { FaLocationDot, FaUsers } from 'react-icons/fa6';
import { useCourts } from '../../../context/courts-context';
import { formatEventTime } from '../../../helpers';
import TagSpan from '../../UI/TagSpan';

type EventItemProp = {
	event: EventType;
};

export default function EventItem({ event }: EventItemProp) {
	const { selectEvent } = useEvents();
	const { courts } = useCourts();
	const { eventId } = useParams<{ eventId: string }>();
	const location = useLocation();

	const selectedStyle: string =
		eventId === event.id ? styles.activeCourtItem : '';

	//Find court which match with current event courtId
	const eventCourt = courts.find((court) => court.id === event.courtId);

	function handleClick() {
		selectEvent(event);
	}

	const chooseRoute: string = location.pathname.includes('courts')
		? `/app/events/${event.id}`
		: event.id;

	return (
		<li>
			<Link
				to={chooseRoute}
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
						<p className={styles.timeText}>
							{formatEventTime(event.eventTime)}
						</p>
					</div>
					<div className={styles.bottomContainer}>
						<ul className={styles.courtDetailsList}>
							<li>
								<p>
									<FaUsers className={styles.detailsIcon} />
								</p>
								<span>
									Prayers {event.participants.length}/{event.playerCount}
								</span>
							</li>
							<li>
								<p>
									<FaLocationDot className={styles.detailsIcon} />
								</p>
								<span>{event.location}</span>
							</li>
						</ul>
						<div>
							{event.isFree ? (
								<TagSpan textColor='#cdf7f3' bgColor='rgba(205, 247, 243, 0.1)'>
									FREE
								</TagSpan>
							) : (
								<TagSpan textColor='#ffd972' bgColor='rgba(255, 217, 114, 0.1)'>
									PAID
								</TagSpan>
							)}
						</div>
					</div>
				</div>
			</Link>
		</li>
	);
}
