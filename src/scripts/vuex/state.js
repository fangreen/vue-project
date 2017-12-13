
//  state 唯一数据源   存储组件的数据 
//  获取state  store.state.count 

//  mapState 
// store.state.key
// this.$store.state.key
export default {
    nav:["男生","女生"],
    navIndex:0,
    search:"&#xe68d;",
    show:true,
    footList:[
        {name:"page",txt:"书架",icon:"&#xe602;",path:"/page"},
        {name:"recommend",txt:"精选",icon:"&#xe633;",path:"/recommend"},
        {name:"classify",txt:"分类",icon:"&#xe761;",path:"/classify"},
        {name:"download",txt:"我的",icon:"&#xe60f;",path:"/download"},
    ],
    banner:[
        {banner:"img/banner1.jpg"},
        {banner:"img/banner3.jpg"},
        {banner:"img/banner4.jpg"},

    ],
    mbanner:[
        {mbanner:"http://if.maizibook.com/Upload/Ad/Image/20170619/20170619142042856671.jpg"},
        {mbanner:"http://if.maizibook.com/Upload/Ad/Image/20170619/20170619142121275111.jpg"},
        {mbanner:"http://if.maizibook.com/Upload/Ad/Image/20170619/20170619142150977221.jpg"},        
    ]
}

