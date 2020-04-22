//数据末尾添加及排序
<template>
<div id="doing">
    <button @click="add">新增</button>
    <button @click="sortIn">随机排序</button>
</div>
</template>
<script>
export default {
    props: ['index'],
    methods: {
      //末尾添加数据；被触发时完成对store中的方法进行一个触发；  
      add(){
          var item = {
              id: this.index + 101,
              name: "嘻嘻哈哈",
              isHidden: false
          };
          console.log("you");
          this.$store.commit('addItem',item);

      },
     //数据项排序；被触发时完成对store中的方法进行一个触发；
      sortIn(){
          this.$store.commit('sortItems');
      }  
    },
}
</script>
<style scoped>
#doing {
    width: 240px;
    margin: 0 auto;
}
button {
    margin: 10px 40px 10px -20px;
    display: inline-block;
    width: 100px;
}

</style>