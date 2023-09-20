export class CalculoValorPorMilhasService {
    public execute(milhasTotais: number, valorTotal: number){
        const valorPorMilhas = valorTotal/milhasTotais * 1000;
        return valorPorMilhas;
    }
}