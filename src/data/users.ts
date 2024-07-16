import { type UserType } from './user';

export const users: UserType[] = [
	{
		id: '2',
		firstName: 'Jan',
		lastName: 'Kowalski',
		email: 'jan.kowalski@example.com',
		password: 'password123',
		age: 25,
		joinedEvents: [1, 2],
	},
	{
		id: '3',
		firstName: 'Anna',
		lastName: 'Nowak',
		email: 'anna.nowak@example.com',
		password: 'password123',
		age: 30,
		joinedEvents: [1, 3],
	},
	{
		id: '4',
		firstName: 'Leo',
		lastName: 'McCartny',
		email: 'leo.cartny@example.com',
		password: 'password123',
		age: 16,
		joinedEvents: [1],
	},
];
