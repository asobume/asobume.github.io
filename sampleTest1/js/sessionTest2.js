jQuery(function () {
  let webStorage = function () {
    if (sessionStorage.getItem('access')) {
      //second
      console.log('second access');
      
    } else {
      //first
      sessionStorage.setItem('access', 0);
      console.log('welcome');
    }
  }
  webStorage();
});

//data set
sessionStorage.setItem('key', 'value');
//data get
sessionStorage.getItem('key');