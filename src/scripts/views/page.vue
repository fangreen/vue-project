<template>
  <div class="page">
      <div class="header">
            <h2>分类</h2>
            <router-link to="search"><i class="iconfont" v-html="search"></i></router-link>
            <router-link to="search">编辑</router-link>
      </div>
      <div class="page_main">
         <dl class="add_books">
            <dt><img src="../../assets/image/banner1.jpg" alt=""></dt>
            <dd>添加书籍</dd>
        </dl>
         <dl class="add_books">
            <dt><img src="../../assets/image/banner1.jpg" alt=""></dt>
            <dd>添加书籍</dd>
        </dl>
        <dl class="add" @click="add()">
          <dt>+</dt>
          <dd>添加书籍</dd>
        </dl>
      </div>
  </div>
</template>
<script>
import axios from "axios";
import router from "./router";
import {mapState,mapActions} from "vuex"; 
export default {
  computed:{
     ...mapState([
            "search"
        ])
  },
  methods:{
    add(){
      router.push("recommend");
    },
    mounted(){
      
  
    }
  }
}
</script>
<style>

</style>
