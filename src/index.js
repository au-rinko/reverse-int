module.exports = function reverse (n) {
    let res = '';
    const str = n.toString();
    if(n < 0){
        for(let i=str.length; i > 1; i--){
            if(str[0] == 0){
                break;
            }
            res += str[i-1];
          };
          console.log(res);
    }else{
        for(let i=str.length; i > 0; i--){
            if(str[0] == 0){
                break;
            }
            res += str[i-1];
          }; 
    }
    
    
    return res;
}
