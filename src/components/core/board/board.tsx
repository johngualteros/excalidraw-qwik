import { $, component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from './board.css?inline';

import { useTheme } from "~/hooks/useTheme";

import { DropDown } from "../dropdown-menu";
import { Options } from "../options";

export const Board =  component$(() => {
    useStylesScoped$(styles);
    const { darkBackgroundColor } = useTheme();

    const drawLine = $(() => {
        const canvas: any = document.getElementById('canvas');
        const context = canvas?.getContext('2d');

        context.beginPath();
        context.moveTo(400, 400);
        context.lineTo(400, 400);
        context.strokeStyle = 'white';
        context.lineWidth = 2;
        context.stroke();
        context.closePath();
    });

    drawLine();

    return (
        <main id="board">
            <DropDown backgroundColor={darkBackgroundColor.value} />
            <Options backgroundColor={darkBackgroundColor.value} />
            <canvas id="canvas" width={500} height={400}></canvas>
        </main>
    );
});