import type { TActivities, TGenders } from "./types/user";

export const ACTIVITY: TActivities = [
    {
        id: 'min',
        label: 'Минимальная',
        descr: 'Сидячая работа и нет физических нагрузок',
        value: 1.2,
    },
    {
        id: 'low',
        label: 'Низкая',
        descr: 'Редкие, нерегулярные тренировки, активность в быту',
        value: 1.375,
    },
    {
        id: 'medium',
        label: 'Средняя',
        descr: 'Тренировки 3-5 раз в неделю',
        value: 1.55,
    },
    {
        id: 'high',
        label: 'Высокая',
        descr: 'Тренировки 6-7 раз в неделю',
        value: 1.725,
    },
    {
        id: 'max',
        label: 'Очень высокая',
        descr: 'Больше 6 тренировок в неделю и физическая работа',
        value: 1.9,
    },
];

export const GENDERS: TGenders = [
    {
        id: 'gender-male',
        value: 'male',
        label: 'Мужчина',
    },
    {
        id: 'gender-female',
        value: 'female',
        label: 'Женщина',
    },
]

export const DEFAULT_GENDER = 'gender-male';
export const DEFAULT_ACTIVITY = 1.2;
export const CALORIE_DEFICIT =  0.85;
export const CALORIE_PROFICIT = 1.15;