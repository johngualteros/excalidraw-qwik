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
        backgroundColor: '#000000',
        color: '#ffffff',
    },
    {
        backgroundColor: '#16000B',
        color: '#ffffff',
    },
    {
        backgroundColor: '#0A1725',
        color: '#ffffff',
    },
    {
        backgroundColor: '#10250A',
        color: '#ffffff',
    }
];

export const useTheme = () => {
    const theme = useContext(ThemeStateContext);

    const changeTheme = $((themeChanged: any) => {
        const { backgroundColor, color } = themeChanged;
        const lightBackground = darkerColor(backgroundColor, 3);
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