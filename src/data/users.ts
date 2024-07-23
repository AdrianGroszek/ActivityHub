import { type UserType } from './user';
import ProfileImg1 from '../assets/profile-photo-1.jpg';
import ProfileImg2 from '../assets/profile-photo-2.jpg';
import ProfileImg3 from '../assets/profile-photo-3.jpg';
import ProfileImg4 from '../assets/profile-photo-4.jpg';
import ProfileImg5 from '../assets/profile-photo-5.jpg';
import ProfileImg6 from '../assets/profile-photo-6.jpg';
import ProfileImg7 from '../assets/profile-photo-7.jpg';
import ProfileImg8 from '../assets/profile-photo-8.jpg';
import ProfileImg9 from '../assets/profile-photo-9.jpg';
import ProfileImg10 from '../assets/profile-photo-10.jpg';
import ProfileImg11 from '../assets/profile-photo-11.jpg';
import ProfileImg12 from '../assets/profile-photo-12.jpg';
import ProfileImg13 from '../assets/profile-photo-13.jpg';
import ProfileImg14 from '../assets/profile-photo-14.jpg';
import ProfileImg15 from '../assets/profile-photo-15.jpg';
import ProfileImg16 from '../assets/profile-photo-16.jpg';
import ProfileImg17 from '../assets/profile-photo-17.jpg';
import ProfileImg18 from '../assets/profile-photo-18.jpg';
import ProfileImg19 from '../assets/profile-photo-19.jpg';
import ProfileImg20 from '../assets/profile-photo-20.jpg';
import ProfileImg21 from '../assets/profile-photo-21.jpg';

export function updateUser(
	userId: string,
	updatedUserData: Partial<UserType>
): void {
	const userIndex = users.findIndex((user) => user.id === userId);
	if (userIndex !== -1) {
		users[userIndex] = { ...users[userIndex], ...updatedUserData };
	}
}

export const users: UserType[] = [
	{
		id: '111',
		firstName: 'Zack',
		lastName: 'Efron',
		email: 'testuser@test.com',
		password: 'testtest123',
		photo: ProfileImg21,
		age: 28,
		createdEvents: [],
		joinedEvents: [],
	},
	{
		id: '1',
		firstName: 'John',
		lastName: 'Doe',
		email: 'john.doe@example.com',
		password: 'password123',
		photo: ProfileImg1,
		age: 21,
		createdEvents: ['1'],
		joinedEvents: ['1', '9'],
	},
	{
		id: '2',
		firstName: 'Jane',
		lastName: 'Smith',
		email: 'jane.smith@example.com',
		password: 'password123',
		photo: ProfileImg2,
		age: 20,
		createdEvents: ['2'],
		joinedEvents: ['10', '2', '11'],
	},
	{
		id: '3',
		firstName: 'Emily',
		lastName: 'Johnson',
		email: 'emily.johnson@example.com',
		password: 'password123',
		photo: ProfileImg3,
		age: 22,
		createdEvents: ['3'],
		joinedEvents: ['1', '3', '2', '11'],
	},
	{
		id: '4',
		firstName: 'Michael',
		lastName: 'Brown',
		email: 'michael.brown@example.com',
		password: 'password123',
		photo: ProfileImg4,
		age: 20,
		createdEvents: ['4'],
		joinedEvents: ['4', '2', '3', '12'],
	},
	{
		id: '5',
		firstName: 'Sarah',
		lastName: 'Davis',
		email: 'sarah.davis@example.com',
		password: 'password123',
		photo: ProfileImg5,
		age: 22,
		createdEvents: ['5'],
		joinedEvents: ['5', '3', '4', '12'],
	},
	{
		id: '6',
		firstName: 'David',
		lastName: 'Miller',
		email: 'david.miller@example.com',
		password: 'password123',
		photo: ProfileImg6,
		age: 21,
		createdEvents: ['6'],
		joinedEvents: ['6', '4', '5', '13'],
	},
	{
		id: '7',
		firstName: 'Laura',
		lastName: 'Wilson',
		email: 'laura.wilson@example.com',
		password: 'password123',
		photo: ProfileImg7,
		age: 23,
		createdEvents: ['7'],
		joinedEvents: ['7', '5', '6', '13'],
	},
	{
		id: '8',
		firstName: 'James',
		lastName: 'Taylor',
		email: 'james.taylor@example.com',
		password: 'password123',
		photo: ProfileImg8,
		age: 22,
		createdEvents: ['8'],
		joinedEvents: ['8', '6', '7'],
	},
	{
		id: '9',
		firstName: 'Anna',
		lastName: 'Moore',
		email: 'anna.moore@example.com',
		password: 'password123',
		photo: ProfileImg9,
		age: 24,
		createdEvents: ['9'],
		joinedEvents: ['9', '7', '8'],
	},
	{
		id: '10',
		firstName: 'Robert',
		lastName: 'Anderson',
		email: 'robert.anderson@example.com',
		password: 'password123',
		photo: ProfileImg10,
		age: 24,
		createdEvents: ['10'],
		joinedEvents: ['10', '8', '9'],
	},
	{
		id: '11',
		firstName: 'Olivia',
		lastName: 'Martinez',
		email: 'olivia.martinez@example.com',
		password: 'password123',
		photo: ProfileImg11,
		age: 24,
		createdEvents: ['11'],
		joinedEvents: ['11'],
	},
	{
		id: '12',
		firstName: 'Liam',
		lastName: 'Garcia',
		email: 'liam.garcia@example.com',
		password: 'password123',
		photo: ProfileImg12,
		age: 22,
		createdEvents: ['12'],
		joinedEvents: ['12'],
	},
	{
		id: '13',
		firstName: 'Ava',
		lastName: 'Rodriguez',
		email: 'ava.rodriguez@example.com',
		password: 'password123',
		photo: ProfileImg13,
		age: 20,
		createdEvents: ['13'],
		joinedEvents: ['13'],
	},
	{
		id: '14',
		firstName: 'Ethan',
		lastName: 'Lopez',
		email: 'ethan.lopez@example.com',
		password: 'password123',
		photo: ProfileImg14,
		age: 21,
		createdEvents: [],
		joinedEvents: ['2', '7'],
	},
	{
		id: '15',
		firstName: 'Sophia',
		lastName: 'Wilson',
		email: 'sophia.wilson@example.com',
		password: 'password123',
		photo: ProfileImg15,
		age: 21,
		createdEvents: [],
		joinedEvents: ['8'],
	},
	{
		id: '16',
		firstName: 'Mason',
		lastName: 'Anderson',
		email: 'mason.anderson@example.com',
		password: 'password123',
		photo: ProfileImg16,
		age: 22,
		createdEvents: [],
		joinedEvents: ['5', '6'],
	},
	{
		id: '17',
		firstName: 'Isabella',
		lastName: 'Thomas',
		email: 'isabella.thomas@example.com',
		password: 'password123',
		photo: ProfileImg17,
		age: 23,
		createdEvents: [],
		joinedEvents: ['9'],
	},
	{
		id: '18',
		firstName: 'Jackson',
		lastName: 'Taylor',
		email: 'jackson.taylor@example.com',
		password: 'password123',
		photo: ProfileImg18,
		age: 24,
		createdEvents: [],
		joinedEvents: ['9', '10'],
	},
	{
		id: '19',
		firstName: 'Mia',
		lastName: 'White',
		email: 'mia.white@example.com',
		password: 'password123',
		photo: ProfileImg19,
		age: 21,
		createdEvents: [],
		joinedEvents: ['7'],
	},
	{
		id: '20',
		firstName: 'Benjamin',
		lastName: 'Harris',
		email: 'benjamin.harris@example.com',
		password: 'password123',
		photo: ProfileImg20,
		age: 22,
		createdEvents: [],
		joinedEvents: ['8', '10'],
	},
];
