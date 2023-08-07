import { expect, test } from "@playwright/test";
import {
  addTask,
  closeDatabase,
  connectToDatabase,
  deleteTaskById,
} from "../support/database/mongo";

test.describe("Add a task", () => {
  let taskId;

  test.beforeAll(async () => {
    await connectToDatabase();
    taskId = await addTask("task2", false);
  });

  test.afterEach(async () => {
    await deleteTaskById(taskId);
  });

  test.afterAll(async () => {
    await closeDatabase();
  });

  test("Submit with button", async ({ page }) => {
    await page.goto("/");

    await page.getByTestId("input-task").fill("task1");
    await page.getByTestId("submit-task").click();

    // vérifier que la tâche soit présente
    await page.getByText("task1").click();
    await expect(page.locator("li")).toContainText(["task1"]);
  });

  test("Submit with enter", async ({ page }) => {
    await page.goto("/");

    await page.getByTestId("input-task").fill("task2");
    await page.getByTestId("input-task").press("Enter");

    // vérifier que la tâche soit présente
    await page.getByText("task1").click();
    await expect(page.locator("li")).toContainText(["task2"]);
  });
});
