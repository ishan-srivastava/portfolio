<script lang="ts">
  import { getTechInfo } from "../helpers";

  import type { Tech, TechName } from "../types/tech";
  export let techNames: TechName[] = [];
  const techList: Tech[] = techNames.map((name) => getTechInfo(name));
</script>

<div class="tech-list">
  {#each techList as tech}
      <span data-tooltip={tech.name}><img src={tech.icon} class="tech-icon"/></span>
  {/each}
</div>

<style>
  .tech-list {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    float: right;
    color: white;
  }
  .tech-icon {
    max-width: 20px;
    margin-left: 10px;
    cursor: pointer;
  }
</style>
