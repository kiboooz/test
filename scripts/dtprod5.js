var startTime13 = parseInt(localStorage.getItem('startTime13')) || 0;
        var pausedTime13 = 0;
        var timerElement13 = document.getElementById('timer13');
        var intervalId13;

        function updateTimer13() {
            var currentTime13 = Math.floor(Date.now() / 1000); // Waktu saat ini dalam detik
            var elapsedSeconds13 = (currentTime13 - startTime13) + pausedTime13;
            timerElement13.textContent = elapsedSeconds13;
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                }
            };
            xhttp.open('POST', 'dt_prod1.php', true);
            xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhttp.send('&time13=' + (elapsedSeconds13));
        }

        function startTimer13() {
            startTime13 = Math.floor(Date.now() / 1000) - pausedTime13; // Menyimpan waktu awal saat stopwatch dimulai
            pausedTime13 = 0;
            localStorage.setItem('startTime13', startTime13);

            intervalId13 = setInterval(updateTimer13, 1000);
        }

        function stopTimer13() {
            clearInterval(intervalId13);
            pausedTime13 = Math.floor(Date.now() / 1000) - startTime13;
        }

        function resetTimer13() {
            clearInterval(intervalId13);
            startTime13 = 0;
            pausedTime13 = 0;
            localStorage.removeItem('startTime13');
            timerElement13.textContent = 0;
        }

        window.addEventListener('load', function () {
            if (startTime13 !== 0) {
                intervalId13 = setInterval(updateTimer13, 1000);
            }
        });