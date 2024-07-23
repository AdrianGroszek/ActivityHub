import styles from './AppPage.module.css';

import Wrapper from '../components/UI/Wrapper';
import FilterComponent from '../components/appFutures/filter/FilterComponent';

import Map from '../components/UI/Map';

import CourtsComponent from '../components/appFutures/courts/CourtsComponent';
import { Outlet } from 'react-router-dom';
import { useCourts } from '../context/courts-context';
import { useEvents } from '../context/events-context';
import { useEffect, useState } from 'react';

export default function AppPage() {
	const { selectedCourt } = useCourts();
	const { selectedEvent } = useEvents();
	const [isSelected, setIsSelected] = useState(false);

	useEffect(() => {
		if (selectedCourt || selectedEvent) {
			setIsSelected(true);
		} else {
			setIsSelected(false);
		}
	}, [isSelected, selectedCourt, selectedEvent]);

	return (
		<Wrapper>
			<div className={styles.sectionsWrapper}>
				<section className={styles.appFilterSectionLeft}>
					<FilterComponent />
					<CourtsComponent />
				</section>
				<section className={styles.appDetailsSectionRight}>
					<div className={styles.mapWrapperHalf}>
						<Map />
						<Outlet />
					</div>
					{/* <div
						className={
							isSelected ? styles.mapWrapperHalf : styles.mapWrapperFull
						}>
						<Map />
						<Outlet />
					</div> */}
				</section>
			</div>
		</Wrapper>
	);
}
