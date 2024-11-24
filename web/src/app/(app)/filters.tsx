import { Category } from '@/types';
import { X } from '@phosphor-icons/react/dist/ssr';

const tags: { label: string; value: Category }[] = [
  { label: 'Novo', value: Category.NEW },
  { label: 'Animado', value: Category.ANIMATED },
  { label: 'Educacional', value: Category.EDUCATIONAL },
  { label: 'Música', value: Category.MUSIC },
  { label: 'Clássico', value: Category.CLASSIC },
  { label: 'Moderno', value: Category.MODERN },
  { label: 'Religioso', value: Category.RELIGIOUS },
  { label: 'Outro', value: Category.OTHER },
];

export function Filters({
  selectedCategories,
  onChange,
}: {
  selectedCategories: Category[];
  onChange: (categories: Category[]) => void;
}) {
  function toggleCategory(category: Category) {
    if (selectedCategories.includes(category)) {
      onChange(selectedCategories.filter((c) => c !== category));
    } else {
      onChange([...selectedCategories, category]);
    }
  }

  return (
    <div className="ml-auto w-fit text-right">
      <h4 className="mb-4 text-3xl">Filtrar por categoria</h4>
      <ul className="flex flex-row flex-wrap gap-3.5 font-medium">
        {selectedCategories.length > 0 && (
          <li className="select-none">
            <button
              type="button"
              onClick={() => onChange([])}
              className="flex w-full cursor-pointer items-center gap-2 rounded-full border border-red-900/15 bg-neutral-50 px-4 py-1.5 text-base text-red-900 opacity-70 duration-100"
            >
              Limpar <X className="size-4" />
            </button>
          </li>
        )}
        {tags.map(({ label, value }) => (
          <FilterItem
            key={value}
            label={label}
            id={value}
            checked={selectedCategories.includes(value)}
            onToggle={() => toggleCategory(value)}
          />
        ))}
      </ul>
    </div>
  );
}

function FilterItem({
  label,
  id,
  checked,
  onToggle,
}: {
  label: string;
  id: string;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <li className="select-none">
      <input
        id={`filter-item-${id}`}
        name={`filter-item-${id}`}
        type="checkbox"
        hidden
        checked={checked}
        onChange={onToggle}
        className="peer rounded border-neutral-200 disabled:opacity-50"
      />
      <label
        htmlFor={`filter-item-${id}`}
        className="block w-full cursor-pointer rounded-full border border-blue-900/15 bg-neutral-50 px-4 py-1.5 text-base text-blue-900 opacity-70 duration-100 peer-checked:border-neutral-300/40 peer-checked:bg-blue-500/50 peer-checked:text-neutral-50 peer-checked:opacity-100 peer-checked:shadow-sm"
      >
        {label}
      </label>
    </li>
  );
}
