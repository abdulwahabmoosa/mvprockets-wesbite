
export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use (will override Tailwind bg if provided) */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  // Base reset + pill shape + focus ring
  const base = [
    'inline-block',
    'cursor-pointer',
    'border-0',
    'rounded-lg',
    'font-bold',
    'leading-none',
    'font-sans',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
  ].join(' ')

  // Primary vs secondary variants
  const variant = primary
    ? 'bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500'
    : 'shadow-inner bg-transparent text-gray-800 focus:ring-gray-400'

  // Size scale approximated from your px/font‑size values
  const sizes: Record<string,string> = {
    small:  'px-4 py-2.5 text-sm',  // ~10px/16px, 12px font
    medium: 'px-6 py-4 text-md',  // ~11px/20px, 14px font
    large:  'px-24 py-9   text-lg' // ~12px/24px, 16px font
  }

  const classes = [base, variant, sizes[size]].filter(Boolean).join(' ')

  return (
    <button
      type="button"
      className={classes}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >
      {label}
    </button>
  )
}
