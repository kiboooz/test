var startTime16 = parseInt(localStorage.getItem('startTime16')) || 0;
        var pausedTime16 = 0;
        var timerElement16 = document.getElementById('timer16');
        var intervalId16;

        function updateTimer16() {
            var currentTime16 = Math.floor(Date.now() / 1000); // Waktu saat ini dalam detik
            var elapsedSeconds16 = (currentTime16 - startTime16) + pausedTime16;
            timerElement16.textContent = elapsedSeconds16;
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                }
            };
            xhttp.open('POST', 'dt_prod1.php', true);
            xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhttp.send('&time16=' + (elapsedSeconds16));
        }

        function startTimer16() {
            startTime16 = Math.floor(Date.now() / 1000) - pausedTime16; // Menyimpan waktu awal saat stopwatch dimulai
            pausedTime16 = 0;
            localStorage.setItem('startTime16', startTime16);

            intervalId16 = setInterval(updateTimer16, 1000);
        }

        function stopTimer16() {
            clearInterval(intervalId16);
            pausedTime16 = Math.floor(Date.now() / 1000) - startTime16;
        }

        function resetTimer16() {
            clearInterval(intervalId16);
            startTime16 = 0;
            pausedTime16 = 0;
            localStorage.removeItem('startTime16');
            timerElement16.textContent = 0;
        }

        window.addEventListener('load', function () {
            if (startTime16 !== 0) {
                intervalId16 = setInterval(updateTimer16, 1000);
            }
        });