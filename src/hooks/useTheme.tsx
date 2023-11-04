import { $, useComputed$, useContext } from '@builder.io/qwik';

import { type ThemeState, ThemeStateContext } from '~/context';

import { shadeColor } from '~/helpers/darkerColor';

export const useTheme = () => {
    const theme = useContext(ThemeStateContext);

    const changeTheme = $((themeChanged: Omit<ThemeState, 'darkBackgroundColor'>) => {
        const { backgroundColor, color } = themeChanged;
        const lightBackground = shadeColor(backgroundColor, 20);
        theme.darkBackgroundColor = lightBackground;
        theme.backgroundColor = backgroundColor;
        theme.color = color;
    });

    return {
        backgroundColor    : useComputed$(() => theme.backgroundColor),
        color              : useComputed$(() => theme.color),
        darkBackgroundColor: useComputed$(() => theme.darkBackgroundColor),
        changeTheme        : $(() => changeTheme(theme)),
    }
}