import { render, screen, fireEvent } from "@testing-library/react";
import WorkflowList from "../WorkFlowList";
import { fetchWorkflows } from "../../services/workflowService";
import { jest, test, expect } from "@jest/globals";

jest.mock("../../services/workflowService");

test("renders workflow list and filters correctly", async () => {
  fetchWorkflows.mockResolvedValue([
    { id: "1", name: "Workflow A", status: "Active" },
    { id: "2", name: "Workflow B", status: "Inactive" },
  ]);

  render(<WorkflowList />);

  expect(await screen.findByText("Workflow A")).toBeInTheDocument();
  expect(screen.getByText("Workflow B")).toBeInTheDocument();

  fireEvent.change(screen.getByPlaceholderText("Search workflows..."), {
    target: { value: "A" },
  });

  expect(screen.queryByText("Workflow B")).not.toBeInTheDocument();
});
