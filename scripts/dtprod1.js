var startTime9 = parseInt(localStorage.getItem('startTime9')) || 0;
        var pausedTime9 = 0;
        var timerElement9 = document.getElementById('timer9');
        var intervalId9;

        function updateTimer9() {
            var currentTime9 = Math.floor(Date.now() / 1000); // Waktu saat ini dalam detik
            var elapsedSeconds9 = (currentTime9 - startTime9) + pausedTime9;
            timerElement9.textContent = elapsedSeconds9;
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                }
            };
            xhttp.open('POST', 'dt_prod1.php', true);
            xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhttp.send('&time9=' + (elapsedSeconds9));
        }

        function startTimer9() {
            startTime9 = Math.floor(Date.now() / 1000) - pausedTime9; // Menyimpan waktu awal saat stopwatch dimulai
            pausedTime9 = 0;
            localStorage.setItem('startTime9', startTime9);

            intervalId9 = setInterval(updateTimer9, 1000);
        }

        function stopTimer9() {
            clearInterval(intervalId9);
            pausedTime9 = Math.floor(Date.now() / 1000) - startTime9;
        }

        function resetTimer9() {
            clearInterval(intervalId9);
            startTime9 = 0;
            pausedTime9 = 0;
            localStorage.removeItem('startTime9');
            timerElement9.textContent = 0;
        }

        window.addEventListener('load', function () {
            if (startTime9 !== 0) {
                intervalId9 = setInterval(updateTimer9, 1000);
            }
        });