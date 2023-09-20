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
            
            <div className='informacoesStyle'>
                <p className='propriedadeStyle'>Valor de referência:</p>
                <p>R$ {resultados.valorReferencia}/milheiro</p>
            </div>
            
            <div className='informacoesStyle'>
                <p className='propriedadeStyle'>Milhas a comprar:</p>
                <p>{resultados.milhasCompradas}</p>
            </div>
           
            <div className='informacoesStyle'>
                <p className='propriedadeStyle'>Desconto:</p>
                <p>{resultados.desconto}%</p>
            </div>
           
            <div className='informacoesStyle'>
                <p className='propriedadeStyle'>Valor de desconto: </p>
                <p>R$ {resultados.valorDesconto}/milheiro</p>
            </div>

            <div className='informacoesStyle'>
                <p className='propriedadeStyle'>Bônus:</p>
                <p>{resultados.bonus}</p>
            </div>

            <div className='informacoesStyle'>
                <p className='propriedadeStyle'>Milhas de Bônus: </p>
                <p>{resultados.milhasDeBonus}</p>
            </div>

            <div className='informacoesStyle'>
                <p className='propriedadeStyle'>Milhas Totais:</p>
                <p>{resultados.milhasTotal}</p>
            </div>
            
            <div className='informacoesStyle'>
                <p className='propriedadeStyle'>Valor total:</p>
                <p>R$ {resultados.valorTotal}</p>
            </div>

            <div className='valorFinalStyle .valorFinalSemBorda'>
                <p className='textoStyle'>VALOR FINAL MILHEIRO:</p>
                <p className='valorMilheiro'>R$ {resultados.valorPorMilhas}/milheiro</p>
            </div>           
        </div>
    )
}