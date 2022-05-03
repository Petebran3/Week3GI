//easy
function run(x){
    return `todays exerxise: ${x}`
    }
    console.log(run('running'))
    
    function swim(x){
        return `todays exercise: ${x}`
    }
    console.log(swim('swimming'))
    
    //stop here
    
    //medium
    
    function cutPizzaSlices(people) {
        let x = 8 / people
        return `each person gets ${x} slices of pizza`
    }
    console.log(cutPizzaSlices(2));
    console.log(cutPizzaSlices(3));

    //stop here

   
 
    //hard

    class classClosure {
        SSN;
         constructor(name){
           this.name="pete";
          }
           name(){
                console.log("Pete")
          }
          setSSN(x){
          }
          getSocialSecurityNumber(){
          }
      }
      let myClsr = new classClosure();
      myClsr.setSSN("000-00-0000");
      console.log(myClsr.getSocialSecurityNumber());
          
  
  
      //stop here
  
  
  
      
      
      //very hard
      class Person {
          constructor(name, age, job){
              this.name=name;
              this.age=age;
              this.job=job;
          }
          exercise(){
              console.log("whatever we want")
          }
          fetchJob(){
              console.log(`this is ${this.name} and their job is ${this.job}`)
          }
      
      }
      let person1 = new person("pete", 23, "developer")
      person1.exercise();
      person1.fetchJob();
  
    class Programmer {
        constructor(name, age, job, language){
            this.name=name;
            this.age=age;
            this,job=job;
            this.language=language;
            this.busy=true
        }
    }
    let Programmer1= new Programmer(person1.name,person1.age, person1.job, "english");
    console.log(Programmer1);
   // stop here

    
    