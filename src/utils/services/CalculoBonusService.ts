
export class CalculoBonusService{
    public execute(quantidadeMilhas: number, bonus: number): Object{
        const milhasDeBonus = quantidadeMilhas + (quantidadeMilhas * bonus / 100);
        return {
            quantidadeMilhas,
            milhasDeBonus,
        };
    }

}