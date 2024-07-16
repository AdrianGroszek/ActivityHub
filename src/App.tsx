import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import HelpPage from './pages/HelpPage';
import AppPage from './pages/AppPage';
import CourtDescription from './components/appFutures/courts/CourtDescription';

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
