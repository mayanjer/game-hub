interface Props {
  onSelectorChange: (value: string) => void;
}

export default function SortSelector({ onSelectorChange }: Props) {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "released", label: "Reease Date" },
    { value: "name", label: "Name" },
    { value: "date", label: "Date Added" },
    { value: "created", label: "Created" },
    { value: "updated", label: "Updated" },
    { value: "metacritic", label: "Popularity" },
  ];

  return (
    <select
      onChange={(e) => onSelectorChange(e.target.value)}
      className="mb-1 w-70 rounded-lg border"
    >
      {sortOrders.map((sortOrder) => (
        <option value={sortOrder.value}>{sortOrder.label}</option>
      ))}
    </select>
  );
}
