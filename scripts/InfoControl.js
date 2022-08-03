let ChangeStatus = localStorage.getItem('hidden_content');

if (ChangeStatus == 'show') {
  hc_container.style.opacity = '1';
  hc_logo.style.opacity = '1';
  console.log("Hidding secret content now");
}

document.addEventListener('keydown', function(event){

  ChangeStatus = localStorage.getItem('hidden_content');

  if (event.ctrlKey) {

    console.log(ChangeStatus)
    if (ChangeStatus != 'show') {

      hc_container.style.opacity = '1';
      hc_logo.style.opacity = '1';
      localStorage.setItem('hidden_content', 'show');
      console.log("Hidding secret content now");
    } else if (ChangeStatus != 'hide') {

      hc_container.style.opacity = '0';
      hc_logo.style.opacity = '0';
      localStorage.setItem('hidden_content', 'hide');
      console.log("Showing secret content now");
    }
  }
});
