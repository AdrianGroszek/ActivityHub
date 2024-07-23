import styles from './UserProfileNav.module.css';
import { useUserLogin } from '../context/user-login-context';
import { Link } from 'react-router-dom';

export default function UserProfileNav() {
	const { user, logout } = useUserLogin();
	return (
		<div className={styles.userProfileContainer}>
			<img src={user?.photo} alt='user profile picture' />
			<p>Hi, {user?.firstName}</p>
			<Link to='/' onClick={logout} className={styles.logoutBtn}>
				logout
			</Link>
		</div>
	);
}
