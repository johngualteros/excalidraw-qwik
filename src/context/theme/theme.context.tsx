import { createContextId } from "@builder.io/qwik";

export interface ThemeState {
    backgroundColor: string;
    color: string;
    darkBackgroundColor: string;
}

export const ThemeStateContext = createContextId<ThemeState>("theme.state-context");