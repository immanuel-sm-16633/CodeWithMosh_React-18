import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../Button/Button";
import { useState } from "react";

interface Props {
  expenses: {
    id: number;
    description: string;
    amount: number;
    category: string;
  }[];
  onDelete: (id: number) => void;
}

const ExpenseTracker = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) {
    return null;
  }
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  // function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
  //   const value = event.target.value;
  //   value === "All categories"
  //     ? setExpenses(ExpenseList)
  //     : setExpenses(
  //         ExpenseList.filter((item) => item.category === event.target.value)
  //       );
  // }

  return (
    <div className="mb-3">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{formatter.format(expense.amount)}</td>
              <td>{expense.category}</td>
              <td>
                <Button
                  key={expense.description}
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(expense.id)}
                >
                  Delete
                </Button>
                {/* <button
                    key={expense.description}
                    onClick={() => handleDelete(expense.description)}
                  >
                    Delete
                  </button> */}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              {formatter.format(
                expenses.reduce(
                  (accumulator, currentValue) =>
                    accumulator + currentValue.amount,
                  0
                )
              )}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseTracker;
