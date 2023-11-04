import { component$ } from "@builder.io/qwik";
import { DropDown } from "../dropdown-menu";
import { useTheme } from "~/hooks/useTheme";

export const Board =  component$(() => {
    const { darkBackgroundColor } = useTheme();

    return (
        <DropDown backgroundColor={darkBackgroundColor.value} />
    );
});