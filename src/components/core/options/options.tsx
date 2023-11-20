import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from './options.css?inline';

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
            <h1>Options</h1>
        </div>
    );
});