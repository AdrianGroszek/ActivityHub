import Wrapper from '../../components/UI/Wrapper';
import BrandsSlider from '../../components/UI/BrandsSlider';

import HeaderSection from './HeaderSection';
import LocalGamesDescription from './LocalGamesDescription';
import ReviewSection from './ReviewSection';
import CreateEventDescriptionSection from './CreateEventDescriptionSection';
import WhyUsSection from './WhyUsSection';

export default function HomePage() {
	return (
		<Wrapper>
			<HeaderSection />
			<BrandsSlider />
			<LocalGamesDescription />
			<ReviewSection />
			<CreateEventDescriptionSection />
			<WhyUsSection />
		</Wrapper>
	);
}
