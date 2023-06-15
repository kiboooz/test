 var time23 = 0;
          var timerInterval23;

          function startCounter23() {
            timerInterval23 = setInterval(function() {
              time23++;
              document.getElementById("counter23").innerHTML = time23 ;
              var xhttp = new XMLHttpRequest();
                
              xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
              }
              };
              xhttp.open('POST', 'dt_eng3.php', true);
              xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
              xhttp.send('&time23=' + time23 );

            }, 1000);
          }

          function stopCounter23() {
            clearInterval(timerInterval23);

          }

          function resetCounter23() {
            time23 = 0;
            document.getElementById("counter23").innerHTML = time23 ;

          }