<template>
  <div class="details">
      <div class="head">
          <img src="../../assets/image/back.png" @click="back()" alt="">
          <img src="../../assets/image/share.png" alt="">
      </div>
      <div class="dmain">
          <dl>
              <dt><img :src="ids.small_cover" alt=""></dt>
              <dd>
                  <h2>{{ids.title}}</h2>
                  <p>{{ids.author}}<span>.</span>著<span>></span></p>
                  <p>{{ids.shortwordsize}}<span>.</span><span>{{ids.updatestatus}}</span></p>
                  <p>{{ids.hits}}次点击</p>
                  <div>
                      <a v-for="(n,k) in tag" :key="k">{{n}}</a>
                  </div>
              </dd>
        </dl>
        <div class="de_scroll">
        </div>
      </div>
      <div class="foot">
          <div class="foot_main">
              <button>加入书架</button>
              <button>立即阅读</button>
          </div>
      </div>
  </div>
</template>
<script>
import router from "./router";
import { Toast } from 'mint-ui';
import axios from "axios";
export default {
  data(){
      return{
          ids:[],
          tag:[]
      }
  },
  methods:{
      back(){
          router.push("recommend");
      },
    //   pages(){
    //     var id = this.$route.params;
    //     // axios.defaults.baseURL = "http://localhost:7000";
    //      axios.defaults.baseURL = "http://39.108.136.59:7000";
    //     axios.get("/book_list",{
    //         params:{
    //             id:id
    //         }
    //     }).then(res=>{
    //         console.log(res.data);
    //     })
    //   }
  },
  mounted(){
     var that = this;
     var id = this.$route.params;
    //  axios.defaults.baseURL = "http://localhost:7000";
     axios.defaults.baseURL = "http://39.108.136.59:7000";
     axios({
         url:"/de_book",
         method:'get',
         params:{
             id:id,
         }
     }).then(res=>{  
           var arr = res.data[0].list.item;
            arr.forEach((item,index)=>{
                if(item.id==id.id){
                    that.ids=item;
                    that.tag = that.ids.tags.split(";");
                }
            })
         })
  }
}
</script>
