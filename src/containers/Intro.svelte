<div class="intro">
  <div class="text-intro">
    <h1 class="hi-line">HI, I'M ISHAN</h1>
    <p class="intro-desc">
      Fullstack developer based out of Delhi, India. <br />Lover of all things
      JavaScript - but I am always learning new stuff.
    </p>
    <br />
    <span class="brand">
      <a href="https://www.linkedin.com/in/goishan/" target="blank">
        <i class="fab fa-linkedin" />
      </a>
      <a href="https://github.com/ishan-srivastava" target="blank">
        <i class="fab fa-github-square" /></a
      >
      <a href="https://dev.to/ishansrivastava" target="blank">
        <i class="fab fa-dev" /></a
      >
    </span>
  </div>
  <img src="./assets/images/ishan-headshot.png" class="headshot" />
</div>
<div class="waves-container">
  <img src="./assets/images/wave-2.svg" class="wave wave-2" />
  <img src="./assets/images/wave-1.svg" class="wave wave-1" />
  <img src="./assets/images/wave.svg" class="wave wave-0" />
</div>

<style>
  .intro {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #111111;
    padding: 0 10%;
    box-sizing: border-box;
  }
  @media only screen and (max-width: 1200px) {
    .intro {
      flex-direction: column-reverse;
      transform: translateY(-1px);
    }
    .headshot {
      width: 300px;
    }
    .text-intro {
      max-width: 75% !important;
    }
    .brand {
      transform: translateY(-1px);
    }
  }
  .text-intro {
    max-width: 55%;
    color: #ffffff;
  }
  .hi-line {
    font-size: 3.5rem;
    text-transform: uppercase;
  }
  .intro-desc {
    font-size: 1.5rem;
  }
  .headshot-container {
    background: black;
    border-radius: 50%;
    height: 500px;
    width: 500px;
    display: flex;
    justify-content: center;
    overflow: hidden;
  }
  .headshot {
    width: 100%;
    max-width: 500px;
    z-index: 10;
  }
  .waves-container {
    position: relative;
    width: 100%;
    height: 96px;
  }
  .wave {
    position: absolute;
  }
  .wave-1 {
    z-index: 1;
    transform: scaleY(0.8);
  }
  .wave-0 {
    z-index: 2;
    transform: translateY(-22%) scaleY(0.6);
  }
  .wave-2 {
    transform: translateY(26%);
  }

  .brand {
    font-size: 3rem;
    background: #111111;
    box-sizing: border-box;
    width: 100%;
  }
  a {
    color: white;
  }
</style>
