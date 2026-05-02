(function(){
window.stytEduSubmit=function(e){
  e.preventDefault();
  var form=document.getElementById('edu-form');
  var name=form.querySelector('input[type="text"]').value.trim();
  var email=form.querySelector('input[type="email"]').value.trim();
  if(!email||email.indexOf('@')===-1)return;

  /* Hidden iframe form — bypasses CORS/503 on fetch submissions */
  var target='styt-edu-iframe-'+Date.now();
  var iframe=document.createElement('iframe');
  iframe.name=target;iframe.style.display='none';
  document.body.appendChild(iframe);

  var gform=document.createElement('form');
  gform.method='POST';
  gform.action='https://docs.google.com/forms/d/e/1FAIpQLSe4oZe2uim-brMtPoh8LjPibqGWNpsDOvH9AzhtMlG8kjKnEw/formResponse';
  gform.target=target;gform.style.display='none';

  var n=document.createElement('input');
  n.type='hidden';n.name='entry.2005620554';n.value=name;
  var em=document.createElement('input');
  em.type='hidden';em.name='entry.1045781291';em.value=email;

  gform.appendChild(n);gform.appendChild(em);
  document.body.appendChild(gform);
  gform.submit();

  form.style.display='none';
  document.getElementById('edu-thankyou').style.display='block';

  setTimeout(function(){
    if(iframe.parentNode)iframe.parentNode.removeChild(iframe);
    if(gform.parentNode)gform.parentNode.removeChild(gform);
  },5000);
};
})();
