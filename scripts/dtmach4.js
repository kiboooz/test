var startTime4 = parseInt(localStorage.getItem('startTime4')) || 0;
        var pausedTime4 = 0;
        var timerElement4 = document.getElementById('timer4');
        var intervalId4;

        function updateTimer4() {
            var currentTime4 = Math.floor(Date.now() / 1000); // Waktu saat ini dalam detik
            var elapsedSeconds4 = (currentTime4 - startTime4) + pausedTime4;
            timerElement4.textContent = elapsedSeconds4;
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                }
            };
            xhttp.open('POST', 'dt_mach4.php', true);
            xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhttp.send('&time4=' + (elapsedSeconds4));
        }

        function startTimer4() {
            startTime4 = Math.floor(Date.now() / 1000) - pausedTime4; // Menyimpan waktu awal saat stopwatch dimulai
            pausedTime4 = 0;
            localStorage.setItem('startTime4', startTime4);

            intervalId4 = setInterval(updateTimer4, 1000);
        }

        function stopTimer4() {
            clearInterval(intervalId4);
            pausedTime4 = Math.floor(Date.now() / 1000) - startTime4;
        }

        function resetTimer4() {
            clearInterval(intervalId4);
            startTime4 = 0;
            pausedTime4 = 0;
            localStorage.removeItem('startTime4');
            timerElement4.textContent = 0;
        }

        window.addEventListener('load', function () {
            if (startTime4 !== 0) {
                intervalId4 = setInterval(updateTimer4, 1000);
            }
        });