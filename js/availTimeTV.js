 function shift1() {
            $(document).ready(function () {
                setInterval(function () {
                    $.ajax({
                        url: "totaldt.php",
                        dataType: "json",
                        success: function (hasil) {
                            var jam = 420;
                            var jamtot = jam - (hasil);
                            var jamprog = (jamtot / jam) * 100;
                            var jamfinal = Math.floor(jamprog);

                            var progressValue2 = parseInt(jamfinal);
                            $('#progress-bar2').css('width', progressValue2 + '%').attr('aria-valuenow', progressValue2);
                            $("#total").html(jamfinal);
                        },
                    });
                }, 1000);

            });
        }
         function shift2() {
            $(document).ready(function () {
                setInterval(function () {
                    $.ajax({
                        url: "totaldt.php",
                        dataType: "json",
                        success: function (hasil) {
                            var jam2 = 480;
                            var jamtot2 = jam2 - (hasil);
                            var jamprog2 = (jamtot2 / jam2) * 100;
                            var jamfinal2 = Math.floor(jamprog2);

                            var progressValue3 = parseInt(jamfinal2);
                            $('#progress-bar2').css('width', progressValue3 + '%').attr('aria-valuenow', progressValue3);
                            $("#total").html(jamfinal2);
                        },
                    });
                }, 1000);

            });
        }
        function shift3() {
            $(document).ready(function () {
                setInterval(function () {
                    $.ajax({
                        url: "totaldt.php",
                        dataType: "json",
                        success: function (hasil) {
                            var jam3 = 480;
                            var jamtot3 = jam3 - (hasil);
                            var jamprog3 = (jamtot3 / jam3) * 100;
                            var jamfinal3 = Math.floor(jamprog3);

                            var progressValue4 = parseInt(jamfinal3);
                            $('#progress-bar2').css('width', progressValue4 + '%').attr('aria-valuenow', progressValue4);
                            $("#total").html(jamfinal3);
                        },
                    });
                }, 1000);

            });
        }