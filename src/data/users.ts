import { v4 as uuidv4 } from 'uuid';
import { type UserType } from './user';

export const users: UserType[] = [
	{
		id: uuidv4(),
		firstName: 'John',
		lastName: 'Doe',
		email: 'john.doe@example.com',
		password: 'password123',
		age: 25,
		createdEvents: [],
		joinedEvents: ['1', '2'],
	},
	{
		id: uuidv4(),
		firstName: 'Jane',
		lastName: 'Smith',
		email: 'jane.smith@example.com',
		password: 'password123',
		age: 30,
		createdEvents: ['3'],
		joinedEvents: ['1', '4'],
	},
	{
		id: uuidv4(),
		firstName: 'Emily',
		lastName: 'Johnson',
		email: 'emily.johnson@example.com',
		password: 'password123',
		age: 22,
		createdEvents: [],
		joinedEvents: ['2'],
	},
	{
		id: uuidv4(),
		firstName: 'Michael',
		lastName: 'Brown',
		email: 'michael.brown@example.com',
		password: 'password123',
		age: 28,
		createdEvents: ['5'],
		joinedEvents: [],
	},
	{
		id: uuidv4(),
		firstName: 'Sarah',
		lastName: 'Davis',
		email: 'sarah.davis@example.com',
		password: 'password123',
		age: 35,
		createdEvents: ['6'],
		joinedEvents: ['3'],
	},
	{
		id: uuidv4(),
		firstName: 'David',
		lastName: 'Miller',
		email: 'david.miller@example.com',
		password: 'password123',
		age: 27,
		createdEvents: [],
		joinedEvents: ['4', '5'],
	},
	{
		id: uuidv4(),
		firstName: 'Laura',
		lastName: 'Wilson',
		email: 'laura.wilson@example.com',
		password: 'password123',
		age: 23,
		createdEvents: [],
		joinedEvents: [],
	},
	{
		id: uuidv4(),
		firstName: 'James',
		lastName: 'Taylor',
		email: 'james.taylor@example.com',
		password: 'password123',
		age: 32,
		createdEvents: ['7', '8'],
		joinedEvents: ['6'],
	},
	{
		id: uuidv4(),
		firstName: 'Anna',
		lastName: 'Moore',
		email: 'anna.moore@example.com',
		password: 'password123',
		age: 29,
		createdEvents: [],
		joinedEvents: ['7', '8'],
	},
	{
		id: uuidv4(),
		firstName: 'Robert',
		lastName: 'Anderson',
		email: 'robert.anderson@example.com',
		password: 'password123',
		age: 26,
		createdEvents: ['9'],
		joinedEvents: ['3', '9'],
	},
	{
		id: uuidv4(),
		firstName: 'Olivia',
		lastName: 'Martinez',
		email: 'olivia.martinez@example.com',
		password: 'password123',
		age: 24,
		createdEvents: [],
		joinedEvents: ['1'],
	},
	{
		id: uuidv4(),
		firstName: 'Liam',
		lastName: 'Garcia',
		email: 'liam.garcia@example.com',
		password: 'password123',
		age: 31,
		createdEvents: ['2'],
		joinedEvents: ['3'],
	},
	{
		id: uuidv4(),
		firstName: 'Ava',
		lastName: 'Rodriguez',
		email: 'ava.rodriguez@example.com',
		password: 'password123',
		age: 29,
		createdEvents: [],
		joinedEvents: ['4', '5'],
	},
	{
		id: uuidv4(),
		firstName: 'Ethan',
		lastName: 'Lopez',
		email: 'ethan.lopez@example.com',
		password: 'password123',
		age: 27,
		createdEvents: ['6'],
		joinedEvents: ['2', '7'],
	},
	{
		id: uuidv4(),
		firstName: 'Sophia',
		lastName: 'Wilson',
		email: 'sophia.wilson@example.com',
		password: 'password123',
		age: 26,
		createdEvents: ['7'],
		joinedEvents: ['8'],
	},
	{
		id: uuidv4(),
		firstName: 'Mason',
		lastName: 'Anderson',
		email: 'mason.anderson@example.com',
		password: 'password123',
		age: 32,
		createdEvents: [],
		joinedEvents: ['5', '6'],
	},
	{
		id: uuidv4(),
		firstName: 'Isabella',
		lastName: 'Thomas',
		email: 'isabella.thomas@example.com',
		password: 'password123',
		age: 23,
		createdEvents: ['8'],
		joinedEvents: ['9'],
	},
	{
		id: uuidv4(),
		firstName: 'Jackson',
		lastName: 'Taylor',
		email: 'jackson.taylor@example.com',
		password: 'password123',
		age: 28,
		createdEvents: [],
		joinedEvents: ['9', '10'],
	},
	{
		id: uuidv4(),
		firstName: 'Mia',
		lastName: 'White',
		email: 'mia.white@example.com',
		password: 'password123',
		age: 21,
		createdEvents: ['10'],
		joinedEvents: ['7'],
	},
	{
		id: uuidv4(),
		firstName: 'Benjamin',
		lastName: 'Harris',
		email: 'benjamin.harris@example.com',
		password: 'password123',
		age: 34,
		createdEvents: ['9'],
		joinedEvents: ['8', '10'],
	},
];
