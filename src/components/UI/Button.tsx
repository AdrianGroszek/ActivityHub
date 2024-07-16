import { type ComponentPropsWithoutRef } from 'react';
import styles from './Button.module.css';
import { Link, type LinkProps } from 'react-router-dom';

type BaseProps = {
	variant: 'primary' | 'secondary';
};

type ButtonProps = ComponentPropsWithoutRef<'button'> &
	BaseProps & { to?: never };

type ButtonLinkProps = LinkProps & BaseProps & { to: string };

type Props = ButtonProps | ButtonLinkProps;

export default function Button({ variant, ...props }: Props) {
	const variantStyle =
		variant === 'primary' ? styles.btnPrimary : styles.btnSecondary;

	if ('to' in props && props.to) {
		const { to, ...linkProps } = props as ButtonLinkProps;
		return (
			<Link
				className={`${styles.btn} ${variantStyle}`}
				to={to}
				{...linkProps}
			/>
		);
	}

	const { ...buttonProps } = props as ButtonProps;

	return (
		<button
			className={`${styles.btn} ${variantStyle}`}
			{...buttonProps}></button>
	);
}
