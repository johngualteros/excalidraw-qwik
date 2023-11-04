import { Slot, component$, useContextProvider, useStore, useVisibleTask$ } from "@builder.io/qwik";

import { ThemeStateContext, type ThemeState } from "./theme.context";
import { shadeColor } from "~/helpers/darkerColor";

export const ThemeProvider = component$(() => {
    const theme = useStore<ThemeState>({
        backgroundColor: '#000',
        color: '#fff',
        darkBackgroundColor: 'transparent'
    });

    useVisibleTask$(() => {
        // theme should be and object
        if(localStorage.getItem('theme')) {
            const { backgroundColor = '#010101', color = '#ffffff' } = JSON.parse(localStorage.getItem('theme')!) as ThemeState;
            const ligthBackground = shadeColor(backgroundColor, 20);
            theme.backgroundColor = backgroundColor;
            theme.color = color;
            theme.darkBackgroundColor = ligthBackground;
        }
    })

    useVisibleTask$(({ track }) => {
        track(() => [theme.backgroundColor, theme.color, theme.darkBackgroundColor]);
        localStorage.setItem('theme', JSON.stringify(theme));
    })

    useContextProvider(ThemeStateContext, theme);

    return <Slot />;
});