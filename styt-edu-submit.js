(function(){
window.stytEduSubmit=function(e){
  e.preventDefault();
  var form=document.getElementById('edu-form');
  var name=form.querySelector('input[type="text"]').value.trim();
  var email=form.querySelector('input[type="email"]').value.trim();
  if(!email||email.indexOf('@')===-1)return;
  fetch('https://formspree.io/f/xqenajza',{
    method:'POST',
    headers:{'Content-Type':'application/json','Accept':'application/json'},
    body:JSON.stringify({name:name,email:email})
  });
  form.style.display='none';
  document.getElementById('edu-thankyou').style.display='block';
};
})();
