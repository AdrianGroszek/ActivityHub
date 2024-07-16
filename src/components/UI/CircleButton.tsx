import { ComponentPropsWithoutRef } from 'react';
import styles from './CircleButton.module.css';

type CircleButtonProps = {
	sizeWithPx: string;
} & ComponentPropsWithoutRef<'button'>;

export default function CircleButton({
	sizeWithPx,
	...props
}: CircleButtonProps) {
	return (
		<button
			className={styles.circleBtn}
			style={{ height: `${sizeWithPx}`, width: `${sizeWithPx}` }}
			{...props}></button>
	);
}
