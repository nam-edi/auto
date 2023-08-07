<script>
  import Modal from "./Modal.svelte";

  export let name = "";
  export let gender = "male";
  export let checkbox = false;
  export let textarea = "";
  export let file = "";
  export let range = 50;
  export let startDate;
  export let endDate;

  function submit(event) {
    const resultsDiv = document.getElementById("results");

    const resultsHTML = `
        <p>Nom : ${name}</p>
        <p>Genre : ${gender}</p>
        <p>Checkbox : ${checkbox ? "Cochée" : "Non cochée"}</p>
        <p>Textarea : ${textarea}</p>
        <p>Fichier : ${file}</p>
        <p>Input range : ${range}</p>
        <p>Date de début : ${startDate}</p>
        <p>Date de fin : ${endDate}</p>
        `;

    resultsDiv.innerHTML = resultsHTML;
  }
</script>

<main>
  <section>
    <div class="row">
      <label for="inputName">Nom</label>
      <input
        type="text"
        id="inputName"
        class="input-element"
        name="name"
        bind:value={name}
        required
      />
    </div>
    <div class="row">
      <label for="selectGender">Genre</label>
      <select
        id="selectGender"
        name="gender"
        class="input-element"
        bind:value={gender}
      >
        <option value="male">Homme</option>
        <option value="female">Femme</option>
      </select>
    </div>
    <div class="row">
      <label for="checkboxExample">Checkbox</label>
      <input
        type="checkbox"
        id="checkboxExample"
        class="input-element"
        name="exampleCheckbox"
        bind:value={checkbox}
      />
    </div>
    <div class="row">
      <label for="textareaExample">Textarea</label>
      <textarea
        id="textareaExample"
        class="input-element"
        name="exampleTextarea"
        bind:value={textarea}
      ></textarea>
    </div>
    <div class="row">
      <label for="fileInputExample">Input file</label>
      <input
        type="file"
        id="fileInputExample"
        class="input-element"
        name="exampleFileInput"
        bind:value={file}
      />
    </div>
    <div class="row">
      <label for="rangeExample">Input range</label>
      <input
        type="range"
        id="rangeExample"
        class="input-element"
        name="exampleRange"
        bind:value={range}
        min="0"
        max="100"
        step="1"
      />
    </div>
    <div class="row">
      <label for="dateRange">Plage de dates</label>
      <div class="date-range-container">
        <input
          type="date"
          id="startDate"
          class="input-element date-input"
          name="startDate"
          bind:value={startDate}
        />
        <span>&nbsp;&ndash;&nbsp;</span>
        <input
          type="date"
          id="endDate"
          class="input-element date-input"
          name="endDate"
          bind:value={endDate}
        />
      </div>
    </div>
    <div class="row">
      <label for="rangeExample">Informations</label>
      <Modal />
    </div>

    <div class="button-container">
      <button type="submit" on:click={submit}>Envoyer</button>
    </div>
  </section>

  <section id="results" class="results-container"></section>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 40px auto 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }

  section {
    margin-top: 100px;
    background-color: white;
    padding: 20px 15px 35px;
    border-radius: 10px;
  }

  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }

  label {
    width: 30%;
    text-align: right;
    margin-right: 1rem;
  }

  .input-element {
    width: 70%;
    padding: 0.25rem;
  }

  .button-container {
    display: flex;
    justify-content: center;
  }

  button {
    cursor: pointer;
    background-color: #333;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
  }

  button:hover {
    background-color: #555;
  }

  #results {
    margin-left: 30px;
  }

  .date-range-container {
    display: flex;
    align-items: center;
    width: 70%;
  }

  .input-element {
    width: 100%;
    padding: 0.25rem;
  }

  .date-input {
    width: 45%; /* Ajustez la largeur selon vos préférences */
  }

  .date-range {
    width: 100%;
  }
</style>
