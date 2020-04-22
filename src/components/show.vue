//展示页面
<template>
    <div id="show">
        <ul>
            <!-- 通过数据项的isHidden属性是否为true，来实现li的样式改变
            因为后续需要让'展开'水平排列，所以改变li的样式的inline-block即可实现 -->
            <li v-for="(item,index) in list" :key="item.id" 
            :class="!item.isHidden?'showBlock':'showInline'">
                <div class="detail" v-show="!item.isHidden">
                    <p class="content">{{item.name}}</p>
                    <p class="doing">
                        <span @click="insert(index)">插入</span>
                        <span @click="toggle(index)">折叠</span>
                        <span @click="deleteThis(index)">删除</span>                    
                    </p>
                </div>
                <span v-show="item.isHidden" @click="toggle(index)">展开</span>
            </li>

            <doing :index="10"></doing>
        </ul>      
    </div>
</template>

<script>
import doing from './doing.vue';
export default {
  components:{
        doing
  },
  data() {
    return {
        list: []
    } 
  },
  mounted() {
      //挂载组件的时候，对数据进行获取触发
      this.$store.dispatch('getList')
      this.list = this.$store.state.list
  },
  watch: {
      //监听数据的变化，变化时指向特定的操作
    '$store.state.list'(){
        console.log("bianhuanl");
        this.list = this.$store.state.list;
    }  
  },
  methods: {
      //触发插入操作时，来对store中的函数进行触发
      
      insert(index){
          //指定位置插入
          var i = this.list.length;
          var item = {
              index: index,
              id: i + 20,
              name: "测试元素" + (i + 1),
              isHidden: false
          }
          this.$store.commit('insertItem',item);
      },
      
      //切换数据项的isHidden属性，来实现元素的折叠与展开
      toggle(index){
          this.list[index].isHidden = !this.list[index].isHidden;
      },

      //删除指定数据
      deleteThis(index){
          this.$store.commit('deleteItem',index);
      }
  },

}
</script>

 
<style>
#show { 
    width: 1000px;
    margin: 84px auto;
    border: 2px solid #ccc;
    text-align: left;
}

.showBlock{
    display: block;
    margin-left: 10px;
}

.showInline {
    display: inline-block;
    margin: 0 0 0 10px;
}
#show .detail {
    display: flex;
    align-items: center;
    margin: 2px;
    border: 1px solid #ccc;
    min-height: 100px;
    max-height: 100%;
}

#show  li > span {
    display: inline-block;
    margin: 2px;
    width: 40px;
    border: 1px solid #ccc;
} 

#show .content {
    text-align: center;
    height: 24px;
    line-height: 25px;
    flex: 2;
}

#show .doing {
    display: flex;
    flex-direction: column;
}

.doing span {
    margin: 2px;
    display: inline-block;
    width: 60px;
    text-align: center;
    border: 1px solid #ccc;
}

button:hover,
span:hover{
    cursor: pointer;
}
</style>