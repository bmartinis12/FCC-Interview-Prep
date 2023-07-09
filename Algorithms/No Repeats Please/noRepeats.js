function permAlone(str) {
  var re=/(.)\1/;
  function perm(p,o){
    if(o.length){
      let sum=0;
      for(let i = 0; i < p.length + 1; i++){
        sum += perm(p.slice(0,i).concat(o[0]).concat(p.slice(i)),o.slice(1));
      }
      return sum;
    } else {
      return !re.test(p.join(''));
    }
  }
  return perm([],str.split(''));
}

permAlone("aab");
