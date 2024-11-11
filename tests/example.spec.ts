import { test, expect } from "@playwright/test";

test("page loads", async ({ page }) => {
  await page.goto("/");
  const listItems = page.getByRole("listitem");

  // assert the header is visible
  await expect(page.getByText("Manufacturers")).toBeVisible();

  // assert the list of manufacturers was fetched and rendered
  await expect(listItems).toHaveCount(58);
});
