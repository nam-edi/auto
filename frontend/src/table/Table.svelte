<script>
  import { onMount } from "svelte";

  let currentPage = 1;
  let limit = "5";
  let data = { lines: [], total: 0 };

  async function fetchTable(offset) {
    const response = await fetch(
      `http://localhost:3001/api/table?limit=${Number(limit)}&offset=${offset}`,
    );
    const jsonData = await response.json();
    return jsonData;
  }

  async function loadPage(page) {
    const offset = (page - 1) * Number(limit);
    data = await fetchTable(offset);
    currentPage = page;
  }

  async function updateLimit(newLimit) {
    limit = String(newLimit);
    await loadPage(1);
  }

  onMount(() => {
    loadPage(currentPage);
  });
</script>

<main>
  <p>Total résultats : {data.total}</p>
  <header>
    <div class="result-info">
      <label for="limit">Nombre de résultats à afficher :</label>
      <select
        id="limit"
        bind:value={limit}
        on:change={() => updateLimit(Number(limit))}
      >
        <option value="5" selected>5</option>
        <option value="10">10</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
    <div class="pagination">
      <button
        on:click={() => loadPage(currentPage - 1)}
        disabled={currentPage === 1}>&lt;</button
      >
      {#each Array.from({ length: Math.ceil(data.total / Number(limit)) }, (_, i) => i + 1) as page}
        <button
          on:click={() => loadPage(page)}
          class:active={currentPage === page}>{page}</button
        >
      {/each}
      <button
        on:click={() => loadPage(currentPage + 1)}
        disabled={currentPage === Math.ceil(data.total / Number(limit))}
        >&gt;</button
      >
    </div>
  </header>
  <table>
    <thead>
      <tr>
        <th>Nom</th>
        <th>Âge</th>
        <th>Ville</th>
      </tr>
    </thead>
    <tbody>
      {#each data.lines as { name, age, city }}
        <tr>
          <td>{name}</td>
          <td>{age}</td>
          <td>{city}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</main>

<style>
  main {
    margin: 130px auto 20px;
    width: 80%;
    margin-bottom: 1rem;
    font-size: 16px;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
  }

  header {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    padding: 1rem;
  }

  table {
    font-size: 16px;
    width: 100%;
  }

  th,
  td {
    padding: 12px 15px;
    border-bottom: 1px solid #ccc;
    text-align: left;
  }

  thead th {
    background-color: #f2f2f2;
    font-weight: bold;
  }

  tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tbody tr:hover {
    background-color: #f9f9f9;
  }

  .pagination {
    display: flex;
    justify-content: center;
  }

  .pagination button {
    padding: 5px 10px;
    margin: 0 5px;
    border: 1px solid #ccc;
    background-color: #fff;
    cursor: pointer;
  }

  .pagination button.active {
    background-color: #007bff;
    color: #fff;
  }

  .pagination button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .result-info {
    align-items: center;
    margin-bottom: 10px;
  }

  .result-info label {
    margin-right: 5px;
  }

  .result-info select {
    width: 60px;
  }
</style>
