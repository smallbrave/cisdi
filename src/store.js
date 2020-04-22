//vuex 文件

import Store from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Store);

var store = new Store.Store({
    state: {
        list: []
    },
    mutations: {
        //设置共享数据
        setItems(state, data) {
            state.list = data.list;
            console.log(state.list);
        },

        //对共享数据进行末尾添加
        addItem(state, item) {
            state.list.push(item)
            console.log(state.list);
        },

        //对共享数据进行指定位置插入
        insertItem(state, item) {
            var index = item.index;
            delete item.index;
            state.list.splice(index, 0, item);
            console.log(state.list);
        },

        //删除指定的数据
        deleteItem(state, index) {
            state.list.splice(index, 1);
            console.log(state.list);
        },

        //对数据项进行排序
        sortItems(state) {
            state.list.sort((a, b) => {
                return a.id - b.id;
            })
            console.log(state.list);
        }
    },
    actions: {

        //异步操作，获取数据
        getList({ commit }) {
            axios.get('/list.json')
                .then((res) => {
                    commit('setItems', res.data);
                }).catch((err) => {
                    console.log(err);
                })
        }
    }
})

export default store;