export class CalculoDescontoService{
    public execute(valorReferencia: number, valorDeDesconto: number): number{
        const desconto = (valorReferencia * valorDeDesconto / 100);
        const valorDesconto = valorReferencia - desconto;
        return  valorDesconto;
    }
}