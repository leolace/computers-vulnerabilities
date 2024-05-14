<script lang="ts">
  interface IContent {
    triggerLabel: string
    tab: string
    isOpen: boolean
    text: string
  }
  export let contents: IContent[];

  const changeDialog = (i: number, content: IContent) => {
    content.isOpen = false;
    contents[i].isOpen = true
  }

  let isInsertMode = false;

</script>

{#each contents as content}
  <div class="trigger" on:click={() => content.isOpen = true}>
    <h2>
      {content.triggerLabel}
    </h2>
  </div>
  <dialog open={content.isOpen}>
    <div class="background" on:click={() => content.isOpen = false}></div>
    <section class="container">
      <header>
	<nav>
	  <ul>
	    {#each contents as {tab}, i}
	      <li on:click={() => changeDialog(i, content)} class={contents[i].isOpen ? "active" : ""}>{tab}.c</li>
	    {/each}
	    <li class="close" on:click={() => content.isOpen = false}>X</li>
	  </ul>
	</nav>
      </header>
      
      <article contenteditable={true} on:focus={() => isInsertMode = true} on:blur={() => isInsertMode = false}>
	<div class="code">
	  {@html content.text}
	</div>
      </article>

      <footer>
	<div>
	{#if isInsertMode}
	  <p>-- INSERT --</p>
	{:else}
	  <p>-- NORMAL --</p>
	{/if}
	<p>{content.tab}.c</p>
	</div>
	<div>
	  <p>0:0</p>
	  <p>All</p>
	</div>
      </footer>
    </section>
  </dialog>
{/each}

<style lang="scss">
  h2 {
    color: #00ff10;
    font-weight: 500;
    text-shadow: 0 0 3px #00ff10, 0 0 6px #00ff10;
    font-size: 1.5rem;

    @media (max-width: 800px) {
      font-size: 1.25rem;
    }
  }
  
  dialog {
    font-family: "VT323", monospace!important;
    font-size: 1.75rem;
    position: fixed;
    width: 100vw;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1000;
    background-color: transparent;

    @media (max-width: 800px) {
      font-size: 1.5rem;
    }
  }

  .trigger {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
  
  .background {
    background-color: #0009;
    height: 100%;
    width: 100%;
    position: absolute;
    cursor: auto;
    z-index: 1000;
  }

  .container {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #000;
    height: 90%;
    width: 80vw;
    border: 2px solid #00ff10;
    z-index: 1001;

    @media (max-width: 800px) {
      width: 95vw;
    }
 }

  header {
    nav {

      ul {
	display: flex;
      }

      li {
	color: #00ff10;
	background-color: #000;
	text-align: center;
	padding: 0 1rem;
	cursor: pointer;
	flex: 1;

	&.active {
	  color: #000;
	  background-color: #00ff10;
	}

	@media (max-width: 800px) {
	  font-size: 1.5rem;
	}

	@media (max-width: 500px) {
	  font-size: 1.25rem;
	}

      }

      .close {
	max-width: 2.5rem;
	color: #000;
	background-color: #00ff10;
      }
    }

    &::after {
      content: "";
      width: 100%;
      height: 2px;
      background-color: #00ff10;
      display: block;
    }
  }

  article {
    padding: 0.5rem;
    flex: 1;
    color: #eee;
    outline: none;
    overflow-y: auto;
    text-shadow: 0 0 0px #eee, 0 0 0px #eee;
  }

  .code {
    height: 100%;
    width: 100%;
    min-height: 100rem;
  }

  footer {
    width: 100%;
    background-color: #00ff10;
    line-height: 0;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      gap: 5rem;

      @media (max-width: 800px) {
	gap: 2rem;
      }
    }

    p {
      font-size: 2rem;
      color: #000;

      @media (max-width: 800px) {
	font-size: 1.5rem;
      }

      @media (max-width: 500px) {
	font-size: 1.25rem;
      }
    }
  }

</style>






