'use client'
import { forwardRef, InputHTMLAttributes, useState, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react'

interface FormInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  error?: string
  success?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  variant?: 'default' | 'outline' | 'filled'
  size?: 'sm' | 'md' | 'lg'  // ← This now works because we omitted the native 'size'
  required?: boolean
  showPasswordToggle?: boolean
  className?: string
  inputClassName?: string
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({
    label,
    error,
    success,
    icon,
    iconPosition = 'left',
    variant = 'default',
    size = 'md',
    required = false,
    showPasswordToggle = false,
    className,
    inputClassName,
    type = 'text',
    disabled,
    ...props
  }, ref) => {
    const [showPassword, setShowPassword] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const isError = !!error
    const isSuccess = !!success && !isError

    // Determine input type
    const inputType = showPasswordToggle && showPassword ? 'text' : type
    const isPassword = type === 'password' || showPasswordToggle

    // Size classes
    const sizeClasses = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3 text-base',
      lg: 'px-5 py-4 text-lg',
    }

    // Variant classes
    const variantClasses = {
      default: 'border-gray-300 bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20',
      outline: 'border-2 border-gray-300 bg-transparent focus:border-secondary focus:ring-2 focus:ring-secondary/20',
      filled: 'border-transparent bg-gray-100 focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20',
    }

    // State classes
    const stateClasses = isError
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
      : isSuccess
      ? 'border-green-500 focus:border-green-500 focus:ring-green-500/20'
      : variantClasses[variant]

    // Disabled classes
    const disabledClasses = disabled
      ? 'opacity-50 cursor-not-allowed bg-gray-100'
      : ''

    // Icon padding
    const iconPadding = icon ? (iconPosition === 'left' ? 'pl-10' : 'pr-10') : ''
    const passwordPadding = showPasswordToggle ? 'pr-10' : ''

    return (
      <div className={cn('w-full', className)}>
        {/* Label */}
        {label && (
          <label
            htmlFor={props.id || props.name}
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        {/* Input Container */}
        <div className="relative">
          {/* Left Icon */}
          {icon && iconPosition === 'left' && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {icon}
            </div>
          )}

          {/* Input */}
          <input
            ref={ref}
            type={inputType}
            disabled={disabled}
            required={required}
            className={cn(
              'w-full rounded-lg transition-all duration-200',
              'focus:outline-none',
              sizeClasses[size],
              stateClasses,
              disabledClasses,
              iconPadding,
              passwordPadding,
              inputClassName
            )}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            aria-invalid={isError}
            aria-describedby={
              isError ? `${props.id || props.name}-error` :
              isSuccess ? `${props.id || props.name}-success` :
              undefined
            }
            {...props}
          />

          {/* Right Icon */}
          {icon && iconPosition === 'right' && !showPasswordToggle && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {icon}
            </div>
          )}

          {/* Password Toggle */}
          {showPasswordToggle && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition focus:outline-none focus:ring-2 focus:ring-secondary rounded"
              tabIndex={-1}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          )}

          {/* Status Icon */}
          {isError && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
              <AlertCircle size={18} />
            </div>
          )}
          {isSuccess && !isError && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">
              <CheckCircle size={18} />
            </div>
          )}
        </div>

        {/* Error Message */}
        {isError && (
          <p
            id={`${props.id || props.name}-error`}
            className="mt-1.5 text-sm text-red-500 flex items-center gap-1"
          >
            <AlertCircle size={14} />
            {error}
          </p>
        )}

        {/* Success Message */}
        {isSuccess && !isError && (
          <p
            id={`${props.id || props.name}-success`}
            className="mt-1.5 text-sm text-green-500 flex items-center gap-1"
          >
            <CheckCircle size={14} />
            {success}
          </p>
        )}
      </div>
    )
  }
)

FormInput.displayName = 'FormInput'

export default FormInput