 var time25 = 0;
          var timerInterval25;

          function startCounter25() {
            timerInterval25 = setInterval(function() {
              time25++;
              document.getElementById("counter25").innerHTML = time25 ;
              var xhttp = new XMLHttpRequest();
                
              xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
              }
              };
              xhttp.open('POST', 'dt_eng5.php', true);
              xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
              xhttp.send('&time25=' + time25 );

            }, 1000);
          }

          function stopCounter25() {
            clearInterval(timerInterval25);

          }

          function resetCounter25() {
            time25 = 0;
            document.getElementById("counter25").innerHTML = time25 ;

          }