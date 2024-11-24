const tags = [
  'Novo',
  'Animado',
  'Educacional',
  'Música',
  'Clássico',
  'Moderno',
];

export function Filters() {
  return (
    <div className="mb-8 ml-auto w-fit text-right">
      <h4 className="mb-4 text-3xl">Filtrar por categoria</h4>
      <ul className="flex flex-row flex-wrap gap-3.5 font-medium text-neutral-800">
        {tags.map((tag, i) => (
          <FilterItem label={tag} key={i} id={`${i}`} />
        ))}
      </ul>
    </div>
  );
}

function FilterItem({ label, id }: { label: string; id: string }) {
  return (
    <li className="select-none">
      <input
        id={`filter-item-${id}`}
        name={`filter-item-${id}`}
        type="checkbox"
        hidden
        className="peer rounded border-neutral-200 disabled:opacity-50"
      />
      <label
        htmlFor={`filter-item-${id}`}
        className="block w-full cursor-pointer rounded-full border border-neutral-300 bg-neutral-50 px-4 py-1.5 text-base text-neutral-800 opacity-70 duration-100 peer-checked:border-neutral-400 peer-checked:opacity-100 peer-checked:shadow-sm"
      >
        {label}
      </label>
    </li>
  );
}
