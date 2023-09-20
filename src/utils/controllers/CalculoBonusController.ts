import { CalculoBonusService } from "../services/CalculoBonusService";
import { ConversorDadosNumber } from "./ConversorDadosNumber";

export class CalculoBonusController{
    public static calcularBonus(milhasCompradas: string, quantidadeBonus: number): number{
        const milhasCompradasNumber = ConversorDadosNumber.converterDados(milhasCompradas);

        const milhasDeBonus = new CalculoBonusService().execute(milhasCompradasNumber, quantidadeBonus);
        
        return milhasDeBonus;
    }
}