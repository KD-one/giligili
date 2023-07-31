<template>
  <div class="createVideo">
    <el-form :model="form" label-width="120px">

      <el-form-item label="标题">
        <el-input v-model="form.title" />
      </el-form-item>

      <el-form-item label="描述信息">
        <el-input v-model="form.info" type="textarea" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">创建视频</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import * as API from '../api/video'
import { ElNotification } from 'element-plus'

// do not use same name with ref
const form = reactive({
  title: '',
  info: '',
})

const onSubmit = () => {
  API.postVideo(form).then((res) => {
    if (res.code != 0) {
    ElNotification({
    title: '投稿失败',
    message: res.msg,
    type: 'warning',
  })
    }else {
    ElNotification({
    title: '投稿成功',
    message: '您投稿的id为 ${res.data.id}',
    type: 'success',
  })
    }
  }).catch(function (error) {
    ElNotification({
    title: '请求出错',
    message: error,
    type: 'error',
  })
  })

}
</script>