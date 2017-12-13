<template>
  <div class="recommend">
      <div class="header">
            <img class="logo" src="../../assets/image/logo.png" alt="">
              <div class="nav">
                  <nav @click="change(i)" v-for="(n,i ) in nav" :key="i" :class="navIndex==i?'nav-active':''">{{n}}</nav>
              </div>
                <router-link to="search"><i class="iconfont" v-html="search"></i></router-link>
      </div>
      <div class="main">
           <div class="man" v-show="show">
               <div class="wman">
               <div class="ban1">
                    <mt-swipe :auto="4000">
                        <mt-swipe-item v-for="(n,i) in mbanner" :key="i"><img :src="n.mbanner"></mt-swipe-item>
                    </mt-swipe>
               </div>
               <div class="hot">
                   <div class="hot_main">
                       <h2>重磅推荐</h2>
                       <p>更多<img src="../../assets/image/more.png" alt=""></p>
                   </div>
               </div>
               <div class="hot_book">
                   <dl v-for="(n,i) in books_weight" :key="i" v-if="i<3" @click="addbooks(i,4)">
                       <dt><img :src="books_weight[i].small_cover" alt=""></dt>
                       <dd>{{books_weight[i].title}}</dd>
                   </dl>
               </div>
               <div class="fenjie"></div>
               <div class="new_book">
                   <div class="new_main">
                       <h2>新书抢鲜</h2>
                       <p>更多<img src="../../assets/image/more.png" alt=""></p>
                   </div>
               </div>
               <div class="new">
                   <dl class="newb" v-for="(n,i) in books_flash" :key="i" v-if="i<3" @click="addbooks(i,5)">
                       <dt><img :src="books_flash[i].small_cover"></dt>
                       <dd>
                           <h2>{{books_flash[i].title}}</h2>
                           <p>{{books_flash[i].rec_description}}</p>
                           <!-- <p>{{books_new[i].}}</p> -->
                           <div class="msg">
                               <p class="p1">{{books_flash[i].shortwordsize}}<b>.</b><span>{{books_flash[i].updatestatus}}</span></p>
                               <div>
                                   <p v-for="(m,j) in books_flash[i].tags.split(';')" :key="j">{{m}}</p>                                  
                               </div>
                           </div>
                       </dd>
                   </dl>
               </div>
               <div class="ad_img"><img src="http://if.maizibook.com/Upload/Ad/Image/20170619/20170619142329959881.jpg"></div>
               <div class="new_book">
                   <div class="new_main">
                       <h2>主编推荐</h2>
                       <p>更多<img src="../../assets/image/more.png" alt=""></p>
                   </div>
               </div>
               <div class="new">
                   <dl class="newb" v-for="(n,i) in books_main" :key="i" v-if="i<3" @click="addbooks(i,6)">
                       <dt><img :src="books_main[i].small_cover"></dt>
                       <dd>
                           <h2>{{books_main[i].title}}</h2>
                           <p>{{books_main[i].rec_description}}</p>
                           <!-- <p>{{books_new[i].}}</p> -->
                           <div class="msg">
                               <p class="p1">{{books_main[i].shortwordsize}}<b>.</b><span>{{books_main[i].updatestatus}}</span></p>
                               <div>
                                   <p v-for="(m,j) in books_main[i].tags.split(';')" :key="j">{{m}}</p>                                  
                               </div>
                           </div>
                       </dd>
                   </dl>
               </div>
               <div class="fenjie"></div>
               <div class="hot">
                   <div class="hot_main">
                       <h2>精品畅销</h2>
                       <p>更多<img src="../../assets/image/more.png" alt=""></p>
                   </div>
               </div>
               <div class="hot_book">
                   <dl v-for="(n,i) in books_buy" :key="i" v-if="i<3" @click="addbooks(i,7)">
                       <dt><img :src="books_buy[i].small_cover" alt=""></dt>
                       <dd>{{books_buy[i].title}}</dd>
                   </dl>
               </div>
          </div>
          </div>
           <div class="wman" v-show="!show">
               <div class="ban1">
                    <mt-swipe :auto="4000">
                        <mt-swipe-item v-for="(n,i) in banner" :key="i"><img :src="n.banner"></mt-swipe-item>
                    </mt-swipe>
               </div>
               <div class="hot">
                   <div class="hot_main">
                       <h2>热门推荐</h2>
                       <p>更多<img src="../../assets/image/more.png" alt=""></p>
                   </div>
               </div>
               <div class="hot_book">
                   <dl v-for="(n,i) in books" :key="i" v-if="i<3" @click="addbooks(i,0)">
                       <dt><img :src="books[i].small_cover" alt=""></dt>
                       <dd>{{books[i].rec_description}}</dd>
                   </dl>
               </div>
               <div class="fenjie"></div>
               <div class="new_book">
                   <div class="new_main">
                       <h2>潜力新作</h2>
                       <p>更多<img src="../../assets/image/more.png" alt=""></p>
                   </div>
               </div>
               <div class="new">
                   <dl class="newb" v-for="(n,i) in books_new" :key="i" v-if="i<3" @click="addbooks(i,1)">
                       <dt><img :src="books_new[i].small_cover"></dt>
                       <dd>
                           <h2>{{books_new[i].title}}</h2>
                           <p>{{books_new[i].rec_description}}</p>
                           <!-- <p>{{books_new[i].}}</p> -->
                           <div class="msg">
                               <p class="p1">{{books_new[i].shortwordsize}}<b>.</b><span>{{books_new[i].updatestatus}}</span></p>
                               <div>
                                   <p v-for="(m,j) in books_new[i].tags.split(';')" :key="j">{{m}}</p>                                  
                               </div>
                           </div>
                       </dd>
                   </dl>
               </div>
               <div class="ad_img"><img src="../../assets/image/banner2.jpg"></div>
               <div class="new_book">
                   <div class="new_main">
                       <h2>主编力推</h2>
                       <p>更多<img src="../../assets/image/more.png" alt=""></p>
                   </div>
               </div>
               <div class="new">
                   <dl class="newb" v-for="(n,i) in books_push" :key="i" v-if="i<3" @click="addbooks(i,3)">
                       <dt><img :src="books_push[i].small_cover"></dt>
                       <dd>
                           <h2>{{books_push[i].title}}</h2>
                           <p>{{books_push[i].rec_description}}</p>
                           <!-- <p>{{books_new[i].}}</p> -->
                           <div class="msg">
                               <p class="p1">{{books_push[i].shortwordsize}}<b>.</b><span>{{books_push[i].updatestatus}}</span></p>
                               <div>
                                   <p v-for="(m,j) in books_push[i].tags.split(';')" :key="j">{{m}}</p>                                  
                               </div>
                           </div>
                       </dd>
                   </dl>
               </div>
               <!-- <div class="fenjie"></div> -->
               <div class="hot">
                   <div class="hot_main">
                       <h2>火热畅销</h2>
                       <p>更多<img src="../../assets/image/more.png" alt=""></p>
                   </div>
               </div>
               <div class="hot_book">
                   <dl v-for="(n,i) in books_hot" :key="i" v-if="i<3" @click="addbooks(i,2)">
                       <dt><img :src="books_hot[i].small_cover" alt=""></dt>
                       <dd>{{books_hot[i].title}}</dd>
                   </dl>
               </div>
          </div>
      </div> 
  </div>
</template>
<script>
import router from "./router";
import "../utils/swiper-3.3.1.min.js";
import axios from "axios";
import {mapState,mapActions} from "vuex"; 
import { Swipe, SwipeItem } from 'mint-ui';
export default {
    data(){
        return {
            books:[],
            books_new:[],
            books_push:[],
            books_hot:[],
            books_weight:[],
            books_flash:[],
            books_main:[],
            books_buy:[],
        }
    },
    computed:{
      ...mapState([
            "nav",
            "navIndex",
            "search",
            "show",
            "banner",
            "mbanner"
        ])
    },
    methods:{
       ...mapActions({
            changeNavIdx:"changeNavIdx",
            Show:"Show",
            // swiperIndex:"swiperIndex",
            // mySwiper:"mySwiper"
        }),
       change(idx){
            this.Show(idx);
            this.changeNavIdx(idx); //store.dispatch.changeNavIdx
        },
        addbooks(i,j){
            axios.defaults.baseURL = "http://39.108.136.59:7000"; 
        //    axios.defaults.baseURL = "http://localhost:7000";
           axios.get("/book")
           .then(res=>{
               var id=res.data[j].list.item[i].id;
               router.push({name:"details",params:{id:id}});
           })
        }
    },
    mounted(){
        // axios.defaults.baseURL = "http://localhost:7000";     // 本地服务器地址 
        axios.defaults.baseURL = "http://39.108.136.59:7000";  
        var that = this;
        axios.get("/book")
            .then(res=>{
               that.books = res.data[0].list.item;
               that.books_new = res.data[1].list.item;
               that.books_push = res.data[3].list.item;
               that.books_hot = res.data[2].list.item;
               that.books_weight = res.data[4].list.item;
               that.books_flash = res.data[5].list.item;
               that.books_main = res.data[6].list.item;
               that.books_buy = res.data[7].list.item;
        })
    }
      
}
</script>
<style>
</style>
