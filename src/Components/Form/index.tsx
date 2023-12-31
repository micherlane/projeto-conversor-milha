import './styles.css'
import { Button } from "../Button";
import { Input } from "../Input";
import { Bonus } from '../Bonus';
import { Resultado } from '../Resultado';
import { useState, FormEvent } from 'react';
import { CalculoBonusController } from '../../utils/controllers/CalculoBonusController';
import { ConversorDadosNumber } from '../../utils/controllers/ConversorDadosNumber';
import { CalculoDescontoController } from '../../utils/controllers/CalculoDescontController';
import { CalculoValorPorMilhasController } from '../../utils/controllers/CalculoValorPorMilhasController';
import { NotifyContainer, notifyWarning } from '../Notificacao';


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
    const [estaCalculadoResultado, setEstaCalculadoResultado] = useState(false);

    // Função para selecionar os bônus.
    const selecionarBonus = (index: number, value: number) => {
        let bonusDisponiveisStatusAtualizado = [...bonusDisponiveisStatus];

        // Atualizar o bônus selecionado.
        bonusDisponiveisStatusAtualizado = bonusDisponiveisStatusAtualizado.map((bonus, indice) => {
            if (index === indice) {
                bonus = !bonus
                return bonus;
            }

            bonus = false;
            return bonus;
        })


        if (!bonusDisponiveisStatusAtualizado[index]) {
            setbonusSelecionado(0);
        } else {
            setbonusSelecionado(value);
        }

        setbonusDisponiveisStatus(bonusDisponiveisStatusAtualizado);
    }

    const fecharResultado = () => {
        setEstaCalculadoResultado(false);
    }

    const handleCalcular = (event: FormEvent) => {
        event.preventDefault();

        if (milhasCompradas === '' || valorReferencia === '' || desconto === '') {
            notifyWarning('Por favor, preechar os dados.');
            return;
        }

        const milhasDeBonus = CalculoBonusController.calcularBonus(milhasCompradas, bonusSelecionado);

        const milhasTotal = milhasDeBonus + ConversorDadosNumber.converterDados(milhasCompradas);

        const valorComDesconto = CalculoDescontoController.calcularDesconto(valorReferencia, desconto);

        const valorPorMilhas = CalculoValorPorMilhasController.calcularValorPorMilhas(milhasTotal, valorComDesconto);

        setResultado({
            valorReferencia: valorReferencia,
            milhasCompradas: milhasCompradas,
            desconto: desconto,
            valorDesconto: valorComDesconto.toPrecision(2).toString(),
            bonus: bonusSelecionado.toString(),
            milhasDeBonus: milhasDeBonus.toString(),
            milhasTotal: milhasTotal.toString(),
            valorTotal: valorComDesconto.toPrecision(2).toString(),
            valorPorMilhas: valorPorMilhas.toPrecision(2).toString()
        })
        setEstaCalculadoResultado(true);
    }


    return (
        <div className="containerCenter">
            {!estaCalculadoResultado ?
                <div className="formStyles">
                    <form onSubmit={handleCalcular}>
                        <div>
                            <h1>Calculador de Milhas</h1>
                        </div>
                        <div className="milhasContainer">
                            <label>Milhas</label>
                            <Input type="number" placeholder='100.000' onChange={(event) => setMilhasCompradas(event.target.value)} value={milhasCompradas} />
                        </div>

                        <div className="milheiroContainer">
                            <label>Preço Milheiro</label>
                            <Input type="number" placeholder='R$ 0.00' onChange={(event) => setValorReferencia(event.target.value)} value={valorReferencia} min="0" />
                        </div>

                        <div>
                            <label>Desconto</label>
                            <Input type="number" placeholder='100%' onChange={(event) => setDesconto(event.target.value)} value={desconto} min="0" max="100" />
                        </div>

                        <div className="bonusContainer">
                            <p>Bônus</p>
                            <div className='bonusItems'>
                                {listaBonus.map((valorBonus, index) => (
                                    <Bonus key={index} valor={valorBonus} isSelected={bonusDisponiveisStatus[index]} onClicked={() => selecionarBonus(index, valorBonus)} />
                                ))}
                            </div>

                        </div>
                        <div className="botaoContainer">
                            <Button>Calcular</Button>
                        </div>
                    </form>
                </div>
                :
                <div className='resultadosStyle'>
                    <button onClick={fecharResultado} className='botaoFecharStyle'>Fechar</button>
                    <Resultado resultados={resultado} />
                </div>
            }
            <NotifyContainer />
        </div>

    )
}