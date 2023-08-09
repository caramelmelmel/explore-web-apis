import { ReactNode } from "react";
import { StyledButton } from "./styledButton";

interface ButtonProps {
    children?: ReactNode
    onClick?: Function
}

const Button = ({children, onClick}: ButtonProps) => {
    return (<StyledButton onClick={()=> onClick}>
        {children}
    </StyledButton>)
}

export default Button;
