async function getProfile(){
  const username=document.getElementById("username").value;
  con result = document.getElementById("result");
  if(!username){
    result.innerHTML="Enter username!";
    return;
  }
  const res=await fetch('http://api.github.com/users/$(username}');
  const user=await res.json();
  result.innerHTML=
    <h2>{(user.login}</h2>
<p>Repos:${user.public_repose}</p>
  <p>Followers:${user.followers}</p>
  <p><b>Score:${user.public_repose*5}/100</b></p>
  ;
}
