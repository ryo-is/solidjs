import { Component, createSignal, For } from 'solid-js';
import { createStore, produce } from 'solid-js/store';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export const Store: Component = () => {
  let todoId = 0;
  const [store, setStore] = createStore<{ todos: Todo[] }>({ todos: [] });
  const [text, setText] = createSignal('');

  const addTodo = () => {
    if (!text()) return;
    setStore(
      'todos',
      produce((todos) => {
        todos.push({ id: ++todoId, text: text(), completed: false });
      })
    );
  };
  const toggleTodo = (id: number) => {
    setStore(
      'todos',
      (todo) => todo.id === id,
      produce((todo) => (todo.completed = !todo.completed))
    );
  };

  return (
    <div class="p-4">
      <div>
        <input
          value={text()}
          onChange={(e) => setText(e.currentTarget.value)}
          class="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-zinc-800 mb-2"
        />
        <button
          onClick={() => {
            addTodo();
          }}
          class="bg-blue-600 hover:bg-blue-700 text-gray-200 py-2 px-4 rounded mt-2"
        >
          Add Todo
        </button>
      </div>
      <For each={store.todos}>
        {(todo) => {
          const { id, text } = todo;
          console.log(`Creating ${text}`);
          return (
            <div class="my-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onchange={[toggleTodo, id]}
                class="mr-2 leading-tight"
              />
              <label
                style={{
                  'text-decoration': todo.completed ? 'line-through' : 'none',
                }}
              >
                {text}
              </label>
            </div>
          );
        }}
      </For>
    </div>
  );
};
