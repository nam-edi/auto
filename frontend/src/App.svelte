<script>
  import { Router, Route } from "svelte-routing";
  import Navbar from "./Navbar.svelte";
  import Todo from "./todo-app/Todo.svelte";
  import Form from "./form/Form.svelte";
  import Table from "./table/Table.svelte";
  import Home from "./Home.svelte";
  import { navbarData } from "./utils/linkUtil";
</script>

<div class="main-container">
  <Navbar data={navbarData} />

  <div class="content">
    <Router>
      <Route path="/" let:params>
        <Home />
      </Route>

      <Route path="/todo" let:params>
        <Todo />
      </Route>

      <Route path="/form" let:params>
        <Form />
      </Route>

      <Route path="/table" let:params>
        <Table />
      </Route>
    </Router>
  </div>
</div>

<div class="footer">
  <p>&copy; 2023 Damien Hoffmann. Tous droits réservés.</p>
</div>

<style>
  .main-container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .content {
    flex: 1;
    overflow: auto;
  }

  .footer {
    background-color: #333;
    color: #fff;
    padding: 10px;
    text-align: center;
    position: sticky;
    bottom: 0;
  }
</style>
