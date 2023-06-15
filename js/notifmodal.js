    function showModal() {
      var modalsElement = document.getElementById("myModal");
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

    function showModal2() {
      var modalsElement = document.getElementById("myModal2");
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

    function showModal3() {
      var modalsElement = document.getElementById("myModal3");
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

    function hideModal3() {
      var modalsElement = document.getElementById("myModal3");
      modalsElement.style.display = "none";
    }   

    function hideModal2() {
      var modalsElement = document.getElementById("myModal2");
      modalsElement.style.display = "none";
    }    

    function hideModal() {
      var modalsElement = document.getElementById("myModal");
      modalsElement.style.display = "none";
    }

        localStorage.setItem("showModal", showModal.toString());
        localStorage.setItem("showModal2", showModal2.toString());
        localStorage.setItem("showModal3", showModal3.toString());
