import { $, useComputed$, useContext } from '@builder.io/qwik';

import { ThemeStateContext } from '~/context';

import { darkerColor } from '~/helpers/darkerColor';

const possibleColors: any = [
    {
        backgroundColor: '#ffffff',
        color: '#121212',
    },
    {
        backgroundColor: '#131313',
        color: '#ffffff',
    },
    {
        backgroundColor: '#00302E',
        color: '#ffffff',
    },
    {
        backgroundColor: '#000A30',
        color: '#ffffff',
    },
    {
        backgroundColor: '#300000',
        color: '#ffffff',
    },
    {
        backgroundColor: '#003028',
        color: '#ffffff',
    }
];

export const useTheme = () => {
    const theme = useContext(ThemeStateContext);

    const changeTheme = $((themeChanged: any) => {
        const { backgroundColor, color } = themeChanged;
        const lightBackground = darkerColor(backgroundColor, 10);
        theme.darkBackgroundColor = lightBackground;
        theme.backgroundColor = backgroundColor;
        theme.color = color;
    });

    return {
        backgroundColor    : useComputed$(() => theme.backgroundColor),
        color              : useComputed$(() => theme.color),
        darkBackgroundColor: useComputed$(() => theme.darkBackgroundColor),
        possibleThemes     : possibleColors,
        changeTheme        : changeTheme,
    }
}