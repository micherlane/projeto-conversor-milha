import './styles.css'

interface BonusProps {
    valor: string;
    isSelected?: boolean
}
export function Bonus({valor, isSelected = false}: BonusProps){
    const bonusClass = isSelected ? 'bonusStyles selected' : 'bonusStyles';

    return (<div className={bonusClass}>
        <p>{valor}</p>
    </div>)
}