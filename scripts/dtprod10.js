var startTime18 = parseInt(localStorage.getItem('startTime18')) || 0;
        var pausedTime18 = 0;
        var timerElement18 = document.getElementById('timer18');
        var intervalId18;

        function updateTimer18() {
            var currentTime18 = Math.floor(Date.now() / 1000); // Waktu saat ini dalam detik
            var elapsedSeconds18 = (currentTime18 - startTime18) + pausedTime18;
            timerElement18.textContent = elapsedSeconds18;
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                }
            };
            xhttp.open('POST', 'dt_prod1.php', true);
            xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhttp.send('&time18=' + (elapsedSeconds18));
        }

        function startTimer18() {
            startTime18 = Math.floor(Date.now() / 1000) - pausedTime18; // Menyimpan waktu awal saat stopwatch dimulai
            pausedTime18 = 0;
            localStorage.setItem('startTime18', startTime18);

            intervalId18 = setInterval(updateTimer18, 1000);
        }

        function stopTimer18() {
            clearInterval(intervalId18);
            pausedTime18 = Math.floor(Date.now() / 1000) - startTime18;
        }

        function resetTimer18() {
            clearInterval(intervalId18);
            startTime18 = 0;
            pausedTime18 = 0;
            localStorage.removeItem('startTime18');
            timerElement18.textContent = 0;
        }

        window.addEventListener('load', function () {
            if (startTime18 !== 0) {
                intervalId18 = setInterval(updateTimer18, 1000);
            }
        });