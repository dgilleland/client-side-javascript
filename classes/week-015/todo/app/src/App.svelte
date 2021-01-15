<script>
	import page from "page";
	import ControlStrip from "./components/control-strip/ControlStrip.svelte";

	import Home from "./pages/Home.svelte";
	import Login from "./pages/Login.svelte";
	import SignUp from "./pages/SignUp.svelte";
	import ToDoList from "./pages/ToDoList.svelte";
	import NotFound from "./pages/NotFound.svelte";

	// set default component
	let current = ToDoList;

 

	// Map routes to page. If a route is hit the current
	// reference is set to the route's component
	page("/", () => (current = Home));
	page("/signup", () => (current = SignUp));
	page("/login", () => (current = Login));
	page("/todos", () => (current = ToDoList));
	page("*", () => (current = NotFound));
	// activate router
	page.start();
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"name":"james foley","from":"svelte"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:4000/api/todos", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
 

 
</script>

<style>
</style>
<ControlStrip/>
 
	<svelte:component this={current} />
 
