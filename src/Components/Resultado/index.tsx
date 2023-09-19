import './styles.css'

interface ResultadoProps {
    valor: string;
}
export function Resultado({valor}: ResultadoProps){
    return (
        <div>
            <p>Cada milheiro saíra por <span>R$ {valor}</span></p>
        </div>
    )
}