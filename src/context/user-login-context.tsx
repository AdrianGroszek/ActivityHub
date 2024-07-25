import {
	createContext,
	useContext,
	useEffect,
	useState,
	type ReactNode,
} from 'react';
import { type UserType } from '../data/user';
import { users } from '../data/users';

type UserLoginContextType = {
	user: UserType | null;
	login: (user: UserType) => void;
	logout: () => void;
	updateJoinedEvents: (eventId: string) => void;
	updateCreatedEvents: (eventId: string) => void;
};

const UserLoginContext = createContext<UserLoginContextType | null>(null);

type UserLoginProviderProps = {
	children: ReactNode;
};

export function useUserLogin() {
	const context = useContext(UserLoginContext);
	if (!context) {
		throw new Error('useUserLogin must be used within a UserLoginProvider');
	}
	return context;
}

export function UserLoginProvider({ children }: UserLoginProviderProps) {
	const [user, setUser] = useState<UserType | null>(null);

	function login(user: UserType) {
		setUser(user);
	}
	function logout() {
		setUser(null);
	}

	function updateUsersList(updatedUser: UserType) {
		const userIndex = users.findIndex((user) => user.id === updatedUser.id);
		if (userIndex !== -1) {
			users[userIndex] = updatedUser;
		}
	}

	function updateJoinedEvents(eventId: string) {
		if (user) {
			const updatedUser = {
				...user,
				joinedEvents: [...user.joinedEvents, eventId],
			};
			setUser(updatedUser);
			updateUsersList(updatedUser);
		}
	}

	function updateCreatedEvents(eventId: string) {
		if (user) {
			const updatedUser = {
				...user,
				joinedEvents: [...user.joinedEvents, eventId],
				createdEvents: [...user.createdEvents, eventId],
			};
			setUser(updatedUser);
			updateUsersList(updatedUser);
		}
	}

	useEffect(() => {
		if (user) {
			updateUsersList(user);
		}
	}, [user]);

	return (
		<UserLoginContext.Provider
			value={{ user, login, logout, updateJoinedEvents, updateCreatedEvents }}>
			{children}
		</UserLoginContext.Provider>
	);
}
