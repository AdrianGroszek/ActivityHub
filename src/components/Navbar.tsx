import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import Button from './UI/Button';
import { useUserLogin } from '../context/user-login-context';
import { users } from '../data/users';
import UserProfileNav from './UserProfileNav';
// import { UserType } from '../data/user';

export default function Navbar() {
	const { user, login, logout } = useUserLogin();
	return (
		<nav className={styles.navbar}>
			<Link to='/' onClick={logout} className={styles.logo}>
				ActivityHub
			</Link>
			<div className={styles.linksContainer}>
				{!user ? (
					<>
						{' '}
						<ul className={styles.linksList}>
							<li>
								<NavLink
									to='/'
									className={({ isActive }) =>
										isActive ? `${styles.active}` : ''
									}>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/news'
									className={({ isActive }) =>
										isActive ? `${styles.active}` : ''
									}>
									News
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/help'
									className={({ isActive }) =>
										isActive ? `${styles.active}` : ''
									}>
									Help
								</NavLink>
							</li>
						</ul>
						<div className={styles.btnContainer}>
							<Button variant='secondary'>Sing Up</Button>
							<Button
								to='/app/courts'
								onClick={() => login(users[0])}
								variant='primary'>
								Login
							</Button>
						</div>
					</>
				) : (
					<UserProfileNav />
				)}
			</div>
		</nav>
	);
}
