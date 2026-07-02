import type { TGenders, TGender } from "../../types/user";

type TPropsUserGenders = {
    genders: TGenders;
    gender: string | null;
    onSelect: (gender: TGender) => void;
}

function UserGender({genders, gender, onSelect}: TPropsUserGenders) {
    return (
        <div className="form__item">
            <h2 className="heading">Пол</h2>
            <ul className="switcher">
                {
                    genders.map((item) => {
                        const {id, value, label} = item;

                        return (
                            <li key={id} className="switcher__item">
                                <input 
                                    id={id} 
                                    name="gender" 
                                    value={value} 
                                    onChange={() => onSelect(item)}
                                    checked={gender === id}
                                    type="radio" required 
                                />
                                <label htmlFor={id}>{label}</label>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default UserGender;