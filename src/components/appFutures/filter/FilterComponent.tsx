import styles from './FilterComponent.module.css';

import Button from '../../UI/Button';
import CircleButton from '../../UI/CircleButton';

import { FaBasketballBall } from 'react-icons/fa';
import { FaBaseballBall } from 'react-icons/fa';
import { FaVolleyball } from 'react-icons/fa6';
import { GiSoccerBall } from 'react-icons/gi';
import { BiSolidGridAlt } from 'react-icons/bi';
// import { FaStar } from 'react-icons/fa6';
import { useCourts } from '../../../context/courts-context';
import { useLocation } from 'react-router-dom';
import { whichRouteIsActive } from '../../../helpers';
import { useEvents } from '../../../context/events-context';
import { useEffect } from 'react';

export default function FilterComponent() {
	const { filterCourts, resetSelectedCourt } = useCourts();
	const { filterEvents, events, resetSelectedEvent } = useEvents();
	const location = useLocation();

	//Check if pathname includes 'courts' or 'events'
	const urlPathSlug: string = location.pathname.split('/')[2];

	useEffect(() => {
		resetSelectedEvent();
		resetSelectedCourt();
	}, [urlPathSlug]);

	function handleOnClickFilter(category: string) {
		if (location.pathname.includes('courts')) {
			filterCourts(category);
		}
		if (location.pathname.includes('events')) {
			filterEvents(category);
		}
	}

	return (
		<div>
			<div className={styles.filterContainer}>
				<ul className={styles.circleIconsContainer}>
					<li>
						<CircleButton
							sizeWithPx='35px'
							category='All'
							routePath={location.pathname}
							onClick={() => handleOnClickFilter('All')}>
							<BiSolidGridAlt className={styles.icon} />
						</CircleButton>
					</li>
					<li>
						<CircleButton
							sizeWithPx='35px'
							category='Basketball'
							routePath={location.pathname}
							onClick={() => handleOnClickFilter('Basketball')}>
							<FaBasketballBall className={styles.icon} />
						</CircleButton>
					</li>
					<li>
						<CircleButton
							sizeWithPx='35px'
							category='Tennis'
							routePath={location.pathname}
							onClick={() => handleOnClickFilter('Tennis')}>
							<FaBaseballBall className={styles.icon} />
						</CircleButton>
					</li>
					<li>
						<CircleButton
							sizeWithPx='35px'
							category='Volleyball'
							routePath={location.pathname}
							onClick={() => handleOnClickFilter('Volleyball')}>
							<FaVolleyball className={styles.icon} />
						</CircleButton>
					</li>
					<li>
						<CircleButton
							sizeWithPx='35px'
							category='Football'
							routePath={location.pathname}
							onClick={() => handleOnClickFilter('Football')}>
							<GiSoccerBall className={styles.icon} />
						</CircleButton>
					</li>
				</ul>
				<Button variant='secondary'>Location</Button>
			</div>
			<div className={styles.btnsContainer}>
				<div className={styles.leftBtnsContainer}>
					<Button
						variant='secondary'
						isActive={whichRouteIsActive(location.pathname, 'courts')}
						to='/app/courts'>
						Spots
					</Button>
					<Button
						variant='secondary'
						isActive={whichRouteIsActive(location.pathname, 'events')}
						to='/app/events'>
						Events {events.length} active
					</Button>
				</div>
				<div>
					<Button to='/app/create' variant='secondary'>
						Create Event
					</Button>
				</div>
			</div>
		</div>
	);
}
