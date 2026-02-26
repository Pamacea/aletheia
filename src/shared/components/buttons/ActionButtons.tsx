import { Button, ButtonProps } from '@/ui/atoms/Button';
import { cn } from '@/lib/utils/cn';
import { SPACING } from '@/shared/constants/design-tokens';

export interface ActionButtonProps extends Omit<ButtonProps, 'children'> {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  iconPosition?: 'left' | 'right';
}

export function ActionButton({
  icon: Icon,
  label,
  iconPosition = 'left',
  className,
  size = 'md',
  ...props
}: ActionButtonProps) {
  return (
    <Button
      className={cn('flex items-center gap-2', className)}
      size={size}
      {...props}
    >
      {iconPosition === 'left' && <Icon className="w-4 h-4" />}
      <span>{label}</span>
      {iconPosition === 'right' && <Icon className="w-4 h-4" />}
    </Button>
  );
}

export interface IconButtonProps extends Omit<ButtonProps, 'children'> {
  icon: React.ComponentType<{ className?: string }>;
  label?: string; // For accessibility
  tooltip?: string;
}

export function IconButton({
  icon: Icon,
  label,
  tooltip,
  className,
  size = 'md',
  ...props
}: IconButtonProps) {
  const sizeClasses = {
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-3',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center ',
        'transition-all duration-200',
        'hover:bg-sepia-100 active:bg-sepia-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sepia-600 focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        sizeClasses[size],
        className
      )}
      aria-label={label || tooltip}
      title={tooltip}
      {...props}
    >
      <Icon className={iconSizes[size]} />
    </button>
  );
}

// Group of action buttons
export interface ActionGroup {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  onClick: () => void;
  variant?: ButtonProps['variant'];
}

export function ActionButtonGroup({
  actions,
  orientation = 'horizontal',
  className,
}: {
  actions: ActionGroup[];
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex gap-2',
        orientation === 'vertical' && 'flex-col',
        className
      )}
    >
      {actions.map((action, index) => (
        <ActionButton
          key={index}
          icon={action.icon}
          label={action.label}
          variant={action.variant || 'secondary'}
          onClick={action.onClick}
        />
      ))}
    </div>
  );
}
