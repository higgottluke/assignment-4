var links = document.querySelectorAll('a')
var i = 0;

function linkhijack () {
for (i =0; i < links.length; i++ ) {
  links[i].addEventListener('click', function (event) {
    event.preventDefault();
  })
}
}
