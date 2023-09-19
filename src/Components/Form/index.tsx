import './styles.css'
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Bonus } from '../Bonus';
import { Resultado } from '../Resultado';

export function Form() {
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
                        <Bonus valor='90' isSelected={true}/>
                        <Bonus valor='90'/>
                        <Bonus valor='90'/>
                        <Bonus valor='90'/>
                        <Bonus valor='90'/>
                        <Bonus valor='90'/>
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