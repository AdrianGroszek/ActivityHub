import { ReactNode } from 'react';
import { useUserLogin } from './context/user-login-context';
import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
	element: ReactNode;
};

export default function ProtectedRoute({ element }: ProtectedRouteProps) {
	const { user } = useUserLogin();
	if (!user) return <Navigate to='/' />;

	return <>{element}</>;
}
