<script>
  import "@fortawesome/fontawesome-free/css/all.min.css";

  export let data;
  let windowWidth = window.innerWidth;
  let clicked = false;

  function handleResize() {
    windowWidth = window.innerWidth;
    if (windowWidth >= 1024) clicked = false;
  }

  const handleClick = () => {
    clicked = !clicked;
  };

  const resetClick = () => {
    clicked = false;
  };
</script>

<svelte:window on:resize={handleResize} />

<nav class={clicked ? "navbar-clicked" : "navbar"}>
  <div class="menu-icon">
    {#if windowWidth <= 768}
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="icon-wrapper"
        on:click={handleClick}
        on:keypress={handleClick}
      >
        <i class={clicked ? "fa fa-times" : "fas fa-bars"} />
      </div>
    {/if}
    {#if data.logoLink}
      <a class="logo-link-text" href={data.linkUrl}>
        <img class="logo" src={data.logoSrc} alt={data.altText} />
        {data.optionalLinkText ? data.optionalLinkText : ""}
      </a>
    {/if}
  </div>
  {#each data.links as link}
    {#if link.displayInNav}
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class={clicked ? "navbar-item-clicked" : "navbar-item"}
        on:click={resetClick}
        on:keypress={resetClick}
      >
        <a class="link-text" href={link.url}>{link.linkText}</a>
      </div>
    {/if}
  {/each}
</nav>

<style>
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 5rem;
    background-color: #000;
    color: #fff;
    z-index: 999;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: all 0.2s ease-out;
  }
  .navbar-clicked {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #000;
    color: #fff;
    z-index: 999;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    transition: all 0.2s ease-out;
    height: 5em;
  }
  .link-text {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: white;
    text-decoration: none;
  }
  .navbar-item {
    display: flex;
    height: 4em;
    color: #fff;
    font-size: 1.2em;
    align-items: center;
    margin: 0 40px;
  }
  .navbar-item:hover {
    border-bottom: 4px solid #fff;
    transition: all 0.2s ease-out;
  }
  .navbar-item-clicked {
    display: flex;
    height: 4em;
    color: #fff;
    font-size: 1.2em;
    align-items: center;
  }
  .navbar-item-clicked:hover {
    color: #fff;
    border-bottom: 4px solid #fff;
    transition: all 0.2s ease-out;
  }
  .icon-wrapper {
    margin-top: -0.5em;
    margin-right: 1em;
    margin-left: 40px;
  }
  .menu-icon {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .fa-bars {
    display: flex;
    font-size: 2rem;
  }
  .fa-times {
    display: flex;
    font-size: 2rem;
    cursor: pointer;
  }
  .fa-times:hover {
    position: relative;
    box-shadow: 0 0 20px 5px #777575;
    background-color: rgba(119, 117, 117, 0.58);
    transition: all 0.2s ease-out;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    a:focus {
      color: #242424;
      background-color: #fff;
      color: #242424;
      transition: all 0.2s ease-out;
    }
    .navbar {
      height: 4.5em;
      width: 100vw;
      color: #fff;
      z-index: 999;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
    }
    .navbar-clicked {
      height: 100vh;
      width: 100vw;
      color: #fff;
      z-index: 999;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
    }
    .navbar-item {
      display: none;
    }
    .navbar-item-clicked {
      display: flex;
      width: 100vw;
      color: #fff;
      font-size: 1.2em;
      align-items: center;
      justify-content: center;
    }
    .navbar-item-clicked:hover {
      background-color: #fff;
      color: #242424;
      transition: all 0.2s ease-out;
    }
    .navbar-item-clicked:hover a {
      color: #242424;
    }
    .navbar-item:hover a {
      color: #242424;
    }
    .navbar-item:hover {
      background-color: #fff;
      color: #242424;
      transition: all 0.2s ease-out;
      text-decoration: none;
    }
    .link-text {
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      color: white;
      text-decoration: none;
    }

    .link-text:hover {
      color: #242424;
    }
    .menu-icon {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 3em;
      padding-top: 1em;
      padding-bottom: 0.5em;
    }
    .fa:hover {
      color: #242424;
    }
    .fa-bars {
      display: flex;
      font-size: 2rem;
      cursor: pointer;
    }
  }
</style>
