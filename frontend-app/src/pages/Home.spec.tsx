import "@testing-library/jest-dom";
import { vi } from "vitest";
import { render, screen, userEvent, waitFor } from "../utils/test-utils";
import Home from "./Home";

describe("Home", () => {
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // deprecated
        removeListener: vi.fn(), // deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should show the name of products", async () => {
    render(<Home />);

    await waitFor(() => {
      expect(screen.queryByText(/loading\.\.\./i)).not.toBeInTheDocument();
    });

    expect(screen.getByText(/sample name 1/i)).toBeInTheDocument();
    expect(screen.getByText(/sample name 2/i)).toBeInTheDocument();
    expect(screen.getByText(/sample name 3/i)).toBeInTheDocument();
    expect(screen.getByText(/sample name 4/i)).toBeInTheDocument();
    expect(screen.getByText(/sample name 5/i)).toBeInTheDocument();
  });

  it("should show page 2's item when next page is clicked", async () => {
    render(<Home />);

    await waitFor(() => {
      expect(screen.queryByText(/loading\.\.\./i)).not.toBeInTheDocument();
    });

    await userEvent.click(screen.getByRole("listitem", { name: "Next Page" }));

    expect(screen.getByText(/sample name 6/i)).toBeInTheDocument();
  });

  it("should show selected items in list", async () => {
    render(<Home />);

    await waitFor(() => {
      expect(screen.queryByText(/loading\.\.\./i)).not.toBeInTheDocument();
    });

    await userEvent.click(screen.getAllByRole("checkbox")[0]);

    expect(
      screen.getByRole("link", {
        name: /sample name 1/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /remove/i })).toBeInTheDocument();
  });

  it("should deselect item when remove button is clicked", async () => {
    render(<Home />);

    await waitFor(() => {
      expect(screen.queryByText(/loading\.\.\./i)).not.toBeInTheDocument();
    });

    await userEvent.click(screen.getAllByRole("checkbox")[0]);

    const listLink = screen.getByRole("link", {
      name: /sample name 1/i,
    });

    await userEvent.click(screen.getByRole("button", { name: "Remove" }));

    expect(listLink).not.toBeInTheDocument();
    expect(screen.getByText(/no data/i)).toBeInTheDocument();
  });
});
