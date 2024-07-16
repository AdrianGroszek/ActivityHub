export type UserType = {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	age: number;
	joinedEvents: number[];
};

export const user: UserType = {
	id: '1',
	firstName: 'Test',
	lastName: 'User',
	email: 'testuser@test.com',
	password: 'testtest123',
	age: 28,
	joinedEvents: [],
};
