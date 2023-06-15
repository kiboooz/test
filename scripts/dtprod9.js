var startTime17 = parseInt(localStorage.getItem('startTime17')) || 0;
        var pausedTime17 = 0;
        var timerElement17 = document.getElementById('timer17');
        var intervalId17;

        function updateTimer17() {
            var currentTime17 = Math.floor(Date.now() / 1000); // Waktu saat ini dalam detik
            var elapsedSeconds17 = (currentTime17 - startTime17) + pausedTime17;
            timerElement17.textContent = elapsedSeconds17;
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                }
            };
            xhttp.open('POST', 'dt_prod1.php', true);
            xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhttp.send('&time17=' + (elapsedSeconds17));
        }

        function startTimer17() {
            startTime17 = Math.floor(Date.now() / 1000) - pausedTime17; // Menyimpan waktu awal saat stopwatch dimulai
            pausedTime17 = 0;
            localStorage.setItem('startTime17', startTime17);

            intervalId17 = setInterval(updateTimer17, 1000);
        }

        function stopTimer17() {
            clearInterval(intervalId17);
            pausedTime17 = Math.floor(Date.now() / 1000) - startTime17;
        }

        function resetTimer17() {
            clearInterval(intervalId17);
            startTime17 = 0;
            pausedTime17 = 0;
            localStorage.removeItem('startTime17');
            timerElement17.textContent = 0;
        }

        window.addEventListener('load', function () {
            if (startTime17 !== 0) {
                intervalId17 = setInterval(updateTimer17, 1000);
            }
        });