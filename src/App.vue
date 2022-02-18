<template>
  <div id="app">
    <header>
        <Navbar />
    </header>

    <Main />

    <Footer />
  </div>
</template>

<script>
import Navbar from './views/Navbar'
import Footer from './views/Footer'
import Main from './views/Main'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    Main
  }
}
</script>
