import { Page } from "@playwright/test";

export class BoardPage {
  constructor(private page: Page) {}

  async navigateToBoard(boardTitle: string) {
    await this.page.getByRole("link", { name: boardTitle }).click();
  }

  async clickCreateTaskButton() {
    await this.page.getByRole("button", { name: "+ Create Task" }).click();
  }

  async fillTaskTitle(title: string) {
    await this.page.getByPlaceholder("Title").fill(title);
  }

  async selectTaskColor(color: string) {
    await this.page.getByLabel("Select color").click();
    await this.page.getByRole("option", { name: color }).click();
  }

  async fillTaskDescription(description: string) {
    await this.page.getByPlaceholder("Description").fill(description);
  }

  async clickSaveButton() {
    await this.page.getByRole("button", { name: "Save" }).click();
  }

  async clickTaskWithName(taskName: string) {
    await this.page.getByText(taskName).dblclick();
  }
}
