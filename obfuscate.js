function obfuscate(ccn){
    let obfuscatedCCN = []
    let reversed = ccn.split("").reverse()
    let count = 0;
    console.log(reversed)
    for(let i in reversed){
        if(!isNaN(parseInt(reversed[i])) && count < 4  ){
            obfuscatedCCN.push(reversed[i])
            count++;
        }else if (reversed[i].match(/\s/)){
            obfuscatedCCN.push(reversed[i])
        }else{
            obfuscatedCCN.push("*");
        }
    }
    return obfuscatedCCN.reverse().join("");
};

module.exports = obfuscate




