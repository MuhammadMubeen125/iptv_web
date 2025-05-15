import { cn } from '@/lib/utils';
import React from 'react';

// Using type instead of interface to avoid linter warning about empty interface
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-background-tertiary bg-background-secondary px-3 py-2 text-sm text-text-primary',
          'placeholder:text-text-tertiary',
          'focus-ring',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input }; 