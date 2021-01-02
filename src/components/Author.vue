<template>
	<div class="author">

		<g-image alt="Author image" class="author__image" src="~/assets/images/author.jpg" width="210" height="210" />

		<vue-typed-js
			:strings="[$static.metadata.siteDescription, '尽人事，听天命！']"
			:loop="true"
			:startDelay="100"
			:backSpeed="50"
			:typeSpeed="100"
		>
			<div class="author__intro">
				<span class="typing"></span>
			</div>
		</vue-typed-js>

		<div class="contact_me">
			<i
				v-for="item in contactMeList"
				class="font_icon"
				:key="item.fontIcon"
				@click="handleGoLink(item.url)"
			>
				{{ item.fontIcon }}
			</i>

		</div>
	</div>
</template>

<static-query>
query {
  metadata {
    siteName
		siteDescription
  }
}
</static-query>

<script>
export default {
	props: ['showTitle'],
	data: function () {
		return {
			contactMeList: [
				{
					fontIcon: '\uea0a',
					url: 'https://github.com/naokimidori',
				},
				{
					fontIcon: '\ue646',
					url: 'https://weibo.com/u/2202529127',
				},
				{
					fontIcon: '\ue645',
					url: 'https://s3.ax1x.com/2021/01/02/sp9g1O.jpg',
				},
				{
					fontIcon: '\ue68d',
					url: 'mailto:naokimidori@163.com',
				},
			]
		}
	},
	methods: {
		handleGoLink(url) {
			window.open(url)
		}
	}
}
</script>

<style lang="scss">
.author {
	margin: 0 auto;
	max-width: 600px;
	text-align: center;
	padding: calc(var(--space) * 2) 0;

	&__image {
		border-radius: 100%;
		width: 160px;
		height: 160px;
		margin-bottom: 1em;
		box-shadow: 0 0 0 0.3618em rgba(0,0,0,0.05);
	}

	&__intro {
		font-size: 2em;
		font-family: 'Century gothic', Helvetica;
		width: 100%;
	}

	.contact_me {
		padding-top: calc(var(--space) / 2);
		
		.font_icon {
			cursor: pointer;
			font-family: "iconfont";
			font-size: 1.2em;
			font-style:normal;
			-webkit-font-smoothing: antialiased;
			-webkit-text-stroke-width: 0.2px;
			-moz-osx-font-smoothing: grayscale;
			margin: 0 .4em;
		}
	}
}
</style>
