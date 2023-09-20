import { CalculoBonusService } from "../services/CalculoBonusService";
import { ConversorDadosNumber } from "./ConversorDadosNumber";

export class CalculoBonusController{
    public static calcularBonus(milhasCompradas: string, quantidadeBonus: string): Object{
        const milhasCompradasNumber = ConversorDadosNumber.converterDados(milhasCompradas);
        const quantidadeBonusNumber =  ConversorDadosNumber.converterDados(quantidadeBonus);

        const resultados = new CalculoBonusService().execute(milhasCompradasNumber, quantidadeBonusNumber);
        
        return resultados;
    }
}