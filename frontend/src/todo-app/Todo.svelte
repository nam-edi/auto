<script>
  import { onMount } from "svelte";
  import Form from "./Form.svelte";
  import Panel from "./Panel.svelte";

  let tasks = [];

  async function handleAddTask(event) {
    const { name } = event.detail;
    tasks = [...tasks, { name, state: false }];
    await fetchTasks();
  }

  async function fetchTasks() {
    const response = await fetch("http://localhost:3001/api/tasks");
    const data = await response.json();
    tasks = data.tasks;
  }

  async function handleDeleteTask(event) {
    const deletedTask = event.detail;
    const res = await fetch(
      `http://localhost:3001/api/tasks/${deletedTask._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    const data = await res.json();
    tasks = tasks.filter((task) => task._id !== deletedTask._id);
  }

  async function handleChangeState(event) {
    const updatedTask = event.detail;
    const res = await fetch(
      `http://localhost:3001/api/tasks/${updatedTask._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: updatedTask.name,
          state: !updatedTask.state,
        }),
      },
    );
    const data = await res.json();
    await fetchTasks();
  }

  onMount(() => {
    fetchTasks();
  });
</script>

<div class="container">
  <div class="todo-app">
    <h2>Todo App</h2>
    <Form {tasks} on:taskAdded={handleAddTask} />
    <Panel
      {tasks}
      on:changeState={handleChangeState}
      on:deleteTask={handleDeleteTask}
    />
  </div>
</div>

<style>
  .container {
    width: 100%;
    padding: 10px;
  }

  .todo-app {
    width: 100%;
    max-width: 540px;
    background: #fff;
    margin: 120px auto 20px;
    padding: 40px 30px 30px;
    border-radius: 10px;
  }

  h2 {
    display: flex;
    align-items: center;
  }
</style>
