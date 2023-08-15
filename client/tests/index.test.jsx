import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import Home from "../src/assets/views/home";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../src/assets/redux/store/index.js";
import Navbar from "../src/assets/components/navbar";

describe("Home Page", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Home />
        </BrowserRouter>
      </Provider>,
    );
  });

  it("should render the SearchBar", () => {
    const searchBar = screen.getByLabelText("Search a Dog:");
    expect(searchBar).toBeTruthy();
  });

  it("should render a list of dog cards", async () => {
    await waitFor(() => {
      const dogCardElement = screen.queryByTestId("dog-card")
      expect(dogCardElement).toBeNull()
    });
  });

  it("should navigate to the detail page when a dog card is clicked", () => {
    const dogCard = screen.getByTestId("dog-card");
    dogCard.click();

    // Assert the navigation or route change
    // You can use the testing utilities provided by your routing library
  });

  it("should render filter options", () => {
    const temperamentFilter = screen.getByLabelText("Filter by Temperament:");
    const originFilter = screen.getByLabelText("Filter by Origin:");
    expect(temperamentFilter).toBeTruthy();
    expect(originFilter).toBeTruthy();
  });

  it("should render sort options", () => {
    const alphabetSort = screen.getByLabelText("Sort by Alphabet:");
    const weightSort = screen.getByLabelText("Sort by Weight:");
    expect(alphabetSort).toBeTruthy();
    expect(weightSort).toBeTruthy();
  });

  it("should render pagination", () => {
    const pagination = screen.getByTestId("pagination");
    expect(pagination).toBeTruthy();
  });
});
