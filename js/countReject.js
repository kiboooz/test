    var counters = [0, 0, 0, 0, 0, 0, 0, 0];
    var prevCounters = [];

    // Mengambil nilai counter dari local storage saat halaman dimuat
    if (localStorage.getItem("counters")) {
      counters = JSON.parse(localStorage.getItem("counters"));
      updateCounters();
    }

    function incrementCounter(index) {
      prevCounters.push(counters.slice()); // Menyimpan state sebelumnya
      counters[index]++;
      updateCounters();
      saveCounters();
    }

    function resetCounters() {
      saveCounters();
      counters = [0, 0, 0, 0, 0, 0, 0, 0,];
      prevCounters = [];
      updateCounters();
      localStorage.removeItem("counters");
    }

    function undo() {
      if (prevCounters.length > 0) {
        counters = prevCounters.pop(); // Mengembalikan state sebelumnya
        updateCounters();
        saveCounters();
      }
    }

    function updateCounters() {
      document.getElementById("counters1").textContent = counters[0];
      document.getElementById("counters2").textContent = counters[1];
      document.getElementById("counters3").textContent = counters[2];
      document.getElementById("counters4").textContent = counters[3];
      document.getElementById("counters5").textContent = counters[4];
      document.getElementById("counters6").textContent = counters[5];
      document.getElementById("counters7").textContent = counters[6];
      document.getElementById("counters8").textContent = counters[7];

    }

    // Menyimpan nilai counter ke local storage
    function saveCounters() {
      localStorage.setItem("counters", JSON.stringify(counters));

      var xhr = new XMLHttpRequest();
      xhr.open("POST", "rejectprod.php", true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          console.log(xhr.responseText);
        }
      };
      var data = "counters1=" + counters[0] + "&counters2=" + counters[1] + "&counters3=" + counters[2] + "&counters4=" +
        counters[3] + "&counters5=" + counters[4] + "&counters6=" + counters[5] + "&counters7=" + counters[6] + "&counters8=" + counters[7];
      xhr.send(data);
    }
