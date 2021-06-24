<script>
  import Project from "../components/Project.svelte";
  import { projectList } from "../constants/project-list";
import { getRandomColor } from "../helpers";
const rColor = getRandomColor();
</script>

<div class="project-container">
  <h1 class="title">Projects</h1>
  <div class="projects-list">
    {#each projectList as project}
      <Project {project} color={rColor}/>
    {/each}
  </div>
</div>

<style>
  .project-container {
    z-index: 3;
    width: 100%;
    padding: 0 10%;
    box-sizing: border-box;
  }
  .projects-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    /* grid-template-rows: repeat(3, 360px); */
    grid-gap: 3rem;
    grid-auto-flow: dense;
    width: 100%;
  }
  .title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
</style>
