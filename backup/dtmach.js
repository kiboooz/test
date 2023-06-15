        var counter = 0;
        var counter2 = 0;
        var counter3 = 0;
        var counter4 = 0;
        var counter5 = 0;
        var counter6 = 0;
        var counter7 = 0;
        var counter8 = 0;

        // DOWTIME PRODUKSI
        var counter9 = 0;
        var counter10 = 0;
        var counter11 = 0;
        var counter12 = 0;


        var counter13 = 0;
        var counter14 = 0;
        var counter15 = 0;
        var counter16 = 0;
        var counter17 = 0;

        var intervalId;
        var intervalId2;
        var intervalId3;
        var intervalId4;
        var intervalId5;
        var intervalId6;
        var intervalId7;
        var intervalId8;

        // DOWTIME PRODUKSI
        var intervalId9;
        var intervalId10;
        var intervalId11;
        var intervalId12;

        var intervalId13;
        var intervalId14;
        var intervalId15;
        var intervalId16;
        var intervalId17;


        // Mengambil nilai terakhir dari penyimpanan lokal saat halaman dimuat
        window.onload = function () {
            var storedCounter = localStorage.getItem("counter");
            var storedCounter2 = localStorage.getItem("counter2");
            var storedCounter3 = localStorage.getItem("counter3");
            var storedCounter4 = localStorage.getItem("counter4");
            var storedCounter5 = localStorage.getItem("counter5");
            var storedCounter6 = localStorage.getItem("counter6");
            var storedCounter7 = localStorage.getItem("counter7");
            var storedCounter8 = localStorage.getItem("counter8");


            var storedCounter9 = localStorage.getItem("counter9");
            var storedCounter10 = localStorage.getItem("counter10");
            var storedCounter11 = localStorage.getItem("counter11");
            var storedCounter12 = localStorage.getItem("counter12");


            var storedCounter13 = localStorage.getItem("counter13");
            var storedCounter14 = localStorage.getItem("counter14");
            var storedCounter15 = localStorage.getItem("counter15");
            var storedCounter16 = localStorage.getItem("counter16");
            var storedCounter17 = localStorage.getItem("counter17");



            var storedIntervalStatus = localStorage.getItem("intervalStatus");
            var storedIntervalStatus2 = localStorage.getItem("intervalStatus2");
            var storedIntervalStatus3 = localStorage.getItem("intervalStatus3");
            var storedIntervalStatus4 = localStorage.getItem("intervalStatus4");
            var storedIntervalStatus5 = localStorage.getItem("intervalStatus5");
            var storedIntervalStatus6 = localStorage.getItem("intervalStatus6");
            var storedIntervalStatus7 = localStorage.getItem("intervalStatus7");
            var storedIntervalStatus8 = localStorage.getItem("intervalStatus8");


            var storedIntervalStatus9 = localStorage.getItem("intervalStatus9");
            var storedIntervalStatus10 = localStorage.getItem("intervalStatus10");
            var storedIntervalStatus11 = localStorage.getItem("intervalStatus11");
            var storedIntervalStatus12 = localStorage.getItem("intervalStatus12");


            var storedIntervalStatus13 = localStorage.getItem("intervalStatus13");
            var storedIntervalStatus14 = localStorage.getItem("intervalStatus14");
            var storedIntervalStatus15 = localStorage.getItem("intervalStatus15");
            var storedIntervalStatus16 = localStorage.getItem("intervalStatus16");
            var storedIntervalStatus16 = localStorage.getItem("intervalStatus17");


            if (storedCounter) {
                counter = parseInt(storedCounter);
                displayCounter();
                if (storedIntervalStatus === "running") {
                    startCounter();
                }
            }
            if (storedCounter2) {
                counter2 = parseInt(storedCounter2);
                displayCounter2();
                if (storedIntervalStatus2 === "running") {
                    startCounter2();
                }
            }
            if (storedCounter3) {
                counter3 = parseInt(storedCounter3);
                displayCounter3();
                if (storedIntervalStatus3 === "running") {
                    startCounter3();
                }
            }
            if (storedCounter4) {
                counter4 = parseInt(storedCounter4);
                displayCounter4();
                if (storedIntervalStatus4 === "running") {
                    startCounter4();
                }
            }
            if (storedCounter5) {
                counter5 = parseInt(storedCounter5);
                displayCounter5();
                if (storedIntervalStatus5 === "running") {
                    startCounter5();
                }
            }
            if (storedCounter6) {
                counter6 = parseInt(storedCounter6);
                displayCounter6();
                if (storedIntervalStatus6 === "running") {
                    startCounter6();
                }
            }
            if (storedCounter7) {
                counter7 = parseInt(storedCounter7);
                displayCounter7();
                if (storedIntervalStatus7 === "running") {
                    startCounter7();
                }
            }
            if (storedCounter8) {
                counter8 = parseInt(storedCounter8);
                displayCounter8();
                if (storedIntervalStatus8 === "running") {
                    startCounter8();
                }
            }
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
            if (storedCounter13) {
                counter13 = parseInt(storedCounter13);
                displayCounter13();
                if (storedIntervalStatus13 === "running") {
                    startCounter13();
                }
            }
            if (storedCounter14) {
                counter14 = parseInt(storedCounter14);
                displayCounter14();
                if (storedIntervalStatus14 === "running") {
                    startCounter14();
                }
            }
            if (storedCounter15) {
                counter15 = parseInt(storedCounter15);
                displayCounter15();
                if (storedIntervalStatus15 === "running") {
                    startCounter15();
                }
            }
            if (storedCounter16) {
                counter16 = parseInt(storedCounter16);
                displayCounter16();
                if (storedIntervalStatus16 === "running") {
                    startCounter16();
                }
            }
            if (storedCounter17) {
                counter17 = parseInt(storedCounter17);
                displayCounter17();
                if (storedIntervalStatus17 === "running") {
                    startCounter17();
                }
            }
        }


        function startCounter() {
            intervalId = setInterval(function () {
                counter++;
                displayCounter();
                saveCounterToDatabase();

            }, 1000);

            localStorage.setItem("intervalStatus", "running");
        }
        function startCounter2() {
            intervalId2 = setInterval(function () {
                counter2++;
                displayCounter2();
                saveCounterToDatabase2();

            }, 1000);

            localStorage.setItem("intervalStatus2", "running");
        }
        function startCounter3() {
            intervalId3 = setInterval(function () {
                counter3++;
                displayCounter3();
                saveCounterToDatabase3();

            }, 1000);

            localStorage.setItem("intervalStatus3", "running");
        }
        function startCounter4() {
            intervalId4 = setInterval(function () {
                counter4++;
                displayCounter4();
                saveCounterToDatabase4();

            }, 1000);

            localStorage.setItem("intervalStatus4", "running");
        }
        function startCounter5() {
            intervalId5 = setInterval(function () {
                counter5++;
                displayCounter5();
                saveCounterToDatabase5();

            }, 1000);

            localStorage.setItem("intervalStatus5", "running");
        }
        function startCounter6() {
            intervalId6 = setInterval(function () {
                counter6++;
                displayCounter6();
                saveCounterToDatabase6();

            }, 1000);

            localStorage.setItem("intervalStatus6", "running");
        }
        function startCounter7() {
            intervalId7 = setInterval(function () {
                counter7++;
                displayCounter7();
                saveCounterToDatabase7();

            }, 1000);

            localStorage.setItem("intervalStatus7", "running");
        }
        function startCounter8() {
            intervalId8 = setInterval(function () {
                counter8++;
                displayCounter8();
                saveCounterToDatabase8();

            }, 1000);

            localStorage.setItem("intervalStatus8", "running");
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
        function startCounter13() {
            intervalId13 = setInterval(function () {
                counter13++;
                displayCounter13();
                saveCounterToDatabase13();

            }, 1000);

            localStorage.setItem("intervalStatus13", "running");
        }
        function startCounter14() {
            intervalId14 = setInterval(function () {
                counter14++;
                displayCounter14();
                saveCounterToDatabase14();

            }, 1000);

            localStorage.setItem("intervalStatus14", "running");
        }
        function startCounter15() {
            intervalId15 = setInterval(function () {
                counter15++;
                displayCounter15();
                saveCounterToDatabase15();

            }, 1000);

            localStorage.setItem("intervalStatus15", "running");
        }
        function startCounter16() {
            intervalId16 = setInterval(function () {
                counter16++;
                displayCounter16();
                saveCounterToDatabase16();

            }, 1000);

            localStorage.setItem("intervalStatus16", "running");
        }
        function startCounter17() {
            intervalId17 = setInterval(function () {
                counter17++;
                displayCounter17();
                saveCounterToDatabase17();

            }, 1000);

            localStorage.setItem("intervalStatus17", "running");
        }


        function saveCounterToDatabase() {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'dt_mach.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log('Counter berhasil disimpan ke database.');
                }
            };
            // Mengirim data counter ke PHP
            xhr.send('&time=' + [counter]);
        }
        function saveCounterToDatabase2() {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'dt_mach2.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log('Counter berhasil disimpan ke database.');
                }
            };
            // Mengirim data counter ke PHP
            xhr.send('&time2=' + [counter2]);
        }
        function saveCounterToDatabase3() {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'dt_mach3.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log('Counter berhasil disimpan ke database.');
                }
            };
            // Mengirim data counter ke PHP
            xhr.send('&time3=' + [counter3]);
        }
        function saveCounterToDatabase4() {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'dt_mach4.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log('Counter berhasil disimpan ke database.');
                }
            };
            // Mengirim data counter ke PHP
            xhr.send('&time4=' + [counter4]);
        }
        function saveCounterToDatabase5() {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'dt_mach5.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log('Counter berhasil disimpan ke database.');
                }
            };
            // Mengirim data counter ke PHP
            xhr.send('&time5=' + [counter5]);
        }
        function saveCounterToDatabase6() {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'dt_mach6.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log('Counter berhasil disimpan ke database.');
                }
            };
            // Mengirim data counter ke PHP
            xhr.send('&time6=' + [counter6]);
        }
        function saveCounterToDatabase7() {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'dt_mach7.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log('Counter berhasil disimpan ke database.');
                }
            };
            // Mengirim data counter ke PHP
            xhr.send('&time7=' + [counter7]);
        }
        function saveCounterToDatabase8() {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'dt_mach8.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log('Counter berhasil disimpan ke database.');
                }
            };
            // Mengirim data counter ke PHP
            xhr.send('&time8=' + [counter8]);
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
        function saveCounterToDatabase13() {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'dt_eng1.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log('Counter berhasil disimpan ke database.');
                }
            };
            // Mengirim data counter ke PHP
            xhr.send('&time21=' + [counter13]);
        }
        function saveCounterToDatabase14() {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'dt_eng2.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log('Counter berhasil disimpan ke database.');
                }
            };
            // Mengirim data counter ke PHP
            xhr.send('&time22=' + [counter14]);
        }
        function saveCounterToDatabase15() {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'dt_eng3.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log('Counter berhasil disimpan ke database.');
                }
            };
            // Mengirim data counter ke PHP
            xhr.send('&time23=' + [counter15]);
        }
        function saveCounterToDatabase16() {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'dt_eng4.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log('Counter berhasil disimpan ke database.');
                }
            };
            // Mengirim data counter ke PHP
            xhr.send('&time24=' + [counter16]);
        }
        function saveCounterToDatabase17() {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'dt_eng5.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log('Counter berhasil disimpan ke database.');
                }
            };
            // Mengirim data counter ke PHP
            xhr.send('&time25=' + [counter17]);
        }

        // Menghentikan counter saat tombol "Stop" ditekan
        function stopCounter() {
            clearInterval(intervalId);
            clearInterval(intervalId2);
            clearInterval(intervalId3);
            clearInterval(intervalId4);
            clearInterval(intervalId5);
            clearInterval(intervalId6);
            clearInterval(intervalId7);

            // Menyimpan status counter ke penyimpanan lokal saat tombol "Stop" ditekan
            localStorage.setItem("intervalStatus", "stopped");
            localStorage.setItem("intervalStatus2", "stopped");
            localStorage.setItem("intervalStatus3", "stopped");
            localStorage.setItem("intervalStatus4", "stopped");
            localStorage.setItem("intervalStatus5", "stopped");
            localStorage.setItem("intervalStatus6", "stopped");
            localStorage.setItem("intervalStatus7", "stopped");
            localStorage.setItem("intervalStatus8", "stopped");



        }


        // Mengatur ulang counter saat tombol "Reset" ditekan
        function resetCounter() {
            counter = 0;
            counter2 = 0;
            counter3 = 0;
            counter4 = 0;
            counter5 = 0;
            counter6 = 0;
            counter7 = 0;
            counter8 = 0;


            displayCounter();
            displayCounter2();
            displayCounter3();
            displayCounter4();
            displayCounter5();
            displayCounter6();
            displayCounter7();
            displayCounter8();

            clearInterval(intervalId);
            clearInterval(intervalId2);
            clearInterval(intervalId3);
            clearInterval(intervalId4);
            clearInterval(intervalId5);
            clearInterval(intervalId6);
            clearInterval(intervalId7);
            clearInterval(intervalId8);


            // Menghapus nilai dari penyimpanan lokal saat tombol "Reset" ditekan
            localStorage.removeItem("counter");
            localStorage.removeItem("counter2");
            localStorage.removeItem("counter3");
            localStorage.removeItem("counter4");
            localStorage.removeItem("counter5");
            localStorage.removeItem("counter6");
            localStorage.removeItem("counter7");
            localStorage.removeItem("counter8");


            localStorage.removeItem("intervalStatus");
            localStorage.removeItem("intervalStatus2");
            localStorage.removeItem("intervalStatus3");
            localStorage.removeItem("intervalStatus4");
            localStorage.removeItem("intervalStatus5");
            localStorage.removeItem("intervalStatus6");
            localStorage.removeItem("intervalStatus7");
            localStorage.removeItem("intervalStatus8");

        }

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

        function stopCounterEng() {
            clearInterval(intervalId13);
            clearInterval(intervalId14);
            clearInterval(intervalId15);
            clearInterval(intervalId16);
            clearInterval(intervalId17);

            // Menyimpan status counter ke penyimpanan lokal saat tombol "Stop" ditekan
            localStorage.setItem("intervalStatus13", "stopped");
            localStorage.setItem("intervalStatus14", "stopped");
            localStorage.setItem("intervalStatus15", "stopped");
            localStorage.setItem("intervalStatus16", "stopped");
            localStorage.setItem("intervalStatus17", "stopped");


        }

        function resetCounterEng() {
            counter13 = 0;
            counter14 = 0;
            counter15 = 0;
            counter16 = 0;
            counter17 = 0;


            displayCounter13();
            displayCounter14();
            displayCounter15();
            displayCounter16();
            displayCounter17();


            clearInterval(intervalId13);
            clearInterval(intervalId14);
            clearInterval(intervalId15);
            clearInterval(intervalId16);
            clearInterval(intervalId17);


            // Menghapus nilai dari penyimpanan lokal saat tombol "Reset" ditekan
            localStorage.removeItem("counter13");
            localStorage.removeItem("counter14");
            localStorage.removeItem("counter15");
            localStorage.removeItem("counter16");
            localStorage.removeItem("counter17");


            localStorage.removeItem("intervalStatus13");
            localStorage.removeItem("intervalStatus14");
            localStorage.removeItem("intervalStatus15");
            localStorage.removeItem("intervalStatus16");
            localStorage.removeItem("intervalStatus17");

        }
        // Menyimpan nilai terakhir ke penyimpanan lokal saat halaman akan dimuat ulang atau ditutup
        window.onbeforeunload = function () {
            localStorage.setItem("counter", counter);
            localStorage.setItem("counter2", counter2);
            localStorage.setItem("counter3", counter3);
            localStorage.setItem("counter4", counter4);
            localStorage.setItem("counter5", counter5);
            localStorage.setItem("counter6", counter6);
            localStorage.setItem("counter7", counter7);
            localStorage.setItem("counter8", counter8);


            localStorage.setItem("counter9", counter9);
            localStorage.setItem("counter10", counter10);
            localStorage.setItem("counter11", counter11);
            localStorage.setItem("counter12", counter12);

            localStorage.setItem("counter13", counter13);
            localStorage.setItem("counter14", counter14);
            localStorage.setItem("counter15", counter15);
            localStorage.setItem("counter16", counter16);
            localStorage.setItem("counter17", counter17);

        }


        // Memperbarui tampilan HTML dengan nilai counter saat ini
        function displayCounter() {
            var display = document.getElementById("counterDisplay");
            display.innerHTML = counter;
        }
        function displayCounter2() {
            var display2 = document.getElementById("counterDisplay2");
            display2.innerHTML = counter2;
        }
        function displayCounter3() {
            var display3 = document.getElementById("counterDisplay3");
            display3.innerHTML = counter3;
        }
        function displayCounter4() {
            var display4 = document.getElementById("counterDisplay4");
            display4.innerHTML = counter4;
        }
        function displayCounter5() {
            var display5 = document.getElementById("counterDisplay5");
            display5.innerHTML = counter5;
        }
        function displayCounter6() {
            var display6 = document.getElementById("counterDisplay6");
            display6.innerHTML = counter6;
        }
        function displayCounter7() {
            var display7 = document.getElementById("counterDisplay7");
            display7.innerHTML = counter7;
        }
        function displayCounter8() {
            var display8 = document.getElementById("counterDisplay8");
            display8.innerHTML = counter8;
        }
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
        function displayCounter13() {
            var display8 = document.getElementById("counterDisplay8");
            display8.innerHTML = counter8;
        }
        function displayCounter14() {
            var display9 = document.getElementById("counterDisplay9");
            display9.innerHTML = counter9;
        }
        function displayCounter15() {
            var display10 = document.getElementById("counterDisplay10");
            display10.innerHTML = counter10;
        }
        function displayCounter16() {
            var display11 = document.getElementById("counterDisplay11");
            display11.innerHTML = counter11;
        }
        function displayCounter17() {
            var display12 = document.getElementById("counterDisplay12");
            display12.innerHTML = counter12;
        }

