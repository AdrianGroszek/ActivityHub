import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';

import styles from './Map.module.css';

import basketballIcon from '../../assets/basketball-map-icon.png';
import footballIcon from '../../assets/football-ball-map-icon.png';
import tennisBallIcon from '../../assets/tennisball-map-icon.png';
import voleyballIcon from '../../assets/volleyball-map-icon.png';

import { Link } from 'react-router-dom';
import { useCourts } from '../../context/courts-context';
import { useEffect, useState } from 'react';

type lIconType = {
	iconUrl: string;
	iconSize: [number, number];
	iconAnchor: [number, number];
	popupAnchor: [number, number];
	shadowSize: [number, number];
};

const customIconBasketball: L.Icon<lIconType> = new L.Icon({
	iconUrl: basketballIcon,
	iconSize: [29, 29],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41],
});

const customIconFootball: L.Icon<lIconType> = new L.Icon({
	iconUrl: footballIcon,
	iconSize: [29, 29],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41],
});

const customIconVolleyball: L.Icon<lIconType> = new L.Icon({
	iconUrl: voleyballIcon,
	iconSize: [29, 29],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41],
});

const customIconTennis: L.Icon<lIconType> = new L.Icon({
	iconUrl: tennisBallIcon,
	iconSize: [29, 29],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41],
});

const selectSportIcon = (
	courtCategory: string
): L.Icon<lIconType> | undefined => {
	if (courtCategory === 'Basketball') {
		return customIconBasketball;
	}
	if (courtCategory === 'Football') {
		return customIconFootball;
	}
	if (courtCategory === 'Volleyball') {
		return customIconVolleyball;
	}
	if (courtCategory === 'Tennis') {
		return customIconTennis;
	}
};

export default function Map() {
	const { filteredCourts, selectedCourt } = useCourts();
	const [mapCenter, setMapCenter] = useState<[number, number]>([54.5, 18.6]);
	const [mapZoom, setMapZoom] = useState<number>(9);

	useEffect(() => {
		if (selectedCourt) {
			setMapZoom(12);
			setMapCenter(selectedCourt.coordinates);
		}
	}, [selectedCourt]);

	return (
		<MapContainer
			center={mapCenter}
			zoom={mapZoom}
			key={`${mapCenter[0]}-${mapCenter[1]}`}
			style={{ height: '100%', width: '100%' }}>
			<TileLayer
				url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			/>
			{filteredCourts.map((court) => (
				<Marker
					key={court.id}
					position={court.coordinates}
					icon={selectSportIcon(court.category)}>
					<Popup position={court.coordinates}>
						<div className={styles.customPopupWrapper}>
							<img
								src={court.photos[0]}
								alt={court.name}
								className={styles.popupImg}
							/>
							<div className={styles.textWrapper}>
								<h2>{court.name}</h2>
								<p>{court.location}</p>
								<p>Sport: {court.category}</p>
								<p>Players: {court.capacity}</p>
								<p className={court.isFree ? styles.free : styles.paid}>
									{court.isFree ? 'Free to use' : 'Paid'}
								</p>
								<Link to={court.id} className={styles.courtDetailsLink}>
									Court Details
								</Link>
							</div>
						</div>
					</Popup>
				</Marker>
			))}
		</MapContainer>
	);
}
