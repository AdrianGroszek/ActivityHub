import { ComponentPropsWithoutRef, ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonProps = {
	children: ReactNode;
	variant: 'primary' | 'secondary';
} & ComponentPropsWithoutRef<'button'>;

export default function Button({ children, variant, ...props }: ButtonProps) {
	const variantStyle =
		variant === 'primary' ? styles.btnPrimary : styles.btnSecondary;

	return (
		<button className={`${styles.btn} ${variantStyle}`} {...props}>
			{children}
		</button>
	);
}
