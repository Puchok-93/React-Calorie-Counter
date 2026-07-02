import UserActivity from "../user-activity/user-activity";
import UserGender from "../user-gender/user-gender";
import {
    ACTIVITY,
    GENDERS,
    DEFAULT_GENDER,
    DEFAULT_ACTIVITY,
} from "../../const";
import { useState } from "react";
import type { TActivity, TGender, TResult } from "../../types/user";

function App() {
    const [gender, setGender] = useState<string | null>(DEFAULT_GENDER);
    const [activity, setActivity] = useState<number>(DEFAULT_ACTIVITY);
    const [age, setAge] = useState<string>("");
    const [height, setHeight] = useState<string>("");
    const [weight, setWeight] = useState<string>("");
    const [calories, setCalories] = useState<TResult | null>(null);

    function handleSelectGender(gender: TGender) {
        setGender(gender.id);
    }

    function handleSelectActivity(activity: TActivity) {
        setActivity(activity.value);
    }

    function handleClearForm(): void {
        setGender(DEFAULT_GENDER);
        setActivity(DEFAULT_ACTIVITY);
        setAge("");
        setHeight("");
        setWeight("");
        setCalories(null);
    }

    function calcCalories(): TResult {
        const currentWeight = Number(weight);
        const currentHeight = Number(height);
        const currentAge = Number(age);

        const bmr =
            gender === "gender-male"
                ? 10 * currentWeight + 6.25 * currentHeight - 5 * currentAge + 5
                : 10 * currentWeight +
                  6.25 * currentHeight -
                  5 * currentAge -
                161;

        const maintenanceCalories = bmr * activity;
        const weightLoss = maintenanceCalories - maintenanceCalories * 0.15;
        const weightGain = maintenanceCalories + maintenanceCalories * 0.15;

        return {
            maintenanceCalories: Math.round(maintenanceCalories),
            weightLoss:Math.round(weightLoss),
            weightGain: Math.round(weightGain),
        };
    }

    function handleCalcCalories() {
        const result = calcCalories();
        setCalories(result);
    }

    const isFormValid =
        gender !== null &&
        activity !== null &&
        height !== "" &&
        weight !== "" &&
        age !== "";

    const isFormNotEmpty = height !== "" || weight !== "" || age !== "";

    return (
        <main className="main">
            <div className="container">
                <article className="counter">
                    <h1 className="counter__heading heading-main">
                        Счётчик калорий
                    </h1>
                    <form
                        className="counter__form form"
                        name="counter"
                        action="#"
                        method="post"
                    >
                        <UserGender
                            genders={GENDERS}
                            gender={gender}
                            onSelect={handleSelectGender}
                        />
                        <fieldset
                            className="form__item form__parameters"
                            name="parameters"
                        >
                            <legend className="visually-hidden">
                                Физические параметры
                            </legend>
                            <div className="inputs-group">
                                <div className="input">
                                    <div className="input__heading">
                                        <label
                                            className="heading"
                                            htmlFor="age"
                                        >
                                            Возраст
                                        </label>
                                        <span className="input__heading-unit">
                                            лет
                                        </span>
                                    </div>
                                    <div className="input__wrapper">
                                        <input
                                            type="text"
                                            id="age"
                                            name="age"
                                            value={age}
                                            placeholder={"0"}
                                            onChange={(e) => {
                                                const value = e.target.value
                                                    .replace(/\D/g, "")
                                                    .slice(0, 3);
                                                setAge(value);
                                            }}
                                            maxLength={3}
                                            inputMode="numeric"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="input">
                                    <div className="input__heading">
                                        <label
                                            className="heading"
                                            htmlFor="height"
                                        >
                                            Рост
                                        </label>
                                        <span className="input__heading-unit">
                                            см
                                        </span>
                                    </div>
                                    <div className="input__wrapper">
                                        <input
                                            type="text"
                                            id="height"
                                            name="height"
                                            value={height}
                                            placeholder={"0"}
                                            onChange={(e) =>
                                                setHeight(e.target.value)
                                            }
                                            maxLength={3}
                                            inputMode="decimal"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="input">
                                    <div className="input__heading">
                                        <label
                                            className="heading"
                                            htmlFor="weight"
                                        >
                                            Вес
                                        </label>
                                        <span className="input__heading-unit">
                                            кг
                                        </span>
                                    </div>
                                    <div className="input__wrapper">
                                        <input
                                            type="text"
                                            id="weight"
                                            name="weight"
                                            value={weight}
                                            placeholder={"0"}
                                            onChange={(e) =>
                                                setWeight(e.target.value)
                                            }
                                            maxLength={3}
                                            inputMode="decimal"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <UserActivity
                            activities={ACTIVITY}
                            activity={activity}
                            onSelect={handleSelectActivity}
                        />
                        <div className="form__submit">
                            <button
                                className="form__submit-button button"
                                name="submit"
                                type="submit"
                                disabled={!isFormValid}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleCalcCalories();
                                }}
                            >
                                Рассчитать
                            </button>
                            <button
                                className="form__reset-button"
                                name="reset"
                                type="reset"
                                disabled={!isFormNotEmpty}
                                onClick={() => handleClearForm()}
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="#FD3636"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M13.4143 12.0002L18.7072 6.70725C19.0982 6.31625 19.0982 5.68425 18.7072 5.29325C18.3162 4.90225 17.6842 4.90225 17.2933 5.29325L12.0002 10.5862L6.70725 5.29325C6.31625 4.90225 5.68425 4.90225 5.29325 5.29325C4.90225 5.68425 4.90225 6.31625 5.29325 6.70725L10.5862 12.0002L5.29325 17.2933C4.90225 17.6842 4.90225 18.3162 5.29325 18.7072C5.48825 18.9022 5.74425 19.0002 6.00025 19.0002C6.25625 19.0002 6.51225 18.9022 6.70725 18.7072L12.0002 13.4143L17.2933 18.7072C17.4882 18.9022 17.7443 19.0002 18.0002 19.0002C18.2562 19.0002 18.5122 18.9022 18.7072 18.7072C19.0982 18.3162 19.0982 17.6842 18.7072 17.2933L13.4143 12.0002Z"
                                    />
                                </svg>
                                <span>Очистить поля и расчёт</span>
                            </button>
                        </div>
                    </form>
                    {calories && (
                        <section className={`counter__result ${calories ? '' : 'counter__result--hidden'}`}>
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
                    )}
                </article>
            </div>
        </main>
    );
}

export default App;
