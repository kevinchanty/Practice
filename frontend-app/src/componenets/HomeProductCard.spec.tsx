import "@testing-library/jest-dom";
import { vi } from "vitest";
import { render, screen, userEvent } from "../utils/test-utils";
import HomeProductcatd from "./HomeProductCard";

describe("HomeProductCard", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should show the name", () => {
    const { container } = render(
      <HomeProductcatd
        id={1234}
        checked={true}
        code="sample_code"
        name="sample name"
        imageUrl="imageurl"
        price="$8888"
        handleCheckBoxOnChange={() => {}}
      />
    );

    expect(screen.getByText(/sample name/i)).toBeInTheDocument();
  });

  it("should have select checkbox", () => {
    const { container } = render(
      <HomeProductcatd
        id={1234}
        checked={true}
        code="sample_code"
        name="sample name"
        imageUrl="imageurl"
        price="$8888"
        handleCheckBoxOnChange={() => {}}
      />
    );

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("should call handleCheckBoxOnChange when select checkbox is clicked", async () => {
    const onClickMock = vi.fn();

    const { container } = render(
      <HomeProductcatd
        id={1234}
        checked={true}
        code="sample_code"
        name="sample name"
        imageUrl="imageurl"
        price="$8888"
        handleCheckBoxOnChange={onClickMock}
      />
    );

    await userEvent.click(screen.getByRole("checkbox"));
    expect(onClickMock).toBeCalled();
  });

  it("should show details when detail button is clicked", async () => {
    const { container } = render(
      <HomeProductcatd
        id={1234}
        checked={true}
        code="sample_code"
        name="sample nane"
        imageUrl="imageurl"
        price="$8888"
        handleCheckBoxOnChange={() => {}}
      />
    );

    const detailBtn = container.querySelector(
      "ul > li:nth-child(2) > span > span > svg"
    );
    expect(detailBtn).toBeTruthy();

    await userEvent.click(detailBtn!);

    expect(screen.getByText(/\$8888/i)).toBeInTheDocument();
  });

  it("should show the product detail link", () => {
    const { container } = render(
      <HomeProductcatd
        id={1234}
        checked={true}
        code="sample_code"
        name="sample name"
        imageUrl="imageurl"
        price="$8888"
        handleCheckBoxOnChange={() => {}}
      />
    );

    expect(screen.getByRole("link", { name: "bars" })).toHaveAttribute(
      "href",
      "/products/1234"
    );
  });
});
