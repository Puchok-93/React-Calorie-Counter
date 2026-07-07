

type TInputProps = {
    id: string;
    label: string;
    unit: string;
    value: string;
    onChange: (value: string) => void;
}

function Input({id, label, unit, value, onChange}: TInputProps) {
    return (
        <div className="input">
            <div className="input__heading">
                <label className="heading" htmlFor="age">{label}</label>
                <span className="input__heading-unit">{unit}</span>
            </div>
            <div className="input__wrapper">
                <input
                    type="text"
                    id={id}
                    name="age"
                    value={value}
                    placeholder={"0"}
                    onChange={(e) =>
                        onChange(
                            e.target.value
                                .replace(/\D/g, "")
                                .slice(0, 3)
                        )
                    }
                    maxLength={3}
                    inputMode="numeric"
                    required
                />
            </div>
        </div>
    );
}

export default  Input;