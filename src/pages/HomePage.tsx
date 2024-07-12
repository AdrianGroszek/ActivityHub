import styles from './HomePage.module.css';

import Button from '../components/UI/Button';
import Wrapper from '../components/UI/Wrapper';
import BrandsSlider from '../components/UI/BrandsSlider';
import ImageSliderHeader from '../components/ImageSliderHeader';

import { FaAnglesDown } from 'react-icons/fa6';

import imgCardOne from '../assets/3-cards-component-1.jpg';
import imgCardTwo from '../assets/3-cards-component-2.jpg';
import imgCardThree from '../assets/3-cards-component-3.jpg';

export default function HomePage() {
	return (
		<Wrapper>
			<section className={styles.headerSection}>
				<div className={styles.smallerContainer}>
					<ImageSliderHeader />
				</div>
				<div className={styles.biggerContainer}>
					<h2>
						<span>ActivityHub</span> The Ultimate Sports Community!
					</h2>
					<p>
						Are you a sports enthusiast looking for a community to share your
						passion with? PlayConnect is the perfect platform for you! Our web
						application brings together sports lovers from all walks of life,
						allowing you to create and join sports events effortlessly.
					</p>
					<div>
						<Button variant='primary'>Get Started</Button>
					</div>
				</div>
				<div className={styles.mouseContainer}>
					<FaAnglesDown className={styles.mouseIcon} />
				</div>
			</section>
			<BrandsSlider />
			<section className={styles.descriptionSection}>
				<div className={styles.biggerContainer}>
					<h3>Discover Local Games</h3>
					<p>
						Whether you’re into basketball, soccer, tennis, or any other sport,
						PlayConnect helps you find local games and events happening near
						you. Our easy-to-use interface lets you browse through a variety of
						sports activities and join the ones that suit your schedule and
						interests.
					</p>
				</div>
				<div className={styles.smallerContainer}>
					<div className={styles.threeImgContainer}>
						<img className={styles.imageOne} src={imgCardOne} alt='' />
						<img className={styles.imageTwo} src={imgCardTwo} alt='' />
						<img className={styles.imageThree} src={imgCardThree} alt='' />
					</div>
				</div>
			</section>
			<section className={styles.reviewsSection}>
				<h3>
					Over <span>500k+</span> people trust us
				</h3>
			</section>
		</Wrapper>
	);
}
