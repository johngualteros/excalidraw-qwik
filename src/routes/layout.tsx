import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import { useTheme } from '~/hooks/useTheme';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {

  const { backgroundColor, color } = useTheme();

  return (
    <main
      style={{
        backgroundColor: backgroundColor.value,
        color: color.value,
        minHeight: '100vh',
      }}
    >
      <Slot />
    </main>
  );
});