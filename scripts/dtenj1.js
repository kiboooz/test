 var time21 = 0;
          var timerInterval21;

          function startCounter21() {
            timerInterval21 = setInterval(function() {
              time21++;
              document.getElementById("counter21").innerHTML = time21 ;
              var xhttp = new XMLHttpRequest();
                
              xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
              }
              };
              xhttp.open('POST', 'dt_eng1.php', true);
              xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
              xhttp.send('&time21=' + time21 );

            }, 1000);
          }

          function stopCounter21() {
            clearInterval(timerInterval21);

          }

          function resetCounter21() {
            time21 = 0;
            document.getElementById("counter21").innerHTML = time21 ;

          }