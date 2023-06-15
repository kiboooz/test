  var startTime = parseInt(localStorage.getItem('startTime')) || 0;
        var pausedTime = 0;
        var timerElement = document.getElementById('timer');
        var intervalId;

        function updateTimer() {
            var currentTime = Math.floor(Date.now() / 1000); // Waktu saat ini dalam detik
            var elapsedSeconds = (currentTime - startTime) + pausedTime;
            timerElement.textContent = elapsedSeconds;
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                }
            };
            xhttp.open('POST', 'dt_mach.php', true);
            xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhttp.send('&time=' + (elapsedSeconds));
        }

        function startTimer() {
            startTime = Math.floor(Date.now() / 1000) - pausedTime; // Menyimpan waktu awal saat stopwatch dimulai
            pausedTime = 0;
            localStorage.setItem('startTime', startTime);

            intervalId = setInterval(updateTimer, 1000);
        }

        function stopTimer() {
            clearInterval(intervalId);
            pausedTime = Math.floor(Date.now() / 1000) - startTime;
        }

        function resetTimer() {
            clearInterval(intervalId);
            startTime = 0;
            pausedTime = 0;
            localStorage.removeItem('startTime');
            timerElement.textContent = 0;
        }

        window.addEventListener('load', function () {
            if (startTime !== 0) {
                intervalId = setInterval(updateTimer, 1000);
            }
        });