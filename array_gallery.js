const panels = document.querySelectorAll(".panel");

function toggleOpen() {
   const thisPanel = this;
   panels.forEach(panel => {
      if(panel != thisPanel){
         if(panel.classList.contains("open")){
            panel.classList.remove("open");
            panel.classList.remove("open-active");
         }
      }
   })
   this.classList.toggle("open");
   this.classList.toggle("open-active");
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen));

