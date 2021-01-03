<template>
  <Layout>
    <div class="posts_page_wrapper">
      <div class="posts_list">
        <PostCard
          v-for="edge in $page.posts.edges"
          :key="edge.node.id"
          :post="edge.node"
        />
      </div>
      <div class="posts_footer">
        <PageInfo :pageInfo="$page.posts.pageInfo" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  posts: allPost(perPage: 15, page: $page) @paginate {
    pageInfo {
      currentPage
      totalPages
    }
    edges {
      node {
        id
        title
        date (format: "YYYY/MM/DD")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'
import PageInfo from '~/components/PageInfo.vue'

export default {
  components: {
    Author,
    PostCard,
    PageInfo,
  },
  metaInfo: {
    title: 'Posts'
  }
}
</script>
<style lang="scss">
.posts_page_wrapper {
  max-width: 800px;
  margin: 0 auto;
  .posts_list {
    margin: 0 auto;
  }
  
  .posts_footer {
    display: flex;
    justify-content: center;
    align-items: center;
	  padding: calc(var(--space) / 2) 0;

    .pager_link {
      color: var(--body-color);
      margin: 0 4px;
      text-decoration: none;
    }
  }
}
</style>
