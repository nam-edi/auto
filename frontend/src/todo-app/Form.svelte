<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let inputHasFocus = false;

  let name;

  async function addTask() {
    if (name.trim() !== "") {
      const res = await fetch("http://localhost:3001/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          state: false,
        }),
      });
      const data = await res.json(); // Attendre la résolution de la promesse ici
      dispatch("taskAdded", { name });
      name = "";
    }
  }

  function handleKeyDown(event) {
    if (inputHasFocus && event.key === "Enter") {
      addTask();
    }
  }
</script>

<div class="row">
  <input
    type="text"
    data-testid="input-task"
    placeholder="task"
    bind:value={name}
    on:keydown={handleKeyDown}
    on:focus={() => (inputHasFocus = true)}
    on:blur={() => (inputHasFocus = false)}
  />
  <button type="button" data-testid="submit-task" on:click={addTask}>Add</button
  >
</div>

<style>
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #edeef0;
    border-radius: 30px;
    padding-left: 20px;
    margin-bottom: 25px;
    margin-top: 20px;
  }

  input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    padding: 10px;
    font-weight: 14px;
  }

  button {
    border: none;
    outline: none;
    padding: 16px 50px;
    background: #ff5845;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    border-radius: 40px;
  }
</style>
