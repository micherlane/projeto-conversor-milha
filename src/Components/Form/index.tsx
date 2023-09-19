import './styles.css'
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Bonus } from '../Bonus';
import { Resultado } from '../Resultado';
import { useState } from 'react';

export function Form() {
    const [milhas, setMilhas] = useState('');
    const [valorMilhas, setValorMilhas] = useState('');
    const [bonusSelecionado, setbonusSelecionado] = useState('');
    const [listaBonus, setlistaBonus] = useState(['80', '100', '200', '300', '500', '800']);
    const [bonusSelecionados, setbonusSelecionados] = useState(Array(listaBonus.length).fill(false));


    const selecionarBonus = (index: number, value: string) => {
        let bonusSelecionadosAtualizado = [...bonusSelecionados];

        bonusSelecionadosAtualizado = bonusSelecionadosAtualizado.map((bonus, indice) => {
            if(index === indice){
                return true;
            } 

            return bonus = false;
        })
    
        

        setbonusSelecionados(bonusSelecionadosAtualizado);
        setbonusSelecionado(value);
    }

    return (
        <div className="formStyles">
            <form>
                <div className="milhasContainer">
                    <label>Milhas</label>
                    <Input type="text" placeholder='100.000'/>
                </div>

                <div className="milheiroContainer">
                    <label>Preço Milheiro</label>
                    <Input type="text" placeholder='R$ 0.00'/>
                </div>

                <div>
                    <label>Desconto</label>
                    <Input type="text" placeholder='100%'></Input>
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

            <Resultado valor='45' />
        </div>

    )
}