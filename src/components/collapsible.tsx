import { createSignal } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';

export const Collapsible = (): JSX.Element => {
  const [isExpanded, setIsExpanded] = createSignal(false);

  const toggle = () => setIsExpanded(!isExpanded());

  return (
    <div class="w-64 overflow-hidden">
      <button
        class="w-full p-4 hover:bg-teal-50 flex justify-between items-center"
        onClick={toggle}
      >
        <span>Hello</span>
      </button>
      <div style={{ height: isExpanded() ? 'auto' : '0px' }}>
        Prepare for secrets
      </div>
    </div>
  );
};
