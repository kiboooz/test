var startTime14 = parseInt(localStorage.getItem('startTime14')) || 0;
        var pausedTime14 = 0;
        var timerElement14 = document.getElementById('timer14');
        var intervalId14;

        function updateTimer14() {
            var currentTime14 = Math.floor(Date.now() / 1000); // Waktu saat ini dalam detik
            var elapsedSeconds14 = (currentTime14 - startTime14) + pausedTime14;
            timerElement14.textContent = elapsedSeconds14;
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                }
            };
            xhttp.open('POST', 'dt_prod1.php', true);
            xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhttp.send('&time14=' + (elapsedSeconds14));
        }

        function startTimer14() {
            startTime14 = Math.floor(Date.now() / 1000) - pausedTime14; // Menyimpan waktu awal saat stopwatch dimulai
            pausedTime14 = 0;
            localStorage.setItem('startTime14', startTime14);

            intervalId14 = setInterval(updateTimer14, 1000);
        }

        function stopTimer14() {
            clearInterval(intervalId14);
            pausedTime14 = Math.floor(Date.now() / 1000) - startTime14;
        }

        function resetTimer14() {
            clearInterval(intervalId14);
            startTime14 = 0;
            pausedTime14 = 0;
            localStorage.removeItem('startTime14');
            timerElement14.textContent = 0;
        }

        window.addEventListener('load', function () {
            if (startTime14 !== 0) {
                intervalId14 = setInterval(updateTimer14, 1000);
            }
        });