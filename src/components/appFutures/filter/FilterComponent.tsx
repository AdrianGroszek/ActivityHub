import styles from './FilterComponent.module.css';

import Button from '../../UI/Button';
import CircleButton from '../../UI/CircleButton';

import { FaBasketballBall } from 'react-icons/fa';
import { FaBaseballBall } from 'react-icons/fa';
import { FaVolleyball } from 'react-icons/fa6';
import { GiSoccerBall } from 'react-icons/gi';
import { FaStar } from 'react-icons/fa6';
import { useCourts } from '../../../context/courts-context';

export default function FilterComponent() {
	const { filterCourts } = useCourts();

	return (
		<div>
			<div className={styles.filterContainer}>
				<div className={styles.circleIconsContainer}>
					<CircleButton
						sizeWithPx='35px'
						onClick={() => filterCourts('Basketball')}>
						<FaBasketballBall className={styles.icon} />
					</CircleButton>
					<CircleButton sizeWithPx='35px'>
						<FaBaseballBall
							className={styles.icon}
							onClick={() => filterCourts('Tennis')}
						/>
					</CircleButton>
					<CircleButton sizeWithPx='35px'>
						<FaVolleyball
							className={styles.icon}
							onClick={() => filterCourts('Volleyball')}
						/>
					</CircleButton>
					<CircleButton sizeWithPx='35px'>
						<GiSoccerBall
							className={styles.icon}
							onClick={() => filterCourts('Football')}
						/>
					</CircleButton>
					<CircleButton sizeWithPx='35px'>
						<FaStar
							className={styles.icon}
							onClick={() => filterCourts('All')}
						/>
					</CircleButton>
				</div>
				<Button variant='secondary'>Location</Button>
			</div>
			<div className={styles.btnsContainer}>
				<div className={styles.leftBtnsContainer}>
					<Button variant='primary'>Spots</Button>
					<Button variant='secondary'>Events %XX% active</Button>
				</div>
				<div>
					<Button variant='secondary'>Create Event</Button>
				</div>
			</div>
		</div>
	);
}
