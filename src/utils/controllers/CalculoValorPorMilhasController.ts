import { CalculoValorPorMilhasService } from "../services/CalculoValorPorMilhas";

export class CalculoValorPorMilhasController{
    public static calcularValorPorMilhas(milhasTotais: number, valorTotal: number): number{
       const valorPorMilhas = new CalculoValorPorMilhasService().execute(milhasTotais, valorTotal);
       return valorPorMilhas;
    }
}