import "./App.css";
import { Route, Routes } from "react-router-dom";
import SummaryPage from "./pages/SummaryPage";
import DoneTodoPage from "./pages/DoneTodoPage";
import OpenTodoPage from "./pages/OpenTodoPage";
import TodoDetailPage from "./pages/TodoDetailPage";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<SummaryPage />} />
        <Route path="/done" element={<DoneTodoPage />} />
        <Route path="/open" element={<OpenTodoPage />} />
        <Route path="/todo/:todoId" element={<TodoDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
