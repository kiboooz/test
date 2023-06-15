var startTime20 = parseInt(localStorage.getItem('startTime20')) || 0;
        var pausedTime20 = 0;
        var timerElement20 = document.getElementById('timer20');
        var intervalId20;

        function updateTimer20() {
            var currentTime20 = Math.floor(Date.now() / 1000); // Waktu saat ini dalam detik
            var elapsedSeconds20 = (currentTime20 - startTime20) + pausedTime20;
            timerElement20.textContent = elapsedSeconds20;
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                }
            };
            xhttp.open('POST', 'dt_prod1.php', true);
            xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhttp.send('&time20=' + (elapsedSeconds20));
        }

        function startTimer20() {
            startTime20 = Math.floor(Date.now() / 1000) - pausedTime20; // Menyimpan waktu awal saat stopwatch dimulai
            pausedTime20 = 0;
            localStorage.setItem('startTime20', startTime20);

            intervalId20 = setInterval(updateTimer20, 1000);
        }

        function stopTimer20() {
            clearInterval(intervalId20);
            pausedTime20 = Math.floor(Date.now() / 1000) - startTime20;
        }

        function resetTimer20() {
            clearInterval(intervalId20);
            startTime20 = 0;
            pausedTime20 = 0;
            localStorage.removeItem('startTime20');
            timerElement20.textContent = 0;
        }

        window.addEventListener('load', function () {
            if (startTime20 !== 0) {
                intervalId20 = setInterval(updateTimer20, 1000);
            }
        });