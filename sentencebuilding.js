let sentence={
    subject:"I",
    verb:"am",
    ojject:"coding",
    buildSentence:function(){
        return (this.subject && this.verb && this.ojject)
      ? this.subject + " " + this.verb + " " + this.ojject
      : "Incomplete sentence";
  },
  updateproperty:function(property,val){
      if(property in sentence){
          sentence[property]=val;
          return this.buildSentence()
      }else{
          return "Invalid Property"
      }
  }
}
console.log(sentence.buildSentence())
console.log(sentence.updateproperty("verb"," am learning"))
console.log(sentence.updateproperty("subject", "The cat"))
console.log(sentence.updateproperty("mood","happy "))
console.log(sentence.updateproperty("verb",""))


