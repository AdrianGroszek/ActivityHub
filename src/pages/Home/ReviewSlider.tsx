import { useState } from 'react';
import ReviewItem from './ReviewItem';
import styles from './ReviewSlider.module.css';

import { FaAngleLeft } from 'react-icons/fa6';
import { FaAngleRight } from 'react-icons/fa6';

export type ReviewItem = {
	starsNum: number;
	username: string;
	userSport: string;
	description: string;
	image: string;
};

const reviewData: ReviewItem[] = [
	{
		starsNum: 5,
		username: 'Josh Morland',
		userSport: 'football',
		description:
			'ActivityHub has completely transformed how I stay active and social. Creating events is a breeze, and the interactive map feature makes finding the best spots so easy. I ve met so many great people through this app. Highly recommend it!',
		image:
			'https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?cs=srgb&dl=pexels-bertellifotografia-3792581.jpg&fm=jpg',
	},
	{
		starsNum: 5,
		username: 'Emily Johnson',
		userSport: 'basketball',
		description:
			'FitConnect has revolutionized my fitness journey. The workout plans are tailored to my needs, and the community support keeps me motivated. I love tracking my progress and sharing milestones with friends. This app is a game-changer for anyone serious about their health!',
		image:
			'https://wallpapers.com/images/hd/cool-profile-picture-paper-bag-head-4co57dtwk64fb7lv.jpg',
	},
	{
		starsNum: 4,
		username: 'Michael Smith',
		userSport: 'tenis',
		description:
			'FoodieFinder is a must-have for any culinary enthusiast. The recipe recommendations are spot-on, and the ability to create and share custom meal plans is fantastic. I ve discovered so many new dishes and met fellow food lovers. Highly recommend for foodies!',
		image:
			'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
	},
	{
		starsNum: 5,
		username: 'Sarah Williams',
		userSport: 'football',
		description:
			'BookWorm has rekindled my love for reading. The personalized book suggestions are always on point, and the virtual book clubs are a great way to discuss and share thoughts with fellow readers. I ve discovered so many new authors and genres. Highly recommend for book lovers!',
		image:
			'https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg',
	},
	{
		starsNum: 4,
		username: 'David Brown',
		userSport: 'volleyball',
		description:
			'ActivityHub has completely transformed how I stay active and social. Creating events is a breeze, and the interactive map feature makes finding the best spots so easy. I ve met so many great people through this app. Highly recommend it!',
		image:
			'https://pics.craiyon.com/2023-06-30/2d13202dfa034025b4ba8eff9760d55c.webp',
	},
];

export default function ReviewSlider() {
	const [listItemPosition, setListItemPositon] = useState<number>(0);

	function handleNext() {
		if (listItemPosition === 3200) {
			setListItemPositon(0);
		} else {
			setListItemPositon((curItem) => curItem + 800);
		}
	}

	function handlePrev() {
		if (listItemPosition === 0) {
			setListItemPositon(3200);
		} else {
			setListItemPositon((curItem) => curItem - 800);
		}
	}

	return (
		<div className={styles.slider}>
			<ul className={styles.slide}>
				{reviewData.map((item, index) => (
					<li
						className={styles.slideItem}
						style={{ right: `${listItemPosition}px` }}>
						<ReviewItem item={item} key={index} />
					</li>
				))}
			</ul>
			<div className={styles.btnContainer}>
				<button className={styles.btn} onClick={handlePrev}>
					<FaAngleLeft />
				</button>
				<button className={styles.btn} onClick={handleNext}>
					<FaAngleRight />
				</button>
			</div>
		</div>
	);
}
