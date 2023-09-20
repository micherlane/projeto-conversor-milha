
export class CalculoBonusService{
    public execute(quantidadeMilhas: number, bonus: number): number{
        const milhasDeBonus = (quantidadeMilhas * bonus / 100);
        return milhasDeBonus;
    }

}