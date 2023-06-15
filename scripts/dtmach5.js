var startTime5 = parseInt(localStorage.getItem('startTime5')) || 0;
        var pausedTime5 = 0;
        var timerElement5 = document.getElementById('timer5');
        var intervalId5;

        function updateTimer5() {
            var currentTime5 = Math.floor(Date.now() / 1000); // Waktu saat ini dalam detik
            var elapsedSeconds5 = (currentTime5 - startTime5) + pausedTime5;
            timerElement5.textContent = elapsedSeconds5;
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                }
            };
            xhttp.open('POST', 'dt_mach5.php', true);
            xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhttp.send('&time5=' + (elapsedSeconds5));
        }

        function startTimer5() {
            startTime5 = Math.floor(Date.now() / 1000) - pausedTime5; // Menyimpan waktu awal saat stopwatch dimulai
            pausedTime5 = 0;
            localStorage.setItem('startTime5', startTime5);

            intervalId5 = setInterval(updateTimer5, 1000);
        }

        function stopTimer5() {
            clearInterval(intervalId5);
            pausedTime5 = Math.floor(Date.now() / 1000) - startTime5;
        }

        function resetTimer5() {
            clearInterval(intervalId5);
            startTime5 = 0;
            pausedTime5 = 0;
            localStorage.removeItem('startTime5');
            timerElement5.textContent = 0;
        }

        window.addEventListener('load', function () {
            if (startTime5 !== 0) {
                intervalId5 = setInterval(updateTimer5, 1000);
            }
        });