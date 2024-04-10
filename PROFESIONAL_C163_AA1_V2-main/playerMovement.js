AFRAME.registerComponent("player-movement", {
    init: function () {
      this.walk();
    },
    walk: function () {
      window.addEventListener("keydown", (e) => {
        // Añadir la condición para reproducir sonido
        if(
          e.key==="ArrowUp"||
          e.key==="ArrowDown"||
          e.key==="ArrowRight"||
          e.key==="ArrowLeft"
        ){
          var entity=document.querySelector("#sound2");
          entity.components.sound.playSound();
        }

      });
    },
  });


  
