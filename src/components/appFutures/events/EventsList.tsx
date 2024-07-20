import styles from './EventsList.module.css';

import { useEvents } from '../../../context/events-context';
import EventItem from './EventItem';

export default function EventsList() {
	const { filteredEvents } = useEvents();
	return (
		<ul className={styles.eventsList}>
			{filteredEvents.map((event) => (
				<EventItem key={event.id} event={event} />
			))}
		</ul>
	);
}
