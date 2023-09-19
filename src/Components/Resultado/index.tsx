import './styles.css'

interface ResultadoProps {
    valor: string;
}
export function Resultado({valor}: ResultadoProps){
    return (
        <div className='resultadoStyle'>
            <p>Cada milheiro sairá por <span>R$ {valor}</span></p>
        </div>
    )
}