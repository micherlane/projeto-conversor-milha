import { ReactNode, ButtonHTMLAttributes } from "react";
import './styles.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
}
export function Button({ children, ...rest}: ButtonProps){
    return (<button className="buttonStyles" {...rest}>
        {children}
    </button>)
}