import {
    CALORIE_DEFICIT,
    CALORIE_PROFICIT
} from "../const";
import type { TResult } from "../types/user";

type CalculateCaloriesParams = {
    gender: string;
    activity: number;
    age: number;
    height: number;
    weight: number;
};

function calcCalories({
    gender,
    activity,
    age,
    height,
    weight,
}: CalculateCaloriesParams): TResult {
    const currentWeight = Number(weight);
    const currentHeight = Number(height);
    const currentAge = Number(age);

    const bmr =
        gender === "gender-male"
            ? 10 * currentWeight + 6.25 * currentHeight - 5 * currentAge + 5
            : 10 * currentWeight + 6.25 * currentHeight - 5 * currentAge - 161;

    const maintenanceCalories = bmr * activity;
    const weightLoss = maintenanceCalories * CALORIE_DEFICIT;
    const weightGain = maintenanceCalories * CALORIE_PROFICIT;

    return {
        maintenanceCalories: Math.round(maintenanceCalories),
        weightLoss:Math.round(weightLoss),
        weightGain: Math.round(weightGain),
    };
}

    export default calcCalories;