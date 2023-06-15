var startTime12 = parseInt(localStorage.getItem('startTime12')) || 0;
        var pausedTime12 = 0;
        var timerElement12 = document.getElementById('timer12');
        var intervalId12;

        function updateTimer12() {
            var currentTime12 = Math.floor(Date.now() / 1000); // Waktu saat ini dalam detik
            var elapsedSeconds12 = (currentTime12 - startTime12) + pausedTime12;
            timerElement12.textContent = elapsedSeconds12;
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                }
            };
            xhttp.open('POST', 'dt_prod1.php', true);
            xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhttp.send('&time12=' + (elapsedSeconds12));
        }

        function startTimer12() {
            startTime12 = Math.floor(Date.now() / 1000) - pausedTime12; // Menyimpan waktu awal saat stopwatch dimulai
            pausedTime12 = 0;
            localStorage.setItem('startTime12', startTime12);

            intervalId12 = setInterval(updateTimer12, 1000);
        }

        function stopTimer12() {
            clearInterval(intervalId12);
            pausedTime12 = Math.floor(Date.now() / 1000) - startTime12;
        }

        function resetTimer12() {
            clearInterval(intervalId12);
            startTime12 = 0;
            pausedTime12 = 0;
            localStorage.removeItem('startTime12');
            timerElement12.textContent = 0;
        }

        window.addEventListener('load', function () {
            if (startTime12 !== 0) {
                intervalId12 = setInterval(updateTimer12, 1000);
            }
        });