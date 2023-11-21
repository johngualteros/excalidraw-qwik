import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from './board.css?inline';

import { useTheme } from "~/hooks/useTheme";

import { DropDown } from "../dropdown-menu";
import { Options } from "../options";

export const Board =  component$(() => {
    useStylesScoped$(styles);
    const { darkBackgroundColor } = useTheme();

    return (
        <main id="board">
            <DropDown backgroundColor={darkBackgroundColor.value} />
            <Options backgroundColor={darkBackgroundColor.value} />
        </main>
    );
});