import { ReactElement, ReactNode } from 'react'

interface ButtonProps {
  onClick?: () => void
  type?: 'submit' | 'reset' | 'button'
  className: string
  children: ReactNode
}

export function ReusableButton({
  onClick,
  type = 'button',
  className = '',
  children,
}: ButtonProps): ReactElement {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
