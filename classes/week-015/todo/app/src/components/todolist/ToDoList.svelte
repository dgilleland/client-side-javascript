<script>
  import ToDoItem from "./ToDoItem.svelte";
  //import { v4 as uuidv4 } from "uuid";
 

  let todos = [];
  async function getToDos() {
    const response = await fetch("./todos.json");
    const data = await response.json();
    return data;
  }
  getToDos().then((data) => {
    todos = [...data];
  });

   function removeItem(id){
     todos = todos.filter(todo  => todo.id != id)
  }
  function editItem(id){
    console.log(`Edit Item ID: ${id}`)
  }
</script>

<style>
  :global(.status) {
    display:inline-block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
  }
  :global(.red) {
    background-color: rgb(255, 79, 79);
    box-shadow: 0 0 5px 0 rgb(251, 21, 21);
  }
  :global(.green) {
    background: rgb(131, 254, 131);
    box-shadow: 0 0 5px 0 rgb(40, 249, 96);
  }
   .legend{
     display:flex;
     align-items: center;
     font-size: 12px;
     margin: -0.5rem 0;
   }
   .legend p{
     margin: 0.25rem;
     font-weight: 300;
    }
    .legend   p:first-of-type{
      font-weight: 600;
      font-size: 14px;
    }
    .type{
      margin-bottom: 1rem;
    }
    .category{
      display:inline-block;
      width: 2rem;
      height: 0.5rem;
      margin-right: 1rem;
 
    }
    .school{
      background: #fe607a;
    }
    .home {
      background:#57a2fe;;
    }
    .banking{
      background:  #29f76a;;
    }
  ul {
    margin: 2rem 2rem 0;
  }
 
  @media (min-width: 540px) {
    ul {
      max-width: 540px;
      margin: 2rem auto 0;
    }
  }
</style>


<ul>
  <li class="legend">
    <p>status: </p>
    <p>
      <span class="status green"></span>
      active
    </p>
    <p>
      <span class="status red"></span>
      expired
    </p>
    </li>
    <li class="legend type" ><p>category</p>
      <p>school</p><span class="category school"></span>
      <p>home</p><span class="category home"></span>
      <p>banking</p><span class="category banking"></span>
    </li>
  {#each todos as todo, i}
    <ToDoItem {todo}  {removeItem}  {editItem}/>
    {:else}
    <li>You Have No To Do Items In Your List</li>
  {/each}
</ul>
