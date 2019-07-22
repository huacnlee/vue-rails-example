<template>
  <div id="app">
    <p v-if="loading">数据载入中...</p>
    <div class="topics">
      <div class="topic" v-for="(item, index) in topics">
        <router-link class="topic-title" v-bind:to="'/topics/' + item.id">{{ item.title }}</router-link>
      </div>
      <div class="status">一共 {{ topics.length }} 条</div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      loading: false,
      topics: [],
    }
  },


  mounted() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      this.loading = true;

      fetch("/posts.json")
        .then(res => res.json())
        .then(topics => {
          this.topics = topics;
        })
        .then(() => this.loading = false);
    },
  },
}
</script>

<style lang='scss' scoped>
.topics {
  padding: 20px;

  .topic {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e0e0e0;

    a { color: #333; text-decoration: none; }
  }

  .status {
    color: red;
  }
}
</style>
