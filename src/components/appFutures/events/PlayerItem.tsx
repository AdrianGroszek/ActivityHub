import { EventType } from '../../../data/events';
import { UserType } from '../../../data/user';
import styles from './PlayerItem.module.css';

type PlayerItemProps = {
	singlePlayer: UserType;
	selectedEvent: EventType;
};

export default function PlayerItem({
	singlePlayer,
	selectedEvent,
}: PlayerItemProps) {
	return (
		<li className={styles.playerItem}>
			<img
				src={singlePlayer.photo}
				alt='User profile photo'
				className={styles.photo}
			/>
			<div className={styles.rightContentContainer}>
				<div className={styles.namePlayerTextContainer}>
					<p>{singlePlayer.firstName}</p>
					{selectedEvent?.createdBy === singlePlayer.id && (
						<span className={styles.creatorText}>Creator</span>
					)}
				</div>
				<p className={styles.ageText}>Age: {singlePlayer.age}</p>
			</div>
		</li>
	);
}
