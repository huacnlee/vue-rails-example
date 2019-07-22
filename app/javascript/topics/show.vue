<template>
  <div id="app">
    <div v-if="loading">数据载入中...</div>
    <div v-if="topic" class="topic-detail">
      <div class="toolbar"><router-link class="topic-title" to="/topics">返回</router-link></div>
      <div class="title">{{ topic.title }}</div>
      <div class="markdown-body">
        {{topic.body}}
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      loading: false,
      topic: null,
    }
  },

  mounted() {
    this.fetchData(this.$route.params.id);
  },

  methods: {
    fetchData(id) {
      this.loading = true;

      fetch(`/posts/${id}.json`)
        .then(res => res.json())
        .then(topic => {
          this.mode = "detail";
          this.topic = topic;
        })
        .then(() => this.loading = false);
    },
  },
}
</script>

<style lang='scss' scoped>
.topic-detail {
  .toolbar {
    margin-bottom: 15px;
  }
  .title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 15px;
  }
}
</style>
