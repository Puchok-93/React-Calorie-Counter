
import type { TResult } from "../../types/user";


type TCounterResultProps = {
    calories: TResult;
};

function CounterResult({calories}: TCounterResultProps) {
    return (
        <section className="counter__result">
            <h2 className="heading">Ваша норма калорий</h2>
            <ul className="counter__result-list">
                <li className="counter__result-item">
                    <h3>
                        <span id="calories-norm">{calories.maintenanceCalories}</span>ккал
                    </h3>
                    <p>поддержание веса</p>
                </li>
                <li className="counter__result-item">
                    <h3>
                        <span id="calories-minimal">{calories.weightLoss}</span>ккал
                    </h3>
                    <p>снижение веса</p>
                </li>
                <li className="counter__result-item">
                    <h3>
                        <span id="calories-maximal">{calories.weightGain}</span>ккал
                    </h3>
                    <p>набор веса</p>
                </li>
            </ul>
        </section>
    );
}

export default CounterResult;