import './styles.css'
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Bonus } from '../Bonus';
import { Resultado } from '../Resultado';
import { useState } from 'react';

export function Form() {

    // Entrada de dados.
    const [milhas, setMilhas] = useState('');
    const [valorMilhas, setValorMilhas] = useState('');
    const [desconto, setDesconto] = useState('');
    const [bonusSelecionado, setbonusSelecionado] = useState('');

    // Lista de Bônus disponíveis.
    const listaBonus = ['80', '100', '200', '300', '500', '800'];
    const [bonusSelecionados, setbonusSelecionados] = useState(Array(listaBonus.length).fill(false));

    // Controle da exibição dos resultados.
    const [resultado, setResultado] = useState('');
    const [estaCalculadoResultado, setEstaCalculadoResultado] = useState(false);

     // Função para selecionar os bônus.
     const selecionarBonus = (index: number, value: string) => {
        let bonusSelecionadosAtualizado = [...bonusSelecionados];

        // Atualizar o bônus selecionado.
        bonusSelecionadosAtualizado = bonusSelecionadosAtualizado.map((bonus, indice) => {
            if(index === indice){
                return true;
            } 

            bonus = false;
            return bonus;
        })
    
        

        setbonusSelecionados(bonusSelecionadosAtualizado);
        setbonusSelecionado(value);
    }

    const handleCalcular = () => {
        console.log(milhas, valorMilhas, bonusSelecionado, desconto);
        setResultado('')
        setEstaCalculadoResultado(true);
    }

   
    return (
        <div className="formStyles">
            <form onSubmit={handleCalcular}>
                <div className="milhasContainer">
                    <label>Milhas</label>
                    <Input type="text" placeholder='100.000' onChange={(event) => setMilhas(event.target.value)} value={milhas}/>
                </div>

                <div className="milheiroContainer">
                    <label>Preço Milheiro</label>
                    <Input type="text" placeholder='R$ 0.00' onChange={(event) => setValorMilhas(event.target.value)} value={valorMilhas}/>
                </div>

                <div>
                    <label>Desconto</label>
                    <Input type="text" placeholder='100%' onChange={(event) => setDesconto(event.target.value)} value={desconto}/>
                </div>

                <div className="bonusContainer">
                    <p>Bônus</p>
                    <div className='bonusItems'>
                        {listaBonus.map((valorBonus, index) => (
                            <Bonus key={index} valor={valorBonus} isSelected={bonusSelecionados[index]} onClicked={() => selecionarBonus(index, valorBonus)}/>
                         ))}
                    </div>
                       
                </div>
                <div className="botaoContainer">
                    <Button>Calcular</Button>
                </div>
            </form>


            {
                estaCalculadoResultado ?  <Resultado valor={resultado} /> : <div/>
            }
           
        </div>

    )
}