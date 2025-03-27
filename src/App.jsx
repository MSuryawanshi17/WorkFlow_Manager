import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import Login from "./components/Login";
import WorkflowList from "./components/WorkFlowList";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/workflows" element={<WorkflowList />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
