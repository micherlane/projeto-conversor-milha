import { InputHTMLAttributes } from "react";
import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function Input({...rest}: InputProps){
    return (<input className="inputStyles" {...rest}></input>)
}