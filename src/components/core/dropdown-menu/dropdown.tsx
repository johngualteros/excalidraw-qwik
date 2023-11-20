import { component$, useSignal, useStylesScoped$ } from '@builder.io/qwik';

import { MoMenu, MoSun } from '@qwikest/icons/monoicons'

import styles from './dropdown.css?inline';
import { useTheme } from '~/hooks/useTheme';

interface DropDownProps {
    backgroundColor: string;
}

export const DropDown =  component$(({backgroundColor}: DropDownProps) => {
    useStylesScoped$(styles);
    const isDisplayed = useSignal<boolean>(false);
    const { possibleThemes, changeTheme } = useTheme();
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
            </div>
            {isDisplayed.value && (
                <div class='dropdown' style={{backgroundColor: backgroundColor}}>
                    <div class='item'>
                        <div class="description-item">
                            <MoSun class='icon'/>
                            <span>Select Your Background</span>  
                        </div>
                        <div class='backgrounds'>
                            {
                                possibleThemes.map((pt: any) => (
                                    <div 
                                        key={pt.backgroundColor}
                                        style={{
                                            backgroundColor: pt.backgroundColor
                                        }}
                                        class='background'
                                        onClick$={() => changeTheme(pt)}
                                    />
                                ))
                            }
                        </div>  
                    </div>
                </div>
            )}

        </>

    );
});