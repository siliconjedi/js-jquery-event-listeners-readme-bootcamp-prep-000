//define functions here

function getIt() {
  $('p').on("click", function(){
    alert('Hey!')
  });
}

function frameIt(){
  $('img').on("load", function(){
    this.className = 'tasty';
    alert('loaded');
  });
}

function pressIt(){
  $('#typing').on("keydown", function(key){
    if (key.which === 71) {
       alert('fdkdffd')
    }
  });
}

function submitIt(){
  $(":submit").on("submit",function(){
    alert('sdsdsdsd')
  })
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
