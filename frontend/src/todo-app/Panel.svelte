<script>
  import { createEventDispatcher } from "svelte";

  export let tasks;

  const dispatch = createEventDispatcher();

  function handleDeleteTask(task) {
    // Émettre un événement personnalisé pour supprimer une tâche
    dispatch("deleteTask", task);
  }

  function handleChangeState(task) {
    dispatch("changeState", task);
  }

  // Gestionnaire d'événement pour le clic sur le span
  function handleSpanClick(event, task) {
    event.stopPropagation(); // Arrête la propagation de l'événement pour éviter de déclencher handleChangeState
    handleDeleteTask(task); // Déclenche le gestionnaire handleDeleteTask pour supprimer la tâche
  }
</script>

<ul id="list-container">
  {#if tasks.length > 0}
    {#each tasks as task}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <li
        class={task.state ? "checked" : "unchecked"}
        on:click={handleChangeState(task)}
      >
        {task.name}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <span on:click={(event) => handleSpanClick(event, task)}>x</span>
        <!-- <input type="checkbox"  />
            <button >Delete</button> -->
      </li>
    {/each}
  {:else}
    <p></p>
  {/if}
</ul>

<style>
  ul li {
    list-style: none;
    font-size: 17px;
    padding: 12px 8px 12px 50px;
    cursor: pointer;
    user-select: none;
    position: relative;
  }

  ul li::before {
    content: "";
    position: absolute;
    height: 28px;
    width: 28px;
    background-image: url(img/unchecked.png);
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    top: 8px;
    left: 8px;
  }

  ul li.checked {
    color: #555;
    text-decoration: line-through;
  }

  ul li.checked::before {
    background-image: url(img/checked.png);
  }

  ul li span {
    position: absolute;
    right: 0;
    top: 1px;
    width: 40px;
    height: 40px;
    font-size: 22px;
    color: #555;
    line-height: 40px;
    text-align: center;
    border-radius: 50%;
  }

  ul li span:hover {
    background: #edeef0;
  }
</style>
