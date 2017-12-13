<template>
  <div class="classify">
      <div class="header">
            <h2>分类</h2>
            <router-link to="search"><i class="iconfont" v-html="search"></i></router-link>
      </div>
      <div class="cl_main">
        <div class="c_box">
            <img src="../../assets/image/class1.png" alt="">
            <img src="../../assets/image/class2.png" alt="">
            <img src="../../assets/image/class3.png" alt="">
            <img src="../../assets/image/class4.png" alt="">
        </div>
        <div class="wbook">
            <h2>女频</h2>
            <div class="we_book">
            <dl v-for="(n,i) in w_books" :key="i">
                <dt>
                    <img :src="w_books[i].small_cover" alt="">
                </dt>
                <dd>
                    <h2>{{w_books[i].classname}}</h2>
                    <p>{{w_books[i].title}}</p>
                </dd>
            </dl>
        </div>
       </div>
       <div class="fenjie"></div>
       <div class="wbook">
            <h2>男频</h2>
            <div class="we_book">
            <dl v-for="(n,i) in m_books" :key="i">
                <dt>
                    <img :src="m_books[i].small_cover" alt="">
                </dt>
                <dd>
                    <h2>{{m_books[i].classname}}</h2>
                    <p>{{m_books[i].title}}</p>
                </dd>
            </dl>
        </div>
       </div>
      </div>
  </div>
</template>
<script>
import axios from "axios";
import {mapState,mapActions} from "vuex"; 
export default {
  data(){
      return{
          w_books:[],
          m_books:[],
      }
  },
  computed:{
     ...mapState([
            "nav",
            "search"
        ])
  },
   mounted(){
    //    axios.defaults.baseURL = "http://localhost:7000";     // 本地服务器地址 
        axios.defaults.baseURL = "http://39.108.136.59:7000"; 
        var that = this;
        axios.get("/book")
            .then(res=>{
               that.w_books = res.data[8].list.item;
               that.m_books = res.data[9].list.item;
            })
   }
}
</script>
<style>

</style>
