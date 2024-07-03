// ExpensesByCategory
export const ExpensesByCategory = {
  salaries: 0,
  supplies: 0,
  services: 0,
};

// Month
export const Month = {
  id: "",
  month: "",
  revenue: 0,
  expenses: 0,
  nonOperationalExpenses: 0,
  operationalExpenses: 0,
};

// Day
export const Day = {
  id: "",
  date: "",
  revenue: 0,
  expenses: 0,
};

// GetKpisResponse
export const GetKpisResponse = {
  id: "",
  _id: "",
  __v: 0,
  totalProfit: 0,
  totalRevenue: 0,
  totalExpenses: 0,
  expensesByCategory: ExpensesByCategory,
  monthlyData: [],
  dailyData: [],
  createdAt: "",
  updatedAt: "",
};

// GetProductsResponse
export const GetProductsResponse = {
  id: "",
  _id: "",
  __v: 0,
  price: 0,
  expense: 0,
  transactions: [],
  createdAt: "",
  updatedAt: "",
};

// GetTransactionsResponse
export const GetTransactionsResponse = {
  id: "",
  _id: "",
  __v: 0,
  buyer: "",
  amount: 0,
  productIds: [],
  createdAt: "",
  updatedAt: "",
};
