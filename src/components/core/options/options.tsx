import { $, component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from './options.css?inline';
import { LuCaseSensitive, LuCircle, LuDiamond, LuHand, LuImage, LuMinus, LuMousePointer2, LuMoveRight, LuPencil, LuSquare } from '@qwikest/icons/lucide';

interface OptionsProps {
    backgroundColor: string;
}

enum OptionsKey {
    HAND = '0',
    POINTER = '1',
    SQUARE = '2',
    DIAMOND = '3',
    CIRCLE = '4',
    MOVE = '5',
    MINUS = '6',
    CASE_SENSITIVE = '7',
    PENCIL = '8',
    IMAGE = '9'
}

export const Options = component$(({backgroundColor}: OptionsProps) => {
    useStylesScoped$(styles);

    const handleKeyDown = $((e: string) => {
        const cursor = document.getElementById('board');
        if (e === OptionsKey.HAND) {
            if(cursor?.classList.contains('normal')) {
                cursor.classList.remove('normal');
            }
            cursor?.classList.add('grab');
        } else if (e === OptionsKey.POINTER) {
            if(cursor?.classList.contains('grab')) {
                cursor.classList.remove('grab');
            }
            cursor?.classList.add('normal');
        } else if (e === OptionsKey.SQUARE) {
            // Handle square key press
        } else if (e === OptionsKey.DIAMOND) {
            // Handle diamond key press
        } else if (e === OptionsKey.CIRCLE) {
            // Handle circle key press
        } else if (e === OptionsKey.MOVE) {
            // Handle move key press
        } else if (e === OptionsKey.MINUS) {
            // Handle minus key press
        } else if (e === OptionsKey.CASE_SENSITIVE) {
            // Handle case sensitive key press
        } else if (e === OptionsKey.PENCIL) {
            // Handle pencil key press
        } else if (e === OptionsKey.IMAGE) {
            // Handle image key press
        }
    });

    return (
        <div 
            style={{
                backgroundColor: backgroundColor
            }}
            class="container"
            window:onKeyDown$={(e) => handleKeyDown(e.key)}
        >
            <div class="container_option">
                <LuHand class="icon"/>
                <span class="badge">0</span>
            </div>
            <div class="container_option">
                <LuMousePointer2 class="icon"/>
                <span class="badge">1</span>
            </div>
            <div class="container_option">
                <LuSquare class="icon"/>
                <span class="badge">2</span>
            </div>
            <div class="container_option">
                <LuDiamond class="icon"/>
                <span class="badge">3</span>
            </div>
            <div class="container_option">
                <LuCircle class="icon"/>
                <span class="badge">4</span>
            </div>
            <div class="container_option">
                <LuMoveRight class="icon"/>
                <span class="badge">5</span>
            </div>
            <div class="container_option">
                <LuMinus class="icon"/>
                <span class="badge">6</span>
            </div>
            <div class="container_option">
                <LuCaseSensitive class="icon"/>
                <span class="badge">7</span>
            </div>
            <div class="container_option">
                <LuPencil class="icon"/>
                <span class="badge">8</span>
            </div>
            <div class="container_option">
                <LuImage class="icon"/>
                <span class="badge">9</span>
            </div>
        </div>
    );
});