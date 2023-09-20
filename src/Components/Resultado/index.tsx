import './styles.css'

interface ResultadoProps {
    resultados: ResultadosObject,
}

interface ResultadosObject {
    valorReferencia: string;
    milhasCompradas: string;
    desconto: string;
    valorDesconto: string;
    bonus: string;
    milhasDeBonus: string;
    milhasTotal: string;
    valorTotal: string;
    valorPorMilhas: string;
}
export function Resultado( {resultados}: ResultadoProps){
    return (
        <div className='resultadoStyle'>
            <h3>COMPRA DE MILHAS</h3>
            <p>Valor de referência:</p>
            <p>R$ {resultados.valorReferencia}/milheiro</p>
            <p>Milhas a comprar:</p>
            <p>{resultados.milhasCompradas}</p>
            <p>Desconto:</p>
            <p>{resultados.desconto}</p>
            <p>Valor de desconto: </p>
            <p>R$ {resultados.valorDesconto}/milheiro</p>
            <p>Bônus:</p>
            <p>{resultados.bonus}</p>
            <p>Milhas de Bônus: </p>
            <p>{resultados.milhasDeBonus}</p>
            <p>Milhas Totais:</p>
            <p>{resultados.milhasTotal}</p>
            <p>Valor total:</p>
            <p>{resultados.valorTotal}</p>
            <p>VALOR FINAL MILHEIRO:</p>
            <p>R$ {resultados.valorPorMilhas}/milheiro</p>
        </div>
    )
}