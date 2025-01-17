import './button.scss';

export interface ButtonProps {
	/** Is this the principal call to action on the page? */
	primary?: boolean;
	/** What background color to use */
	backgroundColor?: string;
	/** How large should the button be? */
	size?: 'small' | 'medium' | 'large';
	/** Button contents */
	label: string;
}

/** Primary UI component for user interaction */
export const Button = ({
	primary = false,
	size = 'medium',
	backgroundColor,
	label,
	...props
}: ButtonProps) => {
	const mode = primary
		? 'cmdr-btn_variant_primary'
		: 'cmdr-btn_variant_secondary';
	return (
		<button
			type="button"
			className={['cmdr-btn', `cmdr-btn_size_${size}`, mode].join(' ')}
			style={{ backgroundColor }}
			{...props}
		>
			{label}
		</button>
	);
};
