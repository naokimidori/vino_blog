<template>
  <div id="app">

    <header class="header">
      <div class="header__left">
        <Logo v-if="showLogo" />
      </div>
      
      <div class="header__right">
        <g-link class="header__right_text" to="/posts">
          <span>Posts</span>
        </g-link>
        <g-link class="header__right_text" to="/tags">
          <span>Tags</span>
        </g-link>
        <g-link class="header__right_text" to="/about">
          <span>About</span>
        </g-link>
        <ToggleTheme />
      </div>
      
    </header>

    <main class="main">
      <slot/>
    </main>

    <footer class="footer">
      <span class="footer__copyright">© Vino | </span>
      <span class="footer__links">Powered by <a href="//gridsome.org"> Gridsome </a></span>
    </footer>

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
    ToggleTheme
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top:0;
  z-index: 10;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  &__right_text {
    text-decoration: none;
    color: var(--body-color)!important;
    font-size: .9em;
    margin-right: .9em;
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}

.main {
  flex: 1;
  width: 100%;
  margin: 0 auto;
  padding: 1.5vw 15px 0;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 3);
  text-align: center;
  font-size: .7em;

  > span {
    margin: 0 .35em;
  }

  a {
    color: currentColor;
  }
}
</style>
