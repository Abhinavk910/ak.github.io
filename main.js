(function (){
  const filterBtn = document.querySelectorAll(".filter-btn")

  filterBtn.forEach(function(btn){
    btn.addEventListener("click", function(e){
      e.preventDefault();
      const value = e.target.dataset.filter;
      console.log(value);
      const items = document.querySelectorAll(".gallery-item")
      console.log(items);
      items.forEach(function(item){
        if (value === "all"){
          item.style.display = "flex";
        }
        else{
          if(item.classList.contains(value)){
            item.style.display = "flex";
          }
          else{
            item.style.display = 'none';
          }
        }
      });
    });
  });
})();


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("btn-group");
var btns = btnContainer.getElementsByClassName("cta");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
