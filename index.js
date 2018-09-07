Vue.component('todo-item',{
  props:['todo'],
  template:'<li>{{todo.id}}:{{todo.text}}</li>'
})

var app = new Vue({
  el:'#app',
  data:{
    groceryList:[
      {id:0,text:'apple1'},
      {id:1,text:'apple2'},
      {id:2,text:'apple3'}
    ]
  },
  methods:{
    addmsg:function () {
      console.log(this.groceryList.length);
      // this.groceryList.unshift({id:this.groceryList.length,text:'bb'})
      this.groceryList.push({id:this.groceryList.length,text:'apple'+this.groceryList.length})
    }
  }
})
