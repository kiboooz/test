var startTime24 = parseInt(localStorage.getItem('startTime24')) || 0;
        var pausedTime24 = 0;
        var timerElement24 = document.getElementById('timer24');
        var intervalId24;

        function updateTimer24() {
            var currentTime24 = Math.floor(Date.now() / 1000); // Waktu saat ini dalam detik
            var elapsedSeconds24 = (currentTime24 - startTime24) + pausedTime24;
            timerElement24.textContent = elapsedSeconds24;
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                }
            };
            xhttp.open('POST', 'dt_eng4.php', true);
            xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhttp.send('&time24=' + (elapsedSeconds24));
        }

        function startTimer24() {
            startTime24 = Math.floor(Date.now() / 1000) - pausedTime24; // Menyimpan waktu awal saat stopwatch dimulai
            pausedTime24 = 0;
            localStorage.setItem('startTime24', startTime24);

            intervalId24 = setInterval(updateTimer24, 1000);
        }

        function stopTimer24() {
            clearInterval(intervalId24);
            pausedTime24 = Math.floor(Date.now() / 1000) - startTime24;
        }

        function resetTimer24() {
            clearInterval(intervalId24);
            startTime24 = 0;
            pausedTime24 = 0;
            localStorage.removeItem('startTime24');
            timerElement24.textContent = 0;
        }

        window.addEventListener('load', function () {
            if (startTime24 !== 0) {
                intervalId24 = setInterval(updateTimer24, 1000);
            }
        });