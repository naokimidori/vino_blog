<template>
  <Layout>
    <div class="tag_page_wrapper">
      <h1 class="tag-title text-center space-bottom">
        ALL TAGS
      </h1>
      <div class="tag_list" v-if="$page && $page.allTag">
        <div class="tag_item" v-for="tag in $page.allTag.edges" :key="tag.node.id">
          <g-link :to="tag.node.path">
            {{ tag.node.title }} ({{ tag.node.belongsTo.totalCount }})
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  allTag {
    edges {
      node {
        id
        title
        path
        belongsTo {
          totalCount
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
    title: 'All Posts'
  }
}
</script>
<style lang="scss">
.tag_page_wrapper {
  max-width: 800px;
  margin: 0 auto;

  .tag_list {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

    .tag_item {
      a {
        display: inline-flex;
        align-items: center;
        position: relative;
        margin: 10px 10px;
        border-radius: 100px;
        border: 2px solid var(--body-color);
        padding: 10px 20px;
        word-wrap: break-word;
        transition-duration: 0.3s;
        transition-property: transform;
        transition-timing-function: ease-out;
        color: var(--body-color);
        text-decoration: none;
      }
      a:active,
      a:focus,
      a:hover {
        color: #49b1f5;
        transform: scale(1.1);
        border: 3px solid #49b1f5;
      }
    }
  }
  
  .tag_footer {
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
