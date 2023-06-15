var startTime11 = parseInt(localStorage.getItem('startTime11')) || 0;
        var pausedTime11 = 0;
        var timerElement11 = document.getElementById('timer11');
        var intervalId11;

        function updateTimer11() {
            var currentTime11 = Math.floor(Date.now() / 1000); // Waktu saat ini dalam detik
            var elapsedSeconds11 = (currentTime11 - startTime11) + pausedTime11;
            timerElement11.textContent = elapsedSeconds11;
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                }
            };
            xhttp.open('POST', 'dt_prod1.php', true);
            xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhttp.send('&time11=' + (elapsedSeconds11));
        }

        function startTimer11() {
            startTime11 = Math.floor(Date.now() / 1000) - pausedTime11; // Menyimpan waktu awal saat stopwatch dimulai
            pausedTime11 = 0;
            localStorage.setItem('startTime11', startTime11);

            intervalId11 = setInterval(updateTimer11, 1000);
        }

        function stopTimer11() {
            clearInterval(intervalId11);
            pausedTime11 = Math.floor(Date.now() / 1000) - startTime11;
        }

        function resetTimer11() {
            clearInterval(intervalId11);
            startTime11 = 0;
            pausedTime11 = 0;
            localStorage.removeItem('startTime11');
            timerElement11.textContent = 0;
        }

        window.addEventListener('load', function () {
            if (startTime11 !== 0) {
                intervalId11 = setInterval(updateTimer11, 1000);
            }
        });