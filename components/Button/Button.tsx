import React, { MouseEventHandler, ReactNode } from 'react'
import styled from '@emotion/styled'

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: 'small' | 'medium' | 'large'
  children?: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement> & (() => void)
  backgroundColor?: 'black' | 'red' | 'blue'
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  size = 'medium',
  backgroundColor = 'black',
  onClick,
  children,
}: ButtonProps) => (
  <StyledButton size={size} backgroundColor={backgroundColor} onClick={onClick}>
    {children}
  </StyledButton>
)

export default Button

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.backgroundColor};
  padding: 16px 12px;
  color: white;
  border-radius: 16px;
  border: 0;
`
