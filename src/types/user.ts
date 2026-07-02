export type TUser = {
    gender: string,
    age: number,
    height: number,
    weight: number,
    activity: string,
};

export type TGender = {
    id: string,
    value: string,
    label: string,
}

export type TActivity = {
    id: string,
    label: string,
    descr: string,
    value: number,
}

export type TResult = {
    maintenanceCalories: number,
    weightLoss: number,
    weightGain: number
}

export type TActivities = TActivity[];
export type TGenders = TGender[];