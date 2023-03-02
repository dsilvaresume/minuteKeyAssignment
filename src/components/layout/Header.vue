<template>
    <header>
        <nav>
            <ul>
                <router-link to="/">
                    Home
                </router-link>
            </ul>
            <ul>
                <li>
                    <router-link to="/bikes">
                        All Bikes
                    </router-link>
                </li>
                <li>
                    <router-link to="/bikes/add">
                        Add a New Bike
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>

header {
  width: 100%;
  height: 3rem;
  background-color: #5f8ee4;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #e6e6e6;
  display: inline-block;
  padding: 0.25rem 1.5rem;
  border-color: transparent;
}

a:active,
a:hover,
a.router-link-active {
  padding: 0.25rem 1.5rem;
  border: 2px solid #e4655f;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
  border: 1px solid #e6e6e6;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>