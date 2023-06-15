var startTime6 = parseInt(localStorage.getItem('startTime6')) || 0;
        var pausedTime6 = 0;
        var timerElement6 = document.getElementById('timer3');
        var intervalId6;

        function updateTimer6() {
            var currentTime6 = Math.floor(Date.now() / 1000); // Waktu saat ini dalam detik
            var elapsedSeconds6 = (currentTime6 - startTime6) + pausedTime6;
            timerElement6.textContent = elapsedSeconds6;
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                }
            };
            xhttp.open('POST', 'dt_mach6.php', true);
            xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhttp.send('&time6=' + (elapsedSeconds6));
        }

        function startTimer6() {
            startTime6 = Math.floor(Date.now() / 1000) - pausedTime6; // Menyimpan waktu awal saat stopwatch dimulai
            pausedTime6 = 0;
            localStorage.setItem('startTime6', startTime6);

            intervalId6 = setInterval(updateTimer6, 1000);
        }

        function stopTimer6() {
            clearInterval(intervalId6);
            pausedTime6 = Math.floor(Date.now() / 1000) - startTime6;
        }

        function resetTimer6() {
            clearInterval(intervalId6);
            startTime6 = 0;
            pausedTime6 = 0;
            localStorage.removeItem('startTime6');
            timerElement6.textContent = 0;
        }

        window.addEventListener('load', function () {
            if (startTime6 !== 0) {
                intervalId6 = setInterval(updateTimer6, 1000);
            }
        });