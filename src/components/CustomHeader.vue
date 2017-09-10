<template>
<nav class="navbar">
  <div class="navbar-brand">
    <a class="navbar-item is-logo" href="#">
        <img src="../assets/logo.png" alt="logo" height="40"> Logo
    </a>

    <a class="navbar-item is-hidden-desktop" href="#" target="_blank">
      <span class="icon" style="color: #333;">
        <i class="fa fa-github"></i>
      </span>
    </a>

    <div class="navbar-burger burger" data-target="navMenubd-example">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

    <div id="navMenubd-example" class="navbar-menu">
      <a class="navbar-item is-white" href="">
        Link
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="button btn" href="#">
              <span>Button</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>

export default {
	name: 'header',
	data () {
		return {
			msg: ''
		}
	},
	methods: {
		logout () {
      this.$store.dispatch('logout')
      this.$ga.event('category', 'action', 'label', 123)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
    padding-left: 2rem;
    padding-right: 2rem;
    background-color: whitesmoke;
}
</style>
