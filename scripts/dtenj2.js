 var time22 = 0;
          var timerInterval22;

          function startCounter22() {
            timerInterval22 = setInterval(function() {
              time22++;
              document.getElementById("counter22").innerHTML = time22 ;
              var xhttp = new XMLHttpRequest();
                
              xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
              }
              };
              xhttp.open('POST', 'dt_eng2.php', true);
              xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
              xhttp.send('&time22=' + time22 );

            }, 1000);
          }

          function stopCounter22() {
            clearInterval(timerInterval22);

          }

          function resetCounter22() {
            time22 = 0;
            document.getElementById("counter22").innerHTML = time22 ;

          }