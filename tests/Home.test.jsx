// libs
import { render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, vi } from "vitest";
import { MemoryRouter, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";

// components
import { HomeRoute, ShopRoute, GamePageRoute } from "../src/utils/routes";

// utils
import assertShopItems from "../src/utils/assertShopItems";
import createFetchResponse from "../src/utils/createFetchResponse";
import setFakeShopData from "../src/utils/setFakeShopData";
import setFakeGamePageData from "../src/utils/setFakeGamePageData";
import setFakeImageData from "../src/utils/setFakeImageData";

describe("Home", () => {
  beforeEach(() => {
    globalThis.user = userEvent.setup();
    globalThis.fetch = vi.fn();
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  describe("Header", () => {
    it("logo brings the user back home when clicked", async () => {
      // Arrange
      render(
        <MemoryRouter initialEntries={["/shop"]}>
          <Routes>
            {HomeRoute}
            {ShopRoute}
          </Routes>
        </MemoryRouter>
      );
      const logo = screen.getByTestId("logo");

      // Act
      user.click(logo);

      // Assert
      await screen.findByText("Quick Navigation");
    });

    it("search preview shows a preview of items related to search input", async () => {
      // Arrange
      fetch.mockResolvedValueOnce(setFakeShopData("Preview"));
      render(
        <MemoryRouter initialEntries={["/"]}>
          <Routes>{HomeRoute}</Routes>
        </MemoryRouter>
      );
      const searchInput = screen.getByTestId("search-input");

      // Act
      await user.type(searchInput, "preview");

      // Assert
      expect(searchInput).toHaveValue("preview");
      await screen.findByText("Dummy Preview Game - 1");
      await screen.findByText("Dummy Preview Game - 2");
    });

    it("search icon leads to items related to search input", async () => {
      // Arrange
      fetch.mockResolvedValueOnce(setFakeShopData("Search"));
      render(
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            {HomeRoute}
            {ShopRoute}
          </Routes>
        </MemoryRouter>
      );
      const searchInput = screen.getByTestId("search-input");
      const searchIcon = screen.getByTestId("search-icon-link");

      // Act
      await user.type(searchInput, `search`);

      // Assert
      await expect(searchInput).toHaveValue("search");
      // fireEvent.keyDown(searchInput, { key: "Enter", charCode: 13 });
      await user.click(searchIcon);
      await waitFor(() =>
        assertShopItems("", ["Dummy Search Game - 1", "Dummy Search Game - 2"])
      );
    });

    it("cart opens when the cart button is clicked", async () => {
      // Arrange
      render(
        <MemoryRouter initialEntries={["/"]}>
          <Routes>{HomeRoute}</Routes>
        </MemoryRouter>
      );
      const cartButton = screen.getByAltText("a cart icon");

      // Act
      await user.click(cartButton);

      // Assert
      await screen.findByText("Total:");
    });

    it("cart closes when area outside cart is clicked", async () => {
      // Arrange
      render(
        <MemoryRouter initialEntries={["/"]}>
          <Routes>{HomeRoute}</Routes>
        </MemoryRouter>
      );
      const cartButton = screen.getByAltText("a cart icon");

      // Act
      await user.click(cartButton);
      await user.click(screen.getByTestId("cart-page"));

      // Assert
      waitFor(() =>
        expect(screen.queryByText("Total:")).not.toBeInTheDocument()
      );
    });
  });

  describe("Info Card", () => {
    it("Suryakumar-Selvakumar button takes the user to my GitHub profile", () => {
      // Arrange
      render(
        <MemoryRouter initialEntries={["/"]}>
          <Routes>{HomeRoute}</Routes>
        </MemoryRouter>
      );

      // Act
      const githubButton = screen.getByTestId("github");

      // Assert

      expect(githubButton).toHaveAttribute(
        "href",
        "https://github.com/Suryakumar-Selvakumar"
      );
    });

    it("RAWG API button takes the user to its documentation", () => {
      // Arrange
      render(
        <MemoryRouter initialEntries={["/"]}>
          <Routes>{HomeRoute}</Routes>
        </MemoryRouter>
      );

      // Act
      const rawgApiButton = screen.getByTestId("rawg-api");

      // Assert
      expect(rawgApiButton).toHaveAttribute("href", "https://rawg.io/apidocs");
    });
  });

  describe("Quick Navigation", () => {
    it("I'm feeling lucky button takes the user to a random game's page", async () => {
      // Arrange
      fetch
        .mockResolvedValueOnce(
          createFetchResponse({
            results: [
              {
                games: [{ id: 1 }],
              },
            ],
          })
        )
        .mockResolvedValueOnce(setFakeGamePageData(1, "Test", [25, 35, 25, 15]))
        .mockResolvedValueOnce(setFakeImageData());

      // Render app with routes
      render(
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            {HomeRoute}
            {GamePageRoute}
          </Routes>
        </MemoryRouter>
      );
      const imFeelingLuckyButton = screen.getByTestId("im-feeling-lucky-home");

      // Act
      user.click(imFeelingLuckyButton);

      // Assert
      // Check that the App goes to GamePage and our dummy random game is rendered
      await waitFor(() =>
        expect(screen.getByTestId("game-name").textContent).toMatch(
          "Test Game - 1"
        )
      );
    });

    it("New this week button shows games released this week to user", async () => {
      // Arrange
      fetch.mockResolvedValueOnce(setFakeShopData("New this week"));
      const router = (
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            {HomeRoute}
            {ShopRoute}
          </Routes>
        </MemoryRouter>
      );
      render(router);
      const newThisWeekButton = screen.getByTestId("new-this-week-home");

      // Act
      user.click(newThisWeekButton);

      // Assert
      // Check that the App goes to Shop and our dummy new week data is rendered
      await waitFor(() =>
        assertShopItems("This week", [
          "Dummy New this week Game - 1",
          "Dummy New this week Game - 2",
        ])
      );
    });

    it("Last 30 days button shows games released in the last 30 days", async () => {
      // Arrange
      fetch.mockResolvedValueOnce(setFakeShopData("Last 30 days"));
      render(
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            {HomeRoute}
            {ShopRoute}
          </Routes>
        </MemoryRouter>
      );
      const last30DaysButton = screen.getByTestId("last-30-days-home");

      // Act
      user.click(last30DaysButton);

      // Assert
      // Check that the App goes to Shop and our dummy last 30 days data is rendered
      await waitFor(() =>
        assertShopItems("Last 30 days", [
          "Dummy Last 30 days Game - 1",
          "Dummy Last 30 days Game - 2",
        ])
      );
    });

    it("Best of the year button shows the best games released this year", async () => {
      // Arrange
      fetch.mockResolvedValueOnce(setFakeShopData("Best of the year"));
      render(
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            {HomeRoute}
            {ShopRoute}
          </Routes>
        </MemoryRouter>
      );
      const bestOfTheYearButton = screen.getByTestId("best-of-the-year-home");

      // Act
      user.click(bestOfTheYearButton);

      // Assert
      // Check that the App goes to Shop and our dummy best game of the year data is rendered
      await waitFor(() =>
        assertShopItems("Best of the year", [
          "Dummy Best of the year Game - 1",
          "Dummy Best of the year Game - 2",
        ])
      );
    });

    it("Popular in 2026 button shows popular games to release in 2026", async () => {
      // Arrange
      fetch.mockResolvedValueOnce(setFakeShopData("Popular in 2026"));
      render(
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            {HomeRoute}
            {ShopRoute}
          </Routes>
        </MemoryRouter>
      );
      const popularIn2026Button = screen.getByTestId("popular-in-2026-home");

      // Act
      user.click(popularIn2026Button);

      // Assert
      // Check that the App goes to Shop and our dummy popular game in 2026 data is rendered
      await waitFor(() =>
        assertShopItems("Popular in 2026", [
          "Dummy Popular in 2026 Game - 1",
          "Dummy Popular in 2026 Game - 2",
        ])
      );
    });

    it("All time top button shows top games of all time", async () => {
      // Arrange
      fetch.mockResolvedValueOnce(setFakeShopData("All time top"));
      render(
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            {HomeRoute}
            {ShopRoute}
          </Routes>
        </MemoryRouter>
      );
      const allTimeTopButton = screen.getByTestId("all-time-top-home");

      // Act
      user.click(allTimeTopButton);

      // Assert
      // Check that the App goes to Shop and our dummy top game of all time data is rendered
      await waitFor(() =>
        assertShopItems("All time top", [
          "Dummy All time top Game - 1",
          "Dummy All time top Game - 2",
        ])
      );
    });
  });

  describe("Footer", () => {
    it("Checkbox changes the theme of the app", async () => {
      // Arrange
      render(
        <MemoryRouter initialEntries={["/"]}>
          <Routes>{HomeRoute}</Routes>
        </MemoryRouter>
      );
      const themeSwitcher = screen.getByTestId("theme-switcher");
      const logoIcon = screen.getByTestId("logo-icon");

      // Assert
      await waitFor(() => {
        expect(logoIcon).toHaveAttribute(
          "src",
          "/src/assets/icons/omega-norse.png"
        );
        expect(logoIcon).toHaveAttribute("alt", "Jormungandur icon");
      });
      user.click(themeSwitcher);
      await waitFor(() => {
        expect(logoIcon).toHaveAttribute(
          "src",
          "/src/assets/icons/omega-greek.png"
        );
        expect(logoIcon).toHaveAttribute("alt", "omega icon");
      });
    });
  });
});
