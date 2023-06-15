 var time24 = 0;
          var timerInterval24;

          function startCounter24() {
            timerInterval24 = setInterval(function() {
              time24++;
              document.getElementById("counter24").innerHTML = time24 ;
              var xhttp = new XMLHttpRequest();
                
              xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
              }
              };
              xhttp.open('POST', 'dt_eng4.php', true);
              xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
              xhttp.send('&time24=' + time24 );

            }, 1000);
          }

          function stopCounter24() {
            clearInterval(timerInterval24);

          }

          function resetCounter24() {
            time24 = 0;
            document.getElementById("counter24").innerHTML = time24 ;

          }