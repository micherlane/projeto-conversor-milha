import { ReactNode } from 'react';
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
    const renderInformacoes = (label: string, value: string): ReactNode => {
        return <div className='informacoesStyle'>
            <p className='propriedadeStyle'>{label}:</p>
            <p>{value}</p>
        </div>;
    }

    return (
        <div className='resultadoStyle'>
            <h3>COMPRA DE MILHAS</h3>
            
            {renderInformacoes('Valor de referência', `R$ ${resultados.valorReferencia}/milheiro`)}
            {renderInformacoes('Milhas a comprar', resultados.milhasCompradas)}
            {renderInformacoes('Desconto', `${resultados.desconto}%`)}
            {renderInformacoes('Valor de desconto', `R$ ${resultados.valorDesconto}/milheiro`)}
            {renderInformacoes('Bônus', resultados.bonus)}
            {renderInformacoes('Milhas de Bônus', resultados.milhasDeBonus)}
            {renderInformacoes('Milhas Totais', resultados.milhasTotal)}
            {renderInformacoes('Valor total', `R$ ${resultados.valorTotal}`)}

            <div className='valorFinalStyle .valorFinalSemBorda'>
                <p className='textoStyle'>VALOR FINAL MILHEIRO:</p>
                <p className='valorMilheiro'>R$ {resultados.valorPorMilhas}/milheiro</p>
            </div>           
        </div>
    )
}