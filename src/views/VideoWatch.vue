<template>
  <div>
    <h1>HI</h1>
    <div class="display-main">
      <video-player class="video-player-box"
                 ref="videoPlayer"
                 :options="playerOptions">
      </video-player>
      <div class="video-description">
        <h2>{{ video.name }}</h2>
        <div v-html="video.description"></div>
      </div>
    </div>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'

export default {
  name: 'VideoWatch',
  components: {
    videoPlayer
  },
  computed: {
    video () {
      var video = { img: 'not avail', name: 'No record found', description: 'None' }
      this.$store.state.videos.forEach(vid => {
        if (String(vid.id) === this.$route.params.id) {
          video = vid
        }
      })
      return video
    },
    playerOptions () {
      return {
        muted: false,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: this.video.videoUrl // this.video.videoUrl
        }],
        poster: this.video.img // this.video.img
      }
    }
  }
}
</script>

<style lang="scss">
.display-main {
  img {
    max-width: 50%;
    max-height: 300px;
    border-radius: 40px;
  }
}
.video-player-box {
  .video-js {
    max-height: 400px;
    max-width: 60%;
    margin: auto;
  }
}
</style>
