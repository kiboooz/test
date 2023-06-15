var startTime2 = parseInt(localStorage.getItem('startTime2')) || 0;
        var pausedTime2 = 0;
        var timerElement2 = document.getElementById('timer2');
        var intervalId2;

        function updateTimer2() {
            var currentTime2 = Math.floor(Date.now() / 1000); // Waktu saat ini dalam detik
            var elapsedSeconds2 = (currentTime2 - startTime2) + pausedTime2;
            timerElement2.textContent = elapsedSeconds2;
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                }
            };
            xhttp.open('POST', 'dt_mach2.php', true);
            xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhttp.send('&time2=' + (elapsedSeconds2));
        }

        function startTimer2() {
            startTime2 = Math.floor(Date.now() / 1000) - pausedTime2; // Menyimpan waktu awal saat stopwatch dimulai
            pausedTime2 = 0;
            localStorage.setItem('startTime2', startTime2);

            intervalId2 = setInterval(updateTimer2, 1000);
        }

        function stopTimer2() {
            clearInterval(intervalId2);
            pausedTime2 = Math.floor(Date.now() / 1000) - startTime2;
        }

        function resetTimer2() {
            clearInterval(intervalId2);
            startTime2 = 0;
            pausedTime2 = 0;
            localStorage.removeItem('startTime2');
            timerElement2.textContent = 0;
        }

        window.addEventListener('load', function () {
            if (startTime2 !== 0) {
                intervalId2 = setInterval(updateTimer2, 1000);
            }
        });