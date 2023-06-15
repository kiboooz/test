var startTime7 = parseInt(localStorage.getItem('startTime7')) || 0;
        var pausedTime7 = 0;
        var timerElement7 = document.getElementById('timer7');
        var intervalId7;

        function updateTimer7() {
            var currentTime7 = Math.floor(Date.now() / 1000); // Waktu saat ini dalam detik
            var elapsedSeconds7 = (currentTime7 - startTime7) + pausedTime7;
            timerElement7.textContent = elapsedSeconds7;
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                }
            };
            xhttp.open('POST', 'dt_mach7.php', true);
            xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhttp.send('&time7=' + (elapsedSeconds7));
        }

        function startTimer7() {
            startTime7 = Math.floor(Date.now() / 1000) - pausedTime7; // Menyimpan waktu awal saat stopwatch dimulai
            pausedTime7 = 0;
            localStorage.setItem('startTime7', startTime7);

            intervalId7 = setInterval(updateTimer7, 1000);
        }

        function stopTimer7() {
            clearInterval(intervalId7);
            pausedTime7 = Math.floor(Date.now() / 1000) - startTime7;
        }

        function resetTimer7() {
            clearInterval(intervalId7);
            startTime7 = 0;
            pausedTime7 = 0;
            localStorage.removeItem('startTime7');
            timerElement7.textContent = 0;
        }

        window.addEventListener('load', function () {
            if (startTime7 !== 0) {
                intervalId7 = setInterval(updateTimer7, 1000);
            }
        });