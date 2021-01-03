<template>
  <div class="pageInfo_wrapper">
    <Pager
      :info="pageInfo"
      linkClass="pager_link"
    />
  </div>
</template>

<script>
import { Pager } from 'gridsome'
export default {
  props: ['pageInfo'],
  components: {
    Pager,
  }
}
</script>

<style lang="scss">
.pageInfo_wrapper {
  .pager_link {
    color: var(--body-color);
    margin: 0 4px;
    text-decoration: none;
  }
  .active--exact {
    color: #8ca8be !important;
  }
}
</style>