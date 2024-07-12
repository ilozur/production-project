import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // TODO: Найти решение
    setTimeout(() => resolve(import('./MainPage')), 1500);
}));
