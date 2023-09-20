import './styles.css'

interface BonusProps {
    valor: number;
    isSelected?: boolean,
    onClicked?: () => void;
}
export function Bonus({valor, isSelected = false, onClicked}: BonusProps){
    const bonusClass = isSelected ? 'bonusStyles selected' : 'bonusStyles';

    return (<div className={bonusClass} onClick={onClicked}>
        <p>{valor}</p>
    </div>)
}