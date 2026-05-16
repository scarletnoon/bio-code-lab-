const codonTable={
    "ATG":"M","GTG":"V","GAG":"E","GTC":"V",
    "TTC":"F","AAA":"K","CCC":"P","GGG":"G",
    "TGA":"STOP","TAA":"STOP","TAG":"STOP",
}
function runAnalysis(){
alert("running!")
    const dna=document.getElementById("dnaInput").value.
    toUpperCase();
    //count G and C bases
    const gCount=(dna.match(/G/g)||[]).length;
    const cCount=(dna.match(/c/g)||[]).length;
    const total=dna.length;
    if(total===0){
        alert("please enter a sequence!");
        return;
    }
    //calculation
    const gcContent= ((gCount +cCount)/total) * 100;
    //update the screen
    document.getElementById("gc").innerText=gcContent. toFixed(2);
    if(gcContent >50){
        document.getElementById("status").innerText="Highstability sequence";
        document.getElementById("status").style.color="#00ff00";//Green
    }else{
        document.getElementById("status").innerText="lowstability sequence";
        document.getElementById("status").style.color="#ff4500"//orange
    }
   let protein=" ";
   for(let i= 0; i<dna.length; i += 3){
       let codon=dna.substring(i, i,+ 3)
       protein +=(codonTable[codon]|| "?")+"_"
   }
    //Mutation Detection Logic
    const SicklecellRef="GAG";//Healthy
    const patientSegment=dna.substring(0,3)
    if(patientSegment==="GTG")
        document.getElementById("status").innerText="MUTATION:Sickle Cell Detected!";
        document.getElementById("status").style.color="red";
        document.getElementById("status").style.fontWeight="bold";
        //send the DNA to the visualizer
        const ticker=document.getElementById("dnaScroll");
        ticker.innerText=dna+" " + dna;//Reapts for a longer scroll
        document.getElementById("dnaScroll").innerText=dna+" . "+dna+" . "+dna;
setTimeout(()=>{
 document.getElementById("protein").innerText= "protein"+ protein;
  }, 100)
} 
