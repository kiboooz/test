var startTime10 = parseInt(localStorage.getItem('startTime10')) || 0;
        var pausedTime10 = 0;
        var timerElement10 = document.getElementById('timer10');
        var intervalId10;

        function updateTimer10() {
            var currentTime10 = Math.floor(Date.now() / 1000); // Waktu saat ini dalam detik
            var elapsedSeconds10 = (currentTime10 - startTime10) + pausedTime10;
            timerElement10.textContent = elapsedSeconds10;
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                }
            };
            xhttp.open('POST', 'dt_prod1.php', true);
            xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhttp.send('&time10=' + (elapsedSeconds10));
        }

        function startTimer10() {
            startTime10 = Math.floor(Date.now() / 1000) - pausedTime10; // Menyimpan waktu awal saat stopwatch dimulai
            pausedTime10 = 0;
            localStorage.setItem('startTime10', startTime10);

            intervalId10 = setInterval(updateTimer10, 1000);
        }

        function stopTimer10() {
            clearInterval(intervalId10);
            pausedTime10 = Math.floor(Date.now() / 1000) - startTime10;
        }

        function resetTimer10() {
            clearInterval(intervalId10);
            startTime10 = 0;
            pausedTime10 = 0;
            localStorage.removeItem('startTime10');
            timerElement10.textContent = 0;
        }

        window.addEventListener('load', function () {
            if (startTime10 !== 0) {
                intervalId10 = setInterval(updateTimer10, 1000);
            }
        });