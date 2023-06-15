    var counterElements = {
      counter1: document.querySelector('.counter1')

    };

    var counters = {
      counter1: parseInt(localStorage.getItem('counter1')) || 0

    };

    var intervalIds = {
      counter1: null,

    };

    function updateCounter(counterName) {
      counterElements[counterName].textContent = counters[counterName];
      var xhttp = new XMLHttpRequest();


      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          console.log(this.responseText);
        }
      };
      xhttp.open('POST', 'dt_mach.php', true);
      xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhttp.send('&time=' + (counters['counter1']));

    }

    function startCounter(counterName) {
      if (!intervalIds[counterName]) {
        intervalIds[counterName] = setInterval(function () {
          counters[counterName]++;
          updateCounter(counterName);
          localStorage.setItem(counterName, counters[counterName]);
        }, 1000);
        localStorage.setItem(`${counterName}_isRunning`, 'true');
      }
    }

    function stopCounter(counterName) {
      clearInterval(intervalIds[counterName]);
      intervalIds[counterName] = null;
      localStorage.setItem(`${counterName}_isRunning`, 'false');
    }

    function resetCounter(counterName) {
      clearInterval(intervalIds[counterName]);
      intervalIds[counterName] = null;
      counters[counterName] = 0;
      updateCounter(counterName);
      localStorage.setItem(counterName, counters[counterName]);
      localStorage.setItem(`${counterName}_isRunning`, 'false');
    }

    window.onload = function () {
      for (var counterName in counterElements) {
        if (localStorage.getItem(`${counterName}_isRunning`) === 'true') {
          counters[counterName] = parseInt(localStorage.getItem(counterName));
          updateCounter(counterName);
          startCounter(counterName);
        } else {
          updateCounter(counterName);
        }
      }
    };