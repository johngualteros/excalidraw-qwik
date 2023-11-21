import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from './options.css?inline';
import { LuCaseSensitive, LuCircle, LuDiamond, LuHand, LuImage, LuMinus, LuMousePointer2, LuMoveRight, LuPencil, LuSquare } from '@qwikest/icons/lucide';

interface OptionsProps {
    backgroundColor: string;
}

export const Options = component$(({backgroundColor}: OptionsProps) => {
    useStylesScoped$(styles);
    return (
        <div 
            style={{
                backgroundColor: backgroundColor
            }}
            class="container"
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