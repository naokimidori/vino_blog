<template>
   <div class="post-meta">
      发表于 {{ post.date }} |  
      <template v-if="post.timeToRead">
        阅读时长: {{ post.timeToRead }} 分钟
      </template>
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">
.post-meta {
  font-size: .8em;
  opacity: .8;
}
</style>