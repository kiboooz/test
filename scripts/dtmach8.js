var startTime8 = parseInt(localStorage.getItem('startTime8')) || 0;
        var pausedTime8 = 0;
        var timerElement8 = document.getElementById('timer8');
        var intervalId8;

        function updateTimer8() {
            var currentTime8 = Math.floor(Date.now() / 1000); // Waktu saat ini dalam detik
            var elapsedSeconds8 = (currentTime8 - startTime8) + pausedTime8;
            timerElement8.textContent = elapsedSeconds8;
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                }
            };
            xhttp.open('POST', 'dt_mach8.php', true);
            xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhttp.send('&time8=' + (elapsedSeconds8));
        }

        function startTimer8() {
            startTime8 = Math.floor(Date.now() / 1000) - pausedTime8; // Menyimpan waktu awal saat stopwatch dimulai
            pausedTime8 = 0;
            localStorage.setItem('startTime8', startTime8);

            intervalId8 = setInterval(updateTimer8, 1000);
        }

        function stopTimer8() {
            clearInterval(intervalId8);
            pausedTime8 = Math.floor(Date.now() / 1000) - startTime8;
        }

        function resetTimer8() {
            clearInterval(intervalId8);
            startTime8 = 0;
            pausedTime8 = 0;
            localStorage.removeItem('startTime8');
            timerElement8.textContent = 0;
        }

        window.addEventListener('load', function () {
            if (startTime8 !== 0) {
                intervalId8 = setInterval(updateTimer8, 1000);
            }
        });