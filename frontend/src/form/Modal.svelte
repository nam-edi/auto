<script>
  let showModal = false;
  let dialog;

  $: if (dialog && showModal) dialog.showModal();
</script>

<button id="openModalButton" on:click={() => (showModal = true)}>?</button>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div on:click|stopPropagation>
    <slot name="header" />
    <p>Contenu de la modale</p>
    <hr />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt
      velit quis tincidunt blandit. Nulla dictum nisi vel ipsum eleifend, nec
      facilisis nisl semper. In euismod tellus eu libero venenatis, vel semper
      elit iaculis. Etiam posuere efficitur mi id feugiat. Nullam eget cursus
      sem, id interdum dolor. Vestibulum quis enim ac elit tristique volutpat.
      Duis et velit quis magna consectetur rhoncus at in lectus.
    </p>

    <hr />
    <!-- svelte-ignore a11y-autofocus -->
    <button class="button-modal" autofocus on:click={() => dialog.close()}
      >Fermer la modale</button
    >
  </div>
</dialog>

<style>
  .button-modal {
    cursor: pointer;
    background-color: #333;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
  }

  #openModalButton {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: rgb(72, 72, 233);
    color: white;
    font-size: 14px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -5;
  }

  .button-modal:hover {
    background-color: #555;
  }

  dialog {
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 5px;
    max-width: 600px;
    padding: 20px;
  }

  dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.4);
  }

  slot[name="header"] {
    font-size: 20px;
    font-weight: bold;
  }

  hr {
    border: 1px solid #ccc;
    margin: 10px 0;
  }

  .button-modal[autofocus] {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
</style>
