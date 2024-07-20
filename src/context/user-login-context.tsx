import { createContext, useContext, useState, type ReactNode } from 'react';
import { UserType } from '../data/user';

type UserLoginContextType = {
	user: UserType | null;
	login: (user: UserType) => void;
	logout: () => void;
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

	return (
		<UserLoginContext.Provider value={{ user, login, logout }}>
			{children}
		</UserLoginContext.Provider>
	);
}
