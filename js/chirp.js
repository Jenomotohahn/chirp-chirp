function chirp(n){
  // FIX ME
  // let newChirp = 'chirp';
  if(n === 0){
    return '';
  }
  // newChirp = newChirp + ' chirp';
  
  return 'chirp ' + chirp(--n);
}

$(document).ready(function(){
  $("#result").html(chirp(3));
});