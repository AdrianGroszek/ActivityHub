export type UserType = {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	age: number;
	createdEvents: string[];
	joinedEvents: string[];
};

export const user: UserType = {
	id: '1',
	firstName: 'Zack',
	lastName: 'Efron',
	email: 'testuser@test.com',
	password: 'testtest123',
	age: 28,
	createdEvents: [],
	joinedEvents: [],
};
