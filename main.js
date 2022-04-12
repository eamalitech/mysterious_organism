// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // single strand of DNA with 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  //returns specimen and dna 
  const pAequorFactory = (id, dnaBases) => {
    return {
      specimenNum: id,
      dna: dnaBases,
      mutate () {
        let newDna = this.dna;
        let randNum = Math.floor(Math.random() * newDna.length);
        let Base;
        do{
          Base = returnRandBase();
        }while(newDna[randNum] === Base);
        if(newDna[randNum] !== Base){
          newDna[randNum] = Base;
        }    
        this.dna = newDna;
        return this.dna;
      }, 
  //bases that are similar in comparison
      compareDNA (pAequor) {
        let similar = [];
        let counter = 0;
        let percentage;
        for(let i = 0; i<this.dna.length; i++){
          if(this.dna[i] === pAequor.dna[i]){
            counter++;
            similar.push(this.dna[i]);
            
          }
        }
        percentage = (count/this.dna.length)*100;
        return `${this.specimenNum} and ${pAequor.specimenNum} have ${percentage}% DNA in common`;
      },
  //looking for 60% match
      willLikelySurvive () {
        let c = this.dna.filter(num => num==='C').length;
        let g = this.dna.filter(num => num==='G').length;
  
        if(c === undefined){
          c = 0;
        }
        if(g === undefined){
          g = 0;
        }
       //console.log(c)
       //console.log(g)
  
        let cPercentage = (c/this.dna.length) * 100;
        let gPercentage = (g/this.dna.length) * 100;
       // console.log(cPercentage)
        //console.log(gPercentage)
  
        //Checking percentage of C or G being above 60
        if((cPercentage >= 60) || (gPercentage >= 60)){
          return true;
        }else{
          return false;
        }
      },
  
      //complement strand
      complementStrand () {
        let cstrnad = this.dna.map(base => {
          if(base === 'A'){
            return 'T';
          }else if(base === 'T'){
            return 'A';
          }else if(base === 'C'){
            return 'G';
          }else{
            return 'C';
            }
          }
         )
         return complement;
      },
  
    };
  }; 
