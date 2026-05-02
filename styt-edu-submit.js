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
  }).then(function(r){return r.json();}).then(function(d){
    if(d.ok){
      form.style.display='none';
      var ty=document.getElementById('edu-thankyou');
      if(ty)ty.style.display='block';
    }
  }).catch(function(){
    /* Show thank-you even if network check fails — submission likely went through */
    form.style.display='none';
    var ty=document.getElementById('edu-thankyou');
    if(ty)ty.style.display='block';
  });
};
})();
