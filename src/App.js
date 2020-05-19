import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import AddTransation from "./components/AddTransaction";
import IncomeList from "./components/IncomeList";
import ExpenseList from "./components/ExpenseList";
import { GlobalContextProvider } from "./contest/GlobalState";

import "./App.css";

const App = () => {
  return (
    <GlobalContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Balance />
          <AddTransation />
          <IncomeList />
          <ExpenseList />
        </div>
      </div>
    </GlobalContextProvider>
  );
};

export default App;
