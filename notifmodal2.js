    function showModal4() {
      var modalsElement = document.getElementById("myModal4");
      modalsElement.style.display = "block";

      var blinkInterval = setInterval(frame, 5000);
      var modalsBackgroundColor = modalsElement.style.backgroundColor;

      function frame() {
        if (modalsElement.style.backgroundColor === modalsBackgroundColor) {
          modalsElement.style.backgroundColor = "transparant";
        } else {
          modalsElement.style.backgroundColor = modalsBackgroundColor;
        }
      }
    }

    function showModal5() {
      var modalsElement = document.getElementById("myModal5");
      modalsElement.style.display = "block";

      var blinkInterval = setInterval(frame, 5000);
      var modalsBackgroundColor = modalsElement.style.backgroundColor;

      function frame() {
        if (modalsElement.style.backgroundColor === modalsBackgroundColor) {
          modalsElement.style.backgroundColor = "transparant";
        } else {
          modalsElement.style.backgroundColor = modalsBackgroundColor;
        }
      }
    }

    function showModal6() {
      var modalsElement = document.getElementById("myModal6");
      modalsElement.style.display = "block";

      var blinkInterval = setInterval(frame, 5000);
      var modalsBackgroundColor = modalsElement.style.backgroundColor;

      function frame() {
        if (modalsElement.style.backgroundColor === modalsBackgroundColor) {
          modalsElement.style.backgroundColor = "transparant";
        } else {
          modalsElement.style.backgroundColor = modalsBackgroundColor;
        }
      }
    }

    function hideModal6() {
      var modalsElement = document.getElementById("myModal2");
      modalsElement.style.display = "none";
    }    

    function hideModal5() {
      var modalsElement = document.getElementById("myModal2");
      modalsElement.style.display = "none";
    }    

    function hideModal4() {
      var modalsElement = document.getElementById("myModal");
      modalsElement.style.display = "none";
    }

        localStorage.setItem("showModal4", showModal4.toString());
        localStorage.setItem("showModal5", showModal5.toString());
        localStorage.setItem("showModal6", showModal6.toString());
