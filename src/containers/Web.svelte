<script>
import Header from "../components/Header.svelte";
import Contact from "./Contact.svelte";
import Intro from "./Intro.svelte";
import Projects from "./Projects.svelte";

</script>

<div class="parent-div">
	<Header/>
	<Intro/>
	<Projects/>
	<Contact/>
</div>

<style>
	.parent-div {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
</style>