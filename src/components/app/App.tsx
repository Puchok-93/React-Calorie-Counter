import UserActivity from "../user-activity/user-activity";
import UserGender from "../user-gender/user-gender";
import Input from "../input/input";
import CounterResult from "../counter-result/counter-result";

import {
    ACTIVITY,
    GENDERS,
    DEFAULT_GENDER,
    DEFAULT_ACTIVITY
} from "../../const";
import { useState } from "react";
import type { TActivity, TResult, TGenderID } from "../../types/user";
import calcCalories from "../../utils/utils";

function App() {
    const [gender, setGender] = useState<TGenderID>(DEFAULT_GENDER);
    const [activity, setActivity] = useState<number>(DEFAULT_ACTIVITY);
    const [age, setAge] = useState<string>("");
    const [height, setHeight] = useState<string>("");
    const [weight, setWeight] = useState<string>("");
    const [calories, setCalories] = useState<TResult | null>(null);

    function handleSelectGender(id: TGenderID) {
        setGender(id);
    }

    function handleSelectActivity(activity: TActivity) {
        setActivity(activity.value);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        handleCalcCalories();
    }

    function handleClearForm(): void {
        setGender(DEFAULT_GENDER);
        setActivity(DEFAULT_ACTIVITY);
        setAge("");
        setHeight("");
        setWeight("");
        setCalories(null);
    }

    function handleCalcCalories() {
        setCalories(calcCalories({
            gender,
            activity,
            age: Number(age),
            height: Number(height),
            weight: Number(weight)
        }
        ));
    }

    const isFormValid =
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
                        onSubmit={handleSubmit}
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
                                <Input
                                    id='age'
                                    label="Возраст"
                                    unit="лет"
                                    value={age}
                                    onChange={setAge}
                                />
                                <Input
                                    id='height'
                                    label="Рост"
                                    unit="см"
                                    value={height}
                                    onChange={setHeight}
                                />
                                <Input
                                    id='weight'
                                    label="Вес"
                                    unit="кг"
                                    value={weight}
                                    onChange={setWeight}
                                />
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
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M13.4143 12.0002L18.7072 6.70725C19.0982 6.31625 19.0982 5.68425 18.7072 5.29325C18.3162 4.90225 17.6842 4.90225 17.2933 5.29325L12.0002 10.5862L6.70725 5.29325C6.31625 4.90225 5.68425 4.90225 5.29325 5.29325C4.90225 5.68425 4.90225 6.31625 5.29325 6.70725L10.5862 12.0002L5.29325 17.2933C4.90225 17.6842 4.90225 18.3162 5.29325 18.7072C5.48825 18.9022 5.74425 19.0002 6.00025 19.0002C6.25625 19.0002 6.51225 18.9022 6.70725 18.7072L12.0002 13.4143L17.2933 18.7072C17.4882 18.9022 17.7443 19.0002 18.0002 19.0002C18.2562 19.0002 18.5122 18.9022 18.7072 18.7072C19.0982 18.3162 19.0982 17.6842 18.7072 17.2933L13.4143 12.0002Z"
                                    />
                                </svg>
                                <span>Очистить поля и расчёт</span>
                            </button>
                        </div>
                    </form>
                    {calories && (
                        <CounterResult calories={calories} />
                    )}
                </article>
            </div>
        </main>
    );
}

export default App;
