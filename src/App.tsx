import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import HelpPage from './pages/HelpPage';
import AppPage from './pages/AppPage';
import CourtDescription from './components/appFutures/courts/CourtDescription';
import CreateEvent from './pages/CreateEvent';
import EventDescription from './components/appFutures/events/EventDescription';

const Router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'news',
				element: <NewsPage />,
			},
			{
				path: 'help',
				element: <HelpPage />,
			},
			{
				path: 'app/courts',
				element: <AppPage />,
				children: [
					{
						path: ':courtId',
						element: <CourtDescription />,
					},
				],
			},
			{
				path: 'app/events',
				element: <AppPage />,
				children: [
					{
						path: ':eventId',
						element: <EventDescription />,
					},
				],
			},
			{
				path: 'app/create',
				element: <CreateEvent />,
			},
		],
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={Router} />
		</>
	);
}

export default App;
