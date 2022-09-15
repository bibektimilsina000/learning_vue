const app = Vue.createApp({

  data(){
    return{
      inputGoal:"",
      goals:[],

    }
  },
  methods:{
    addItem(){

      if (this.inputGoal!='') {
        this.goals.push(this.inputGoal);
        this.inputGoal='';
      
      }
       
        
         
     
    },
    removeItem(index){

      this.goals.splice(index,1);

      // splice(index,number of to remove item) is used to remove item from array 
       
    }
  }
});


app.mount("#user-goals");