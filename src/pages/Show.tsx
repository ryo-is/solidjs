import { Component, createSignal, Show } from 'solid-js';

export const ShowComponent: Component = () => {
  const [loggedIn, setLoggedIn] = createSignal(false);

  return (
    <div class="p-4">
      <Show
        when={loggedIn()}
        fallback={() => (
          <button
            class="bg-blue-600 hover:bg-blue-700 text-gray-200 py-2 px-4 rounded mt-2 mr-2"
            onClick={() => setLoggedIn(true)}
          >
            Log in
          </button>
        )}
      >
        <button
          class="bg-red-600 hover:bg-red-700 text-gray-200 py-2 px-4 rounded mt-2 mr-2"
          onClick={() => setLoggedIn(false)}
        >
          Log out
        </button>
      </Show>
    </div>
  );
};
