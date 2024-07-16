export type EventType = {
	id: string;
	createdBy: string;
	participants: string[];
	title: string;
	description: string;
	minAge: number;
	maxAge: number;
	location: string;
	courtId: string;
	playerCount: number;
	isFree: boolean;
	eventTime: string;
	eventType: 'friendly' | 'tournament' | 'training';
	level?: 'beginner' | 'intermediate' | 'advanced';
};

export const events: EventType[] = [
	{
		id: '1',
		createdBy: '2',
		participants: ['2'],
		title: 'Mecz Piłki Nożnej',
		description: 'Zagrajmy mecz piłki nożnej na boisku A',
		minAge: 18,
		maxAge: 35,
		location: 'Warszawa, ul. Sportowa 1',
		courtId: '1',
		playerCount: 10,
		isFree: true,
		eventTime: '2024-07-12T18:00:00Z',
		eventType: 'tournament',
		level: 'beginner',
	},
	{
		id: '2',
		createdBy: '2',
		participants: ['2', '4'],
		title: 'Gra w Tenisa',
		description: 'Zagrajmy w tenisa na korcie B',
		minAge: 16,
		maxAge: 26,
		location: 'Kraków, ul. Tenisowa 2',
		courtId: '2',
		playerCount: 8,
		isFree: true,
		eventTime: '2024-07-12T18:00:00Z',
		eventType: 'friendly',
	},
	{
		id: '3',
		createdBy: '4',
		participants: ['2', '4'],
		title: 'Siatkówka',
		description: 'Zapraszam na mecz siatkówki',
		minAge: 18,
		maxAge: 22,
		location: 'Warszawa, ul. Sportowa 1',
		courtId: '3',
		playerCount: 14,
		isFree: true,
		eventTime: '2024-07-12T18:00:00Z',
		eventType: 'training',
	},
];
