import { Slot, component$, useContextProvider, useStore, useVisibleTask$ } from "@builder.io/qwik";

import { ThemeStateContext, type ThemeState } from "./theme.context";
import { darkerColor } from "~/helpers/darkerColor";

export const ThemeProvider = component$(() => {
    const theme = useStore<ThemeState>({
        backgroundColor: '#333333',
        color: '#fff',
        darkBackgroundColor: 'transparent'
    });

    useVisibleTask$(() => {
        // theme should be and object
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        const { backgroundColor = '#333333', color = '#ffffff' } = JSON.parse(localStorage.getItem('theme')!) as ThemeState ?? {};
        const ligthBackground = darkerColor(backgroundColor, 10);
        theme.backgroundColor = backgroundColor;
        theme.color = color;
        theme.darkBackgroundColor = ligthBackground;
    })

    useVisibleTask$(({ track }) => {
        track(() => [theme.backgroundColor, theme.color, theme.darkBackgroundColor]);
        localStorage.setItem('theme', JSON.stringify(theme));
    })

    useContextProvider(ThemeStateContext, theme);

    return <Slot />;
});