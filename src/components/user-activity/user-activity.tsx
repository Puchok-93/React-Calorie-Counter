import type { TActivities ,TActivity } from "../../types/user";


type TPropsActivity = {
    activities: TActivities;
    activity: number;
    onSelect: (active: TActivity) => void;
};

function UserActivity({activities, activity, onSelect}:TPropsActivity) {
    return(
        <fieldset className="form__item">
            <legend className="heading">Физическая активность</legend>
            <ul className="radios-group">
                {
                    activities.map((item) => {
                        const {id, label, descr, value} = item;
                        return(
                            <li key={id} className="radio">
                                <div className="radio__wrapper">
                                    <input 
                                        id={id}
                                        name="activity" 
                                        value={value} 
                                        type="radio" 
                                        required
                                        checked={activity === value}
                                        onChange={() => onSelect(item)}
                                    />
                                    <label htmlFor={id}>
                                        {label}
                                    </label>
                                </div>
                                <p className="radio__description">
                                    {descr}
                                </p>
                            </li>
                        );
                    })
                }
            </ul>
        </fieldset>
    );
}

export default UserActivity;