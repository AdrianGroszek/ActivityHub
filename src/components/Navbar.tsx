import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import Button from './UI/Button';

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<Link to='/' className={styles.logo}>
				ActivityHub
			</Link>
			<div className={styles.linksContainer}>
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
					<Button variant='primary'>Login</Button>
				</div>
			</div>
		</nav>
	);
}
