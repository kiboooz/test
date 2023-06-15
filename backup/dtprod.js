
        var counter9 = 0;
        var counter10 = 0;
        var counter11 = 0;
        var counter12 = 0;

        var intervalId9;
        var intervalId10;
        var intervalId11;
        var intervalId12;  


        // Mengambil nilai terakhir dari penyimpanan lokal saat halaman dimuat
        window.onload = function () {
            var storedCounter9 = localStorage.getItem("counter9");
            var storedCounter10= localStorage.getItem("counter10");
            var storedCounter11 = localStorage.getItem("counter11");
            var storedCounter12 = localStorage.getItem("counter12");


            var storedIntervalStatus9 = localStorage.getItem("intervalStatus9");
            var storedIntervalStatus10 = localStorage.getItem("intervalStatus10");
            var storedIntervalStatus11 = localStorage.getItem("intervalStatus11");
            var storedIntervalStatus12 = localStorage.getItem("intervalStatus12");


            if (storedCounter9) {
                counter9 = parseInt(storedCounter9);
                displayCounter9();
                if (storedIntervalStatus9 === "running") {
                    startCounter9();
                }
            }
            if (storedCounter10) {
                counter10 = parseInt(storedCounter10);
                displayCounter10();
                if (storedIntervalStatus10 === "running") {
                    startCounter10();
                }
            }
            if (storedCounter11) {
                counter11 = parseInt(storedCounter11);
                displayCounter11();
                if (storedIntervalStatus11 === "running") {
                    startCounter11();
                }
            }
            if (storedCounter12) {
                counter12 = parseInt(storedCounter12);
                displayCounter12();
                if (storedIntervalStatus12 === "running") {
                    startCounter12();
                }
            }
        }


        function startCounter9() {
            intervalId9 = setInterval(function () {
                counter9++;
                displayCounter9();
                saveCounterToDatabase9();

            }, 1000);

            localStorage.setItem("intervalStatus9", "running");
        }
        function startCounter10() {
            intervalId10 = setInterval(function () {
                counter10++;
                displayCounter10();
                saveCounterToDatabase10();

            }, 1000);

            localStorage.setItem("intervalStatus10", "running");
        }
        function startCounter11() {
            intervalId11 = setInterval(function () {
                counter11++;
                displayCounter11();
                saveCounterToDatabase11();

            }, 1000);

            localStorage.setItem("intervalStatus11", "running");
        }
        function startCounter12() {
            intervalId12 = setInterval(function () {
                counter12++;
                displayCounter12();
                saveCounterToDatabase12();

            }, 1000);

            localStorage.setItem("intervalStatus12", "running");
        }
        


        function saveCounterToDatabase9() {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'dt_prod5.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log('Counter berhasil disimpan ke database.');
                }
            };
            // Mengirim data counter ke PHP
            xhr.send('&time13=' + [counter9]);
        }
        function saveCounterToDatabase10() {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'dt_prod6.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log('Counter berhasil disimpan ke database.');
                }
            };
            // Mengirim data counter ke PHP
            xhr.send('&time14=' + [counter10]);
        }
        function saveCounterToDatabase11() {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'dt_prod11.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log('Counter berhasil disimpan ke database.');
                }
            };
            // Mengirim data counter ke PHP
            xhr.send('&time19=' + [counter11]);
        }
        function saveCounterToDatabase12() {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'dt_prod12.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log('Counter berhasil disimpan ke database.');
                }
            };
            // Mengirim data counter ke PHP
            xhr.send('&time20=' + [counter12]);
        }
        

        // Menghentikan counter saat tombol "Stop" ditekan
        function stopCounterProd() {
            clearInterval(intervalId9);
            clearInterval(intervalId10);
            clearInterval(intervalId11);
            clearInterval(intervalId12);

            // Menyimpan status counter ke penyimpanan lokal saat tombol "Stop" ditekan
            localStorage.setItem("intervalStatus9", "stopped");
            localStorage.setItem("intervalStatus10", "stopped");
            localStorage.setItem("intervalStatus11", "stopped");
            localStorage.setItem("intervalStatus12", "stopped");


        }


        // Mengatur ulang counter saat tombol "Reset" ditekan
        function resetCounterProd() {
            counter9 = 0;
            counter10 = 0;
            counter11 = 0;
            counter12 = 0;


            displayCounter9();
            displayCounter10();
            displayCounter11();
            displayCounter12();


            clearInterval(intervalId9);
            clearInterval(intervalId10);
            clearInterval(intervalId11);
            clearInterval(intervalId12);


            // Menghapus nilai dari penyimpanan lokal saat tombol "Reset" ditekan
            localStorage.removeItem("counter9");
            localStorage.removeItem("counter10");
            localStorage.removeItem("counter11");
            localStorage.removeItem("counter12");

            localStorage.removeItem("intervalStatus9");
            localStorage.removeItem("intervalStatus10");
            localStorage.removeItem("intervalStatus11");
            localStorage.removeItem("intervalStatus12");

        }

        // Menyimpan nilai terakhir ke penyimpanan lokal saat halaman akan dimuat ulang atau ditutup
        window.onbeforeunload = function () {
            localStorage.setItem("counter9", counter9);
            localStorage.setItem("counter10", counter10);
            localStorage.setItem("counter11", counter11);
            localStorage.setItem("counter12", counter12);

        }


        // Memperbarui tampilan HTML dengan nilai counter saat ini
        function displayCounter9() {
            var display9 = document.getElementById("counterDisplay9");
            display9.innerHTML = counter9;
        }
        function displayCounter10() {
            var display10 = document.getElementById("counterDisplay10");
            display10.innerHTML = counter10;
        }
        function displayCounter11() {
            var display11 = document.getElementById("counterDisplay11");
            display11.innerHTML = counter11;
        }
        function displayCounter12() {
            var display12 = document.getElementById("counterDisplay12");
            display12.innerHTML = counter12;
        }
      

    