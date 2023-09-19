import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export function Form(){
    return (
        <form>
            <Input type="text" placeholder="Digite o valor da milha"></Input>
           <Button>Calcular</Button> 
        </form>
    )
}