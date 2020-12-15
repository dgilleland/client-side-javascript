<script>
    export let todo;
    export let removeItem;
    export let editItem;
    let trashIcon = "img/trash.svg";
    let editIcon = "img/edit.svg";
</script>

<style>
    li {
        margin-bottom: 0.5rem;
        padding: 0.25rem 1rem 1rem;
        font-size: 14px;
    }
  
    .controls{
         display:flex;
         justify-content:  space-between;
         align-items: center;
    }
 
    .title {
        color: rgb(66, 65, 65);
    }
    .date-added {
        color: grey;
        font-size: 12px;
        margin-top: -0.25rem;
    }
    .icons {
        align-self: flex-start;
    }
    .icon {
        width: 1rem;
        opacity: 0.4;
    }
    .school {
        border-left: 0.55rem solid #fe607a;
        background:#ffedf0;
        box-shadow: 0 0 3px 0 #ffebee ;
        border-radius: 5px;;
    }
    .home {
        border-left: 0.55rem solid #57a2fe;
        background:#e5f0fe;
        box-shadow: 0 0 3px 0 #e5f0fe ;
        border-radius: 5px;;
    }
    .banking {
        border-left: 0.55rem solid #29f76a;
        background: #e0ffea;
        box-shadow: 0 0 3px 0 #e0ffea ;
        border-radius: 5px;;
    }
</style>

<li class={todo.type}>

    <div class="controls">
        <span class="status {todo.active ? 'green' : 'red'}" />
   
    <div class="icons">
        <img
            class="icon"
            src={trashIcon}
            alt="remove this to do item"
            on:click={() => removeItem(todo.id)} />
        <img
            class="icon"
            src={editIcon}
            alt="edit to do item"
            on:click={() => editItem(todo.id)} />
    </div>
</div>
      
    <p class="title"> {todo.title}</p>
    <p class="date-added">{todo.date}</p>
 
</li>
