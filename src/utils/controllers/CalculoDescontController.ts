import { CalculoDescontoService } from "../services/CalculoDescontoService";
import { ConversorDadosNumber } from "./ConversorDadosNumber";

export class CalculoDescontoController{
    public static calcularDesconto(valorReferencia:string, valorDesconto: string): number{
        const valor = ConversorDadosNumber.converterDados(valorReferencia);
        const desconto =  ConversorDadosNumber.converterDados(valorDesconto);

        const valorComDesconto = new CalculoDescontoService().execute(valor, desconto);

        return valorComDesconto;
    }
}