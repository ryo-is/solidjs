import { Component, createSignal, For } from 'solid-js';
import { createStore, produce } from 'solid-js/store';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export const Store: Component = () => {
  let todoId = 0;
  const [store, setStore] = createStore<{ todos: Todo[] }>({
    todos: [{ id: 9999, text: 'hoge', completed: false }],
  });
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
          class="input input-bordered mr-4 w-96"
        />
        <button
          onClick={() => {
            addTodo();
          }}
          class="btn btn-primary mt-2 normal-case"
        >
          Add Todo
        </button>
      </div>
      <div class="form-control mt-2">
        <For each={store.todos}>
          {(todo) => {
            const { id, text } = todo;
            console.log(`Creating ${text}`);
            return (
              <div>
                <label class="label cursor-pointer inline-flex">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onchange={[toggleTodo, id]}
                    class="checkbox checkbox-primary"
                  />
                  <span
                    class="ml-2"
                    style={{
                      'text-decoration': todo.completed
                        ? 'line-through'
                        : 'none',
                    }}
                  >
                    {text}
                  </span>
                </label>
              </div>
            );
          }}
        </For>
      </div>
    </div>
  );
};
