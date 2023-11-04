import { component$, useStylesScoped$ } from '@builder.io/qwik';

import { MoMenu } from '@qwikest/icons/monoicons'

import styles from './dropdown.css?inline';

interface DropDownProps {
    backgroundColor: string;
}

export const DropDown =  component$(({backgroundColor}: DropDownProps) => {
    useStylesScoped$(styles);
    return (
        <div
            style={{
                backgroundColor: backgroundColor
            }}
            class='container'
        >
            <MoMenu class='icon'/>
        </div>
    );
});