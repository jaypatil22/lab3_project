function submitForm () {
    var a = './' + document.getElementById('usertype').value + '.html';
    console.log(a)
    window.open(encodeURI(a),'_self');
}