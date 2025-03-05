let sentencebuilder={
    subject:"I",
    verb:"am",
    object:"coding",
   buildsentence(){
       if(this.subject && this.verb && this.object)
       return this.subject+" "+this.verb+" "+this.object;
       else return "Incomplete Sentence"
   },
   updateproperty(propert,value){
       if(this.hasOwnProperty(propert)){
           this[propert]=value;
           return this.buildsentence()
       }else{
           return "Invalid Property"
       }
   }
}
console.log(sentencebuilder.buildsentence())
console.log(sentencebuilder.updateproperty("verb","am learning"))
console.log(sentencebuilder.updateproperty("subject","The cat"))
console.log(sentencebuilder.updateproperty("verb",""))
console.log(sentencebuilder.updateproperty("hai","am not"))
