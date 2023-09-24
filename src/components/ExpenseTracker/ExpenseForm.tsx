import "bootstrap/dist/css/bootstrap.min.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import categories from "./categories";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 character" })
    .max(50),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(0.01)
    .max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

type Expense = z.infer<typeof schema>;
interface Props {
  onSubmit: (data: Expense) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Expense>({ resolver: zodResolver(schema) });

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <div className="mb-3">
          <label htmlFor="inputdescription" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="inputdescription"
            {...register("description")}
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="InputAmount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            className="form-control"
            id="InputAmount"
            {...register("amount", {
              valueAsNumber: true,
            })}
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="inputGroupSelect03" className="form-label">
            Category
          </label>
          <select
            className="form-select"
            id="inputGroupSelect03"
            aria-label="Example select with button addon"
            {...register("category")}
          >
            <option value=""></option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {/* {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )} */}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default ExpenseForm;
