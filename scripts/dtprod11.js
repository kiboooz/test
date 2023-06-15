var startTime19 = parseInt(localStorage.getItem('startTime19')) || 0;
        var pausedTime19 = 0;
        var timerElement19 = document.getElementById('timer19');
        var intervalId19;

        function updateTimer19() {
            var currentTime19 = Math.floor(Date.now() / 1000); // Waktu saat ini dalam detik
            var elapsedSeconds19 = (currentTime19 - startTime19) + pausedTime19;
            timerElement19.textContent = elapsedSeconds19;
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                }
            };
            xhttp.open('POST', 'dt_prod1.php', true);
            xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhttp.send('&time19=' + (elapsedSeconds19));
        }

        function startTimer19() {
            startTime19 = Math.floor(Date.now() / 1000) - pausedTime19; // Menyimpan waktu awal saat stopwatch dimulai
            pausedTime19 = 0;
            localStorage.setItem('startTime19', startTime19);

            intervalId19 = setInterval(updateTimer19, 1000);
        }

        function stopTimer19() {
            clearInterval(intervalId19);
            pausedTime19 = Math.floor(Date.now() / 1000) - startTime19;
        }

        function resetTimer19() {
            clearInterval(intervalId19);
            startTime19 = 0;
            pausedTime19 = 0;
            localStorage.removeItem('startTime19');
            timerElement19.textContent = 0;
        }

        window.addEventListener('load', function () {
            if (startTime19 !== 0) {
                intervalId19 = setInterval(updateTimer19, 1000);
            }
        });