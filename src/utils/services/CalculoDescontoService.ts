
export class CalculoDescontoService{
    public execute(valorReferencia: number, valorDeDesconto: number): Object{
        const desconto = (valorReferencia * valorDeDesconto / 100);
        const valorDesconto = valorReferencia - valorDeDesconto;
        return {
            desconto,
            valorDesconto
        };
    }
}