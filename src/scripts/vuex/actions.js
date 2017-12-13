export default {
   change({commit}){     //context ==  {commit:commit}  
       commit("CHANGE");               // context.commit     commit
   },
   changeNavIdx({commit},id){
       commit("changeNavIdx",id);
   },
    Show({commit},id){     //context ==  {commit:commit}  
        commit("Show",id);               // context.commit     commit
    },
    
}