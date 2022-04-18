import { Component, createSignal, onMount, For } from 'solid-js';

export const Mount: Component = () => {
  const [photos, setPhotos] = createSignal<
    Array<{ thumbnailUrl: string; title: string }>
  >([]);

  onMount(async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_limit=20`
    );
    setPhotos(await res.json());
  });

  return (
    <div class="p-4">
      <h1>Photo album</h1>

      <div>
        <For each={photos()} fallback={<p>Loading...</p>}>
          {(photo) => (
            <figure>
              <img src={photo.thumbnailUrl} alt={photo.title} />
              <figcaption>{photo.title}</figcaption>
            </figure>
          )}
        </For>
      </div>
    </div>
  );
};
