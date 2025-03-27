import { render } from "@testing-library/react";
import WorkflowEditor from "../WorkflowEditor";
import { test, expect } from "@jest/globals";

test("renders workflow editor", () => {
  const { getByText } = render(<WorkflowEditor />);
  expect(getByText("Workflow Editor")).toBeInTheDocument();
});
