function matchesplayperyear(matches){

    const mathesperYear={};
    matches.forEach((match)=>{
        const year= match.season;
        if(year){
            if(mathesperYear[year]){
                mathesperYear[year] ++;
            }
            else{
                mathesperYear[year]=1;
            }
        }
    });
    return mathesperYear;
}
module.exports = matchesplayperyear;