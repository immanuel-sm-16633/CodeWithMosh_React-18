import categories from "./categories";

interface Props {
  onSelectCategory: (category: string) => void;
}
const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div className="mb-3">
      <label htmlFor="inputGroupSelect03" className="form-label"></label>
      <select
        className="form-select"
        id="inputGroupSelect03"
        aria-label="Example select with button addon"
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="">All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <br />
    </div>
  );
};

export default ExpenseFilter;
