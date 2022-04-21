import { Component, createResource, createSignal } from 'solid-js';

const fetchUser = async (id?: string) => {
  if (!id) return;
  return await (await fetch(`https://swapi.dev/api/people/${id}/`)).json();
};

export const ResourceComponent: Component = () => {
  const [userId, setUserId] = createSignal<string>('');
  const [user] = createResource(userId, fetchUser);

  return (
    <div class="p-4">
      <input
        value={userId()}
        onChange={(e) => setUserId(e.currentTarget.value)}
        class="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-zinc-800 mb-2"
        placeholder="useId"
      />
      <span>{user.loading && 'Loadding...'}</span>
      <div>
        <pre>{JSON.stringify(user(), null, 2)}</pre>
      </div>
    </div>
  );
};
