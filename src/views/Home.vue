<template>
  <div class="home">
    <h1>Videos</h1>
    <div class="video-container">
      <div v-for="video in VideoList" :key="video.id">
        <router-link :to="`/video/${video.id}`">
          <div class="video-box">
            <img :src="video.img">
            <div>
              <h2>{{ video.name }}</h2>
              <div v-html="video.description"></div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  mounted () {
    this.$store.dispatch('loadVideos')
  },
  methods: {
  },
  computed: {
    VideoList () {
      return this.$store.state.videos
    }
  },
  data () {
    return {
    }
  },
  components: {
  }
}
</script>

<style scoped lang="scss">
.video-container {
  .video-box {
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    text-align: left;

    display: flex;
    justify-content: flex-start;

    img {
      max-height: 124px;
      max-width: 124px;
      padding: 10px;
      border-radius: 20px;
    }
  }
}
</style>
