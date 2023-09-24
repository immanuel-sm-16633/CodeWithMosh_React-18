import { useState } from "react";
import ExpenseForm from "./components/ExpenseTracker/ExpenseForm";
import ExpenseTracker from "./components/ExpenseTracker/ExpenseTracker";
import "./index.css";
import ExpenseFilter from "./components/ExpenseTracker/ExpenseFilter";
import categories from "./components/ExpenseTracker/categories";

interface Expense {
  description: string;
  amount: number;
  category: string;
}

function App() {
  // const [expand, setExpand] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 5.0, category: "Groceries" },
    { id: 2, description: "Egg", amount: 10.0, category: "Groceries" },
    { id: 3, description: "GroundNuts", amount: 9.99, category: "Groceries" },
    { id: 4, description: "Movies", amount: 29.89, category: "Entertainment" },
  ]);
  const handleFormSubmit = (data: Expense) => {
    // Update expenses using the setter function
  };
  const visibleExpenses = selectedCategory
    ? expenses.filter((item) => item.category === selectedCategory)
    : expenses;
  console.log(visibleExpenses);

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(data) =>
            setExpenses([...expenses, { id: expenses.length + 1, ...data }])
          }
        />
      </div>

      <div>
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseTracker
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((item) => item.id !== id))
        }
      />
    </div>
  );
}

export default App;
