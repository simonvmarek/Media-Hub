<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><div class='logo'>Media<span class='hub'>Hub</span></div></router-link>
    </div>
   
    <router-view/>
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600;700;900&display=swap');

#app {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #102535;

}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}


.contain {
  max-width: 1460px;
  margin: auto;
}

.items {
  column-width: 400px;
  column-gap: 2em;
  padding: 1em;
}

.thing {
  display: inline-block;
  margin: 0 0 1em;
  width: 100%;
  transition: all ease-out 0.3s;
  min-height: 150px;
  height: fit-content;
  background: #e9e9e9;
  border-radius: 3px;
}

.thing img {
  transition: all ease-out 0.3s;
  filter: brightness(100%);
  border-radius: 3px;
}

.thing video {
  transition: all ease-out 0.3s;
  width: 100%;
  filter: brightness(100%);
   border-radius: 3px;
}

.thing:hover {
  cursor: pointer;
}

.thing:hover img {
  filter: brightness(50%);
}

.thing:hover video {
  filter: brightness(50%);
}

.thing:hover .thing-bot {
  opacity: 1;
}

.thing-bot {
    transition: all ease-out 0.3s;
    padding: 0 1em 1em 1em;
    position: absolute;
    margin-top: 1em;
    color: white;
    opacity: 0;
    font-size: 0.8em;
    z-index: 1;
    font-weight: 700;
}

#nav a {
  text-decoration: none;
}

.logo {
  font-size: 1.2em;
  font-weight: 700;
}

.hub {
  color: #d40000;
}
</style>
