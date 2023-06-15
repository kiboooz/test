var startTime15 = parseInt(localStorage.getItem('startTime15')) || 0;
        var pausedTime15 = 0;
        var timerElement15 = document.getElementById('timer15');
        var intervalId15;

        function updateTimer15() {
            var currentTime15 = Math.floor(Date.now() / 1000); // Waktu saat ini dalam detik
            var elapsedSeconds15 = (currentTime15 - startTime15) + pausedTime15;
            timerElement15.textContent = elapsedSeconds15;
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                }
            };
            xhttp.open('POST', 'dt_prod1.php', true);
            xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhttp.send('&time15=' + (elapsedSeconds15));
        }

        function startTimer15() {
            startTime15 = Math.floor(Date.now() / 1000) - pausedTime15; // Menyimpan waktu awal saat stopwatch dimulai
            pausedTime15 = 0;
            localStorage.setItem('startTime15', startTime15);

            intervalId15 = setInterval(updateTimer15, 1000);
        }

        function stopTimer15() {
            clearInterval(intervalId15);
            pausedTime15 = Math.floor(Date.now() / 1000) - startTime15;
        }

        function resetTimer15() {
            clearInterval(intervalId15);
            startTime15 = 0;
            pausedTime15 = 0;
            localStorage.removeItem('startTime15');
            timerElement15.textContent = 0;
        }

        window.addEventListener('load', function () {
            if (startTime15 !== 0) {
                intervalId15 = setInterval(updateTimer15, 1000);
            }
        });