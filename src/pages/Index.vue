<template>
  <Layout>
    <!-- Author intro -->
    <Author :showDesc="true" />

  </Layout>
</template>

<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    Author,
    PostCard
  }
}
</script>
