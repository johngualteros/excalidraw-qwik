import { component$, useSignal, useStylesScoped$ } from '@builder.io/qwik';

import { MoMenu, MoSun } from '@qwikest/icons/monoicons'

import styles from './dropdown.css?inline';

interface DropDownProps {
    backgroundColor: string;
}

export const DropDown =  component$(({backgroundColor}: DropDownProps) => {
    useStylesScoped$(styles);
    const isDisplayed = useSignal<boolean>(true);
    return (
        <>
            <div
                onClick$={() => isDisplayed.value = !isDisplayed.value}
                style={{
                    backgroundColor: backgroundColor
                }}
                class='container'
            >
                <MoMenu class='icon'/>
                {isDisplayed.value && (
                    <div class='dropdown'>
                        <div class='item'>
                            <MoSun class='icon'/>
                            <span>Change the background</span>    
                        </div>
                    </div>
                )}
            </div>

        </>

    );
});