<template>
  <router-view/>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #fff;
  background: #0f0f0f;
  height: 100vh;
}

a {
  color: #fff;
  text-decoration: none;
}

input {
  width: 100%;
  padding: 10px;
  border: 0;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  background: #2c2c2c;
  outline: none;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to {
  transition: opacity 0.3s;
  opacity: 0;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {

}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

main {
  height: 100%;
  padding: 20px;
}

.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #212121;;
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 10px;
}
</style>
