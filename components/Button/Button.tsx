import React, { HTMLAttributes, ReactChildren } from 'react'
import styled from '@emotion/styled'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large'
  children: ReactChildren
  onClick?: () => void
  [prop: string]: any
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  children,
  ...props
}: ButtonProps) => <StyledButton {...props}>{children}</StyledButton>

export default Button

const StyledButton = styled.button<ButtonProps>`
  background-color: black;
  padding: 16px 12px;
  color: white;
  border-radius: 16px;
  border: 0;
`
