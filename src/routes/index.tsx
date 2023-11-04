import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Board } from "~/components/core";

export default component$(() => {
  return (
    <>
        <Board />     
    </>
  );
});

export const head: DocumentHead = {
  title: "Excalidraw clone",
  meta: [
    {
      name: "description",
      content: "excalidraw mini clone with qwik",
    },
  ],
};