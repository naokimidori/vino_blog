<template>
  <Layout>
    <div class="page_about_wrapper">
      <div v-if="$page.post" class="markdown-body" v-html="$page.post.content" />
    </div>
  </Layout>
</template>

<page-query>
query Post {
  post: post (id: "c242e969ba9cdad7dfa91f2c8b4a91e2") {
    content
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'About Me'
  }
}
</script>
<style lang="scss">
  .page_about_wrapper {
    max-width: 800px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 20px;

    h1 {
      text-align: center;
    }
  }
</style>
