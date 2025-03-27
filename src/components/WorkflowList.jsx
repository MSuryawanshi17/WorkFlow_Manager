import { useState, useEffect } from "react";
import { fetchWorkflows, addWorkflow } from "../services/workflowService";
import { Link } from "react-router-dom";

const WorkflowList = () => {
  const [workflows, setWorkflows] = useState([]);
  const [search, setSearch] = useState("");
  const [newWorkflow, setNewWorkflow] = useState("");

  useEffect(() => {
    const loadWorkflows = async () => {
      const data = await fetchWorkflows();
      setWorkflows(data);
    };
    loadWorkflows();
  }, []);

  const handleAddWorkflow = async () => {
    if (newWorkflow.trim() !== "") {
      await addWorkflow(newWorkflow, "Active");
      setNewWorkflow("");
      const updatedWorkflows = await fetchWorkflows();
      setWorkflows(updatedWorkflows);
    }
  };

  const filteredWorkflows = workflows.filter((workflow) =>
    workflow.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Workflows</h2>

      <input
        type="text"
        placeholder="Search workflows..."
        className="mt-2 p-2 border rounded w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="mt-4 flex">
        <input
          type="text"
          placeholder="New workflow name"
          className="p-2 border rounded flex-grow"
          value={newWorkflow}
          onChange={(e) => setNewWorkflow(e.target.value)}
        />
        <button
          className="bg-green-500 text-white p-2 rounded ml-2"
          onClick={handleAddWorkflow}
        >
          Add Workflow
        </button>
      </div>

      <ul className="mt-4">
        {filteredWorkflows.map((workflow) => (
          <li
            key={workflow.id}
            className="p-4 border rounded mb-2 flex justify-between"
          >
            <span>{workflow.name}</span>
            <span
              className={`px-2 py-1 rounded text-white ${
                workflow.status === "Active" ? "bg-green-500" : "bg-gray-500"
              }`}
            >
              {workflow.status}
            </span>
          </li>
        ))}
      </ul>

      <Link to="/editor">
        <button className="bg-blue-500 text-white p-2 rounded mt-4">
          Open Workflow Editor
        </button>
      </Link>
    </div>
  );
};

export default WorkflowList;
