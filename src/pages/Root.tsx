import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import CourtsContextProvider from '../context/courts-context';

export default function Root() {
	return (
		<CourtsContextProvider>
			<ScrollToTop />
			<Navbar />
			<Outlet />
			<Footer />
		</CourtsContextProvider>
	);
}
