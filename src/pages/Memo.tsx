import { Component, createMemo, createSignal } from 'solid-js';

const fibonacci = (num: number): number => {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
};

export const Memo: Component = () => {
  const [count, setCount] = createSignal(10);
  const fib = createMemo(() => {
    console.log('Calculating Fibonacci');
    return fibonacci(count());
  });

  return (
    <div class="p-4">
      <button
        class="bg-blue-600 hover:bg-blue-700 text-gray-200 py-2 px-4 rounded mt-2 mr-2"
        onClick={() => setCount((c) => c + 1)}
      >
        Count: {count()}
      </button>
      <div>
        1. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
      <div>
        2. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
      <div>
        3. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
      <div>
        4. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
      <div>
        5. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
      <div>
        6. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
      <div>
        7. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
      <div>
        8. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
      <div>
        9. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
      <div>
        10. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
    </div>
  );
};
