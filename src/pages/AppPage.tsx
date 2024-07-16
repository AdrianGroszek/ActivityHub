import styles from './AppPage.module.css';

import Wrapper from '../components/UI/Wrapper';
import FilterComponent from '../components/appFutures/filter/FilterComponent';

import Map from '../components/UI/Map';

import CourtsComponent from '../components/appFutures/courts/CourtsComponent';
import { Outlet } from 'react-router-dom';

export default function AppPage() {
	return (
		<Wrapper>
			<div className={styles.sectionsWrapper}>
				<section className={styles.appFilterSectionLeft}>
					<FilterComponent />
					<CourtsComponent />
				</section>
				<section className={styles.appDetailsSectionRight}>
					<div className={styles.mapWrapper}>
						<Map />
						<Outlet />
						{/* <CourtDescription /> */}
					</div>
				</section>
			</div>
		</Wrapper>
	);
}
