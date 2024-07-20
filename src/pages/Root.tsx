import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import CourtsContextProvider from '../context/courts-context';
import EventsContextProvider from '../context/events-context';
import { UserLoginProvider } from '../context/user-login-context';

export default function Root() {
	return (
		<UserLoginProvider>
			<CourtsContextProvider>
				<EventsContextProvider>
					<ScrollToTop />
					<Navbar />
					<Outlet />
					<Footer />
				</EventsContextProvider>
			</CourtsContextProvider>
		</UserLoginProvider>
	);
}
