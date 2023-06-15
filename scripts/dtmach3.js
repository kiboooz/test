var startTime3 = parseInt(localStorage.getItem('startTime3')) || 0;
        var pausedTime3 = 0;
        var timerElement3 = document.getElementById('timer3');
        var intervalId3;

        function updateTimer3() {
            var currentTime3 = Math.floor(Date.now() / 1000); // Waktu saat ini dalam detik
            var elapsedSeconds3 = (currentTime3 - startTime3) + pausedTime3;
            timerElement3.textContent = elapsedSeconds3;
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                }
            };
            xhttp.open('POST', 'dt_mach3.php', true);
            xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhttp.send('&time3=' + (elapsedSeconds3));
        }

        function startTimer3() {
            startTime3 = Math.floor(Date.now() / 1000) - pausedTime3; // Menyimpan waktu awal saat stopwatch dimulai
            pausedTime3 = 0;
            localStorage.setItem('startTime3', startTime3);

            intervalId3 = setInterval(updateTimer3, 1000);
        }

        function stopTimer3() {
            clearInterval(intervalId3);
            pausedTime3 = Math.floor(Date.now() / 1000) - startTime3;
        }

        function resetTimer3() {
            clearInterval(intervalId3);
            startTime3 = 0;
            pausedTime3 = 0;
            localStorage.removeItem('startTime3');
            timerElement3.textContent = 0;
        }

        window.addEventListener('load', function () {
            if (startTime3 !== 0) {
                intervalId3 = setInterval(updateTimer3, 1000);
            }
        });