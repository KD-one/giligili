<template>
  <div class="home">
    <el-row :gutter="20">
    <el-col
      v-for="video in videos"
      :key="video.id"   
      :span="4"
    >  <!-- 页面的span为24，一个列设置成4，则一行可以容纳6个卡片 -->
    <!-- :key 相当于fori循环的变量i，唯一标识遍历元素 -->
      <el-card>
        <img
          src="../assets/video_image.jpg"
          class="image"
        />
          <div class="video-title">{{ video.title }}</div>
          <div class="video-info">{{ video.info }}</div>
      </el-card>
    </el-col>
  </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import * as API from '../api/video'

export default {
  name: 'HomeView',
  components: {
  },
  data(){
    return {
      videos:[],
    }
  },
  beforeMount(){ //生命周期内容
    API.getVideos().then((res) => {
      this.videos=res.data
    })
  }
}
</script>

<style>
.image{
  width: 100%;
}
.video-title{
  margin-top: 4px;
}
.video-info{
  color:  #909399;
  margin-top: 4px;
}
</style>