<template>
  <div class="index">
    <custom-header></custom-header>
    <div class="pageContent">
			<div class="columns">
				<div class="column">
					<section class="hero is-medium is-primary is-bold">
						<div class="hero-body">
							<div class="container">
								<h1 class="title">
									Primary bold title
								</h1>
								<h2 class="subtitle">
									Primary bold subtitle
								</h2>
							</div>
						</div>
					</section>
				</div>
			</div>
			<div class="columns">
				<div class="column is-10 is-offset-1 has-text-centered">
					<spinner v-if="!tableData"></spinner>
					<table class="table is-fullwidth" v-else>
						<thead>
							<tr>
								<th><abbr>ID</abbr></th>
								<th>Name</th>
								<th><abbr>Username</abbr></th>
								<th><abbr>Email</abbr></th>
								<th><abbr>Phone</abbr></th>
								<th><abbr>Website</abbr></th>
							</tr>
						</thead>
						<tfoot>
							<tr>
								<th><abbr>ID</abbr></th>
								<th>Name</th>
								<th><abbr>Username</abbr></th>
								<th><abbr>Email</abbr></th>
								<th><abbr>Phone</abbr></th>
								<th><abbr>Website</abbr></th>
							</tr>
						</tfoot>
						<tbody>
							<tr v-for="item in tableData" v-bind:key="item.id">
								<th>{{item.id}}</th>
								<td>{{item.name}}</td>
								<td>{{item.username}}</td>
								<td>{{item.email}}</td>
								<td>{{item.phone}}</td>
								<td><a :href="item.website" target="_blank">{{item.website}}</a></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
    </div>
    <custom-footer></custom-footer>
  </div>
</template>

<script>
import CustomHeader from '@/components/CustomHeader'
import CustomFooter from '@/components/CustomFooter'
import Spinner from '@/components/Spinner'
export default {
	name: 'index',
	data () {
		return {
			tableData: null
		}
	},
	components: {
		CustomHeader, CustomFooter, Spinner
	},
	mounted () {
		this.getData()
	},
	methods: {
		getData () {
			const self = this
			this.$http({
				url: '/users',
				baseURL: 'https://jsonplaceholder.typicode.com',
				method: 'get',
				timeout: 50000
			})
			.then((response) => {
				self.tableData = response.data
				console.log(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
