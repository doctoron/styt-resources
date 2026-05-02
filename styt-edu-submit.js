(function(){
window.stytEduSubmit=function(e){
  e.preventDefault();
  var form=document.getElementById('edu-form');
  var name=form.querySelector('input[type="text"]').value.trim();
  var email=form.querySelector('input[type="email"]').value.trim();
  if(!email||email.indexOf('@')===-1)return;
  var data=new FormData();
  data.append('entry.2005620554',name);
  data.append('entry.1045781291',email);
  fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSe4oZe2uim-brMtPoh8LjPibqGWNpsDOvH9AzhtMlG8kjKnEw/formResponse',{method:'POST',mode:'no-cors',body:data});
  form.style.display='none';
  document.getElementById('edu-thankyou').style.display='block';
};
})();
