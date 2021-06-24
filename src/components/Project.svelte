<script lang="ts">
  import type { PasterColor } from "../constants/pastel-colors";

  import { getRandomColor } from "../helpers";

  import type { Project } from "../types/project";
  import TechList from "./Tech-List.svelte";

  export let project: Project;
</script>

<div class="project">
  <img
    src={project.banner ||
      "https://cdnv.vipestudio.com/uploads/2020/06/unnamed-file.wp.gif"}
    class="banner"
  />
  <h2 class="project-details project-title">{project.title}</h2>
  <p class="project-details project-desc">{project.desciptions}</p>
  <span class="link-icons project-details">
    <a href={project.link} target="blank" class="link-icon"
      ><img src="./assets/images/github.svg" /></a
    >
    <TechList techNames={project.techList} />
  </span>
</div>

<style>
  .project {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    background-color: #e4efe7;
    color: black;
    border: 2px solid #06442077;
    overflow: hidden;
  }
  .banner {
    max-width: 100%;
    width: 100%;
  }
  .project:hover {
    animation: anim 0.75s;
  }
  .project-details {
    padding: 0 10px;
  }
    .project-desc {
    font-family: "Open Sans", sans-serif;
    transform: translateY(-10px);
  }
  .project-title {
    font-size: 1.25rem;
  }
  @keyframes anim {
    25% {
      box-shadow: 15px 0px #F7DAD9, -15px 0px 0px #FFF5DA;
    }
    50% {
      box-shadow: 15px 15px #F7DAD9, -15px -15px 0px #FFF5DA;
    }
    75% {
      box-shadow: 0px 15px #F7DAD9, 0px -15px 0px #FFF5DA;
    }
    99% {
      box-shadow: 0px 0px #F7DAD9, 0px -0px 0px #FFF5DA;
    }
  }
  .link-icons {
    margin-top: auto;
    margin-bottom: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
  }
</style>
