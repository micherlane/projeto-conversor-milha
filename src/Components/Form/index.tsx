import './styles.css'
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Bonus } from '../Bonus';
import { Resultado } from '../Resultado';
import { useState, FormEvent } from 'react';
import { CalculoBonusController } from '../../utils/controllers/CalculoBonusController';
import { ConversorDadosNumber } from '../../utils/controllers/ConversorDadosNumber';
import { CalculoDescontoController } from '../../utils/controllers/CalculoDescontController';
import { CalculoValorPorMilhasController } from '../../utils/controllers/CalculoValorPorMilhasController';

export function Form() {

    // Entrada de dados.
    const [milhasCompradas, setMilhasCompradas] = useState('');
    const [valorReferencia, setValorReferencia] = useState('');
    const [desconto, setDesconto] = useState('');
    const [bonusSelecionado, setbonusSelecionado] = useState(0);

    // Lista de Bônus disponíveis.
    const listaBonus = [80, 100, 200, 300, 500, 800];
    const [bonusDisponiveisStatus, setbonusDisponiveisStatus] = useState(Array(listaBonus.length).fill(false));

    // Controle da exibição dos resultados.
    const [resultado, setResultado] = useState({
        valorReferencia: '0',
        milhasCompradas: '0',
        desconto: '0',
        valorDesconto: '0',
        bonus: '0',
        milhasDeBonus: '0',
        milhasTotal: '0',
        valorTotal: '0',
        valorPorMilhas: '0'
    });
    const [estaCalculadoResultado, setEstaCalculadoResultado] = useState(true);

     // Função para selecionar os bônus.
     const selecionarBonus = (index: number, value: number) => {
        let bonusDisponiveisStatusAtualizado = [...bonusDisponiveisStatus];

        // Atualizar o bônus selecionado.
        bonusDisponiveisStatusAtualizado = bonusDisponiveisStatusAtualizado.map((bonus, indice) => {
            if(index === indice){
                return true;
            } 

            bonus = false;
            return bonus;
        })
    
        

        setbonusDisponiveisStatus(bonusDisponiveisStatusAtualizado);
        setbonusSelecionado(value);
    }

    const handleCalcular = (event: FormEvent) => {
        event.preventDefault();

        const milhasDeBonus = CalculoBonusController.calcularBonus(milhasCompradas, bonusSelecionado);

        const milhasTotal = milhasDeBonus + ConversorDadosNumber.converterDados(milhasCompradas);

        const valorComDesconto = CalculoDescontoController.calcularDesconto(valorReferencia, desconto);

        const valorPorMilhas = CalculoValorPorMilhasController.calcularValorPorMilhas(milhasTotal, valorComDesconto);

        setResultado({ 
            valorReferencia: valorReferencia,
            milhasCompradas: milhasCompradas,
            desconto: desconto,
            valorDesconto: valorComDesconto.toString(),
            bonus: bonusSelecionado.toString(),
            milhasDeBonus: milhasDeBonus.toString(),
            milhasTotal: milhasTotal.toString(),
            valorTotal: valorComDesconto.toString(),
            valorPorMilhas: valorPorMilhas.toString()
        })
        setEstaCalculadoResultado(true);
    }

   
    return (
        <div className="formStyles">
            <form onSubmit={handleCalcular}>
                <div className="milhasContainer">
                    <label>Milhas</label>
                    <Input type="number" placeholder='100.000' onChange={(event) => setMilhasCompradas(event.target.value)} value={milhasCompradas}/>
                </div>

                <div className="milheiroContainer">
                    <label>Preço Milheiro</label>
                    <Input type="number" placeholder='R$ 0.00' onChange={(event) => setValorReferencia(event.target.value)} value={valorReferencia}/>
                </div>

                <div>
                    <label>Desconto</label>
                    <Input type="number" placeholder='100%' onChange={(event) => setDesconto(event.target.value)} value={desconto}/>
                </div>

                <div className="bonusContainer">
                    <p>Bônus</p>
                    <div className='bonusItems'>
                        {listaBonus.map((valorBonus, index) => (
                            <Bonus key={index} valor={valorBonus} isSelected={bonusDisponiveisStatus[index]} onClicked={() => selecionarBonus(index, valorBonus)}/>
                         ))}
                    </div>
                       
                </div>
                <div className="botaoContainer">
                    <Button>Calcular</Button>
                </div>
            </form>

            {
                estaCalculadoResultado ?  <Resultado resultados={resultado} /> : <div/>
            }
           
        </div>

    )
}