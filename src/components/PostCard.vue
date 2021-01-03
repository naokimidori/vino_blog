<template>
  <div class="card_wrapper">
     <div class="card_title">
        <g-link class="card_title_link" :to="post.path">
          {{post.title}}
        </g-link>
     </div>
    <div class="card_date">{{post.date}}</div>
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ['post'],
}
</script>

<style lang="scss">
.card_wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: calc(var(--space) / 3);
  // font-family: Consolas, Menlo, Monaco,  "Courier New", monospace;
  font-family: Menlo;

  .card_title {
    font-size: 0.8em;
    flex: 1;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding-right: 2em;

    &_link {
      text-decoration: none;
      color: var(--body-color);

      &:hover {
        color: #49b1f5;
      }
    }
  }

  .card_date {
    font-size: 0.65em;
    color: var(--body-color);
    opacity: .6;
  }
}

</style>
