import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../Login";
import { signInWithGoogle } from "../../services/authService";
import { jest, test, expect } from "@jest/globals";

jest.mock("../../services/authService");

test("renders login page", () => {
  render(<Login />);
  expect(screen.getByText("Sign in with Google")).toBeInTheDocument();
});

test("calls Google Sign-in on button click", () => {
  signInWithGoogle.mockResolvedValue({ user: { email: "test@example.com" } });

  render(<Login />);
  fireEvent.click(screen.getByText("Sign in with Google"));

  expect(signInWithGoogle).toHaveBeenCalled();
});
