import router from "../views/router.js";
export default {
    CHANGE(state){ 
          // vuex 注入state  changeMyCount 就是 actionType
    },
    changeNavIdx(state,id){
        state.navIndex = id;
    },
    Show(state,id){
        if(id==1){
            state.show=false;
        }else{
            state.show=true;
        }
    },
    
}