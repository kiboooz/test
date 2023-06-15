        function checkTime() {
            var date = new Date();
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var checkStatus = localStorage.getItem("intervalStatus");
            var checkStatus2 = localStorage.getItem("intervalStatus2");
            var checkStatus3 = localStorage.getItem("intervalStatus3");
            var checkStatus4 = localStorage.getItem("intervalStatus4");
            var checkStatus5 = localStorage.getItem("intervalStatus5");
            var checkStatus6 = localStorage.getItem("intervalStatus6");
            var checkStatus7 = localStorage.getItem("intervalStatus7");
            var checkStatus8 = localStorage.getItem("intervalStatus8");

            var checkStatus9 = localStorage.getItem("intervalStatus9");
            var checkStatus10 = localStorage.getItem("intervalStatus10");
            var checkStatus11 = localStorage.getItem("intervalStatus11");
            var checkStatus12 = localStorage.getItem("intervalStatus12");

            var checkStatus13 = localStorage.getItem("intervalStatus13");
            var checkStatus14 = localStorage.getItem("intervalStatus14");
            var checkStatus15 = localStorage.getItem("intervalStatus15");
            var checkStatus16 = localStorage.getItem("intervalStatus16");
            var checkStatus17 = localStorage.getItem("intervalStatus17");

            // var checkStatuson2 = localStorage.getItem("intervalStatus2", "running");
            // var checkStatusoff2 = localStorage.getItem("intervalStatus2", "stopped");
            // var checkStatuson3 = localStorage.getItem("intervalStatus3", "running");
            // var checkStatusoff3 = localStorage.getItem("intervalStatus3", "stopped");
            // var checkStatuson4 = localStorage.getItem("intervalStatus", "running");
            // var checkStatusoff4 = localStorage.getItem("intervalStatus", "stopped");




            if (hours === 8 && minutes === 23) {
                if (checkStatus && checkStatus2 && checkStatus3 && checkStatus4 && checkStatus5 && checkStatus6 && checkStatus7 && checkStatus8 == "stopped") {
                    resetCounter();
                    window.location.href = "login.html";

                } if (checkStatus9 && checkStatus10 && checkStatus11 && checkStatus12 == "stopped") {
                    resetCounterProd();
                    window.location.href = "login.html";

                } if (checkStatus13 && checkStatus14 && checkStatus15 && checkStatus16 && checkStatus17 == "stopped") {
                    resetCounterEng();
                    window.location.href = "login.html";

                } else if (checkStatus == "running") {
                    resetCounter();
                    startCounter();
                    window.location.href = "login.html";

                } else if (checkStatus2 == "running") {
                    resetCounter();
                    startCounter2();
                    window.location.href = "login.html";

                } else if (checkStatus3 == "running") {
                    resetCounter();
                    startCounter3();
                    window.location.href = "login.html";

                } else if (checkStatus4 == "running") {
                    resetCounter();
                    startCounter4();
                    window.location.href = "login.html";

                } else if (checkStatus5 == "running") {
                    resetCounter();
                    startCounter5();
                    window.location.href = "login.html";

                } else if (checkStatus6 == "running") {
                    resetCounter();
                    startCounter6();
                    window.location.href = "login.html";

                } else if (checkStatus7 == "running") {
                    resetCounter();
                    startCounter7();
                    window.location.href = "login.html";

                } else if (checkStatus8 == "running") {
                    resetCounter();
                    startCounter8();
                    window.location.href = "login.html";

                } else if (checkStatus9 == "running") {
                    resetCounterProd();
                    startCounter9();
                    window.location.href = "login.html";

                } else if (checkStatus10 == "running") {
                    resetCounterProd();
                    startCounter10();
                    window.location.href = "login.html";

                } else if (checkStatus11 == "running") {
                    resetCounterProd();
                    startCounter11();
                    window.location.href = "login.html";

                } else if (checkStatus12 == "running") {
                    resetCounterProd();
                    startCounter12();
                    window.location.href = "login.html";

                } else if (checkStatus13 == "running") {
                    resetCounterEng();
                    startCounter13();
                    window.location.href = "login.html";

                } else if (checkStatus14 == "running") {
                    resetCounterProd();
                    startCounter14();
                    window.location.href = "login.html";

                } else if (checkStatus15 == "running") {
                    resetCounterProd();
                    startCounter15();
                    window.location.href = "login.html";

                } else if (checkStatus16 == "running") {
                    resetCounterProd();
                    startCounter16();
                    window.location.href = "login.html";

                } else if (checkStatus17 == "running") {
                    resetCounterProd();
                    startCounter17();
                    window.location.href = "login.html";
                } else {    
                    resetCounters();
                    window.location.href = "login.html";
                }

            }
            if (hours === 16 && minutes === 0) {
                saveCounters();
                resetCounters();
                if (checkStatus && checkStatus2 && checkStatus3 && checkStatus4 && checkStatus5 && checkStatus6 && checkStatus7 && checkStatus8 == "stopped") {
                    resetCounter();
                    window.location.href = "login.html";

                } if (checkStatus9 && checkStatus10 && checkStatus11 && checkStatus12 == "stopped") {
                    resetCounterProd();
                    window.location.href = "login.html";

                } if (checkStatus13 && checkStatus14 && checkStatus15 && checkStatus16 && checkStatus17 == "stopped") {
                    resetCounterEng();
                    window.location.href = "login.html";

                } else if (checkStatus == "running") {
                    resetCounter();
                    startCounter();
                    window.location.href = "login.html";

                } else if (checkStatus2 == "running") {
                    resetCounter();
                    startCounter2();
                    window.location.href = "login.html";

                } else if (checkStatus3 == "running") {
                    resetCounter();
                    startCounter3();
                    window.location.href = "login.html";

                } else if (checkStatus4 == "running") {
                    resetCounter();
                    startCounter4();
                    window.location.href = "login.html";

                } else if (checkStatus5 == "running") {
                    resetCounter();
                    startCounter5();
                    window.location.href = "login.html";

                } else if (checkStatus6 == "running") {
                    resetCounter();
                    startCounter6();
                    window.location.href = "login.html";

                } else if (checkStatus7 == "running") {
                    resetCounter();
                    startCounter7();
                    window.location.href = "login.html";

                } else if (checkStatus8 == "running") {
                    resetCounter();
                    startCounter8();
                    window.location.href = "login.html";

                } else if (checkStatus9 == "running") {
                    resetCounterProd();
                    startCounter9();
                    window.location.href = "login.html";

                } else if (checkStatus10 == "running") {
                    resetCounterProd();
                    startCounter10();
                    window.location.href = "login.html";

                } else if (checkStatus11 == "running") {
                    resetCounterProd();
                    startCounter11();
                    window.location.href = "login.html";

                } else if (checkStatus12 == "running") {
                    resetCounterProd();
                    startCounter12();
                    window.location.href = "login.html";

                } else if (checkStatus13 == "running") {
                    resetCounterEng();
                    startCounter13();
                    window.location.href = "login.html";

                } else if (checkStatus14 == "running") {
                    resetCounterProd();
                    startCounter14();
                    window.location.href = "login.html";

                } else if (checkStatus15 == "running") {
                    resetCounterProd();
                    startCounter15();
                    window.location.href = "login.html";

                } else if (checkStatus16 == "running") {
                    resetCounterProd();
                    startCounter16();
                    window.location.href = "login.html";

                } else if (checkStatus17 == "running") {
                    resetCounterProd();
                    startCounter17();
                    window.location.href = "login.html";
                }
            }

            if (hours === 0 && minutes === 0) {
                saveCounters();
                resetCounters();
                if (checkStatus && checkStatus2 && checkStatus3 && checkStatus4 && checkStatus5 && checkStatus6 && checkStatus7 && checkStatus8 == "stopped") {
                    resetCounter();
                    window.location.href = "login.html";

                } if (checkStatus9 && checkStatus10 && checkStatus11 && checkStatus12 == "stopped") {
                    resetCounterProd();
                    window.location.href = "login.html";

                } if (checkStatus13 && checkStatus14 && checkStatus15 && checkStatus16 && checkStatus17 == "stopped") {
                    resetCounterEng();
                    window.location.href = "login.html";

                } else if (checkStatus == "running") {
                    resetCounter();
                    startCounter();
                    window.location.href = "login.html";

                } else if (checkStatus2 == "running") {
                    resetCounter();
                    startCounter2();
                    window.location.href = "login.html";

                } else if (checkStatus3 == "running") {
                    resetCounter();
                    startCounter3();
                    window.location.href = "login.html";

                } else if (checkStatus4 == "running") {
                    resetCounter();
                    startCounter4();
                    window.location.href = "login.html";

                } else if (checkStatus5 == "running") {
                    resetCounter();
                    startCounter5();
                    window.location.href = "login.html";

                } else if (checkStatus6 == "running") {
                    resetCounter();
                    startCounter6();
                    window.location.href = "login.html";

                } else if (checkStatus7 == "running") {
                    resetCounter();
                    startCounter7();
                    window.location.href = "login.html";

                } else if (checkStatus8 == "running") {
                    resetCounter();
                    startCounter8();
                    window.location.href = "login.html";

                } else if (checkStatus9 == "running") {
                    resetCounterProd();
                    startCounter9();
                    window.location.href = "login.html";

                } else if (checkStatus10 == "running") {
                    resetCounterProd();
                    startCounter10();
                    window.location.href = "login.html";

                } else if (checkStatus11 == "running") {
                    resetCounterProd();
                    startCounter11();
                    window.location.href = "login.html";

                } else if (checkStatus12 == "running") {
                    resetCounterProd();
                    startCounter12();
                    window.location.href = "login.html";

                } else if (checkStatus13 == "running") {
                    resetCounterEng();
                    startCounter13();
                    window.location.href = "login.html";

                } else if (checkStatus14 == "running") {
                    resetCounterProd();
                    startCounter14();
                    window.location.href = "login.html";

                } else if (checkStatus15 == "running") {
                    resetCounterProd();
                    startCounter15();
                    window.location.href = "login.html";

                } else if (checkStatus16 == "running") {
                    resetCounterProd();
                    startCounter16();
                    window.location.href = "login.html";

                } else if (checkStatus17 == "running") {
                    resetCounterProd();
                    startCounter17();
                    window.location.href = "login.html";
                }
            }
        }
        setInterval(checkTime, 60000); // Cek setiap 1 menit