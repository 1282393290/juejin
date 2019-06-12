//活动页面的数据
export default{
  namespaced:true,
  state: {
    maringList:[]
  },

  mutations: {
    SETMARING(state,list){
      state.maringList = list;
    }
  }
}
