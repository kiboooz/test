        $(document).ready(function () {
            setInterval(function () {
                $.ajax({
                    url: "persen.php",
                    dataType: "json",
                    success: function (format_total) {
                        $("#persen").html(format_total);
                    },
                });
            });
        });
         $(document).ready(function () {
            setInterval(function () {
                $.ajax({
                    url: "tes.php",
                    type: "GET",
                    dataType: "json",
                    success: function (data) {
                        var html = "";
                        var html2 = "";
                        var html3 = "";

                        // Looping data yang diterima dalam format JSON
                        $.each(data, function (index, value) {
                            html += "<p>" + value.targetpart + "</p>";
                            html2 += "<p>" + value.part + "</p>";
                            html3 += "<p>" + value.shift + "</p>";

                        });
                        // Tampilkan data di dalam elemen HTML yang sudah disiapkan
                        $("#result").html(html);
                        $("#part2").html(html2);
                        $("#shift").html(html3);

                    }
                });
            }, 1000);
        });
        $(document).ready(function () {
            $.ajax({
                url: "totaldt.php",
                dataType: "json",
                success: function (hasil) {
                    if (hasil > 1) {
                        downtime();
                    }
                },
            });

        });
        $(document).ready(function () {
            setInterval(function () {
                $.ajax({
                    url: "get_user.php",
                    dataType: "json",
                    success: function (nilai) {
                        $("#counter").html(nilai);
                    },
                });
                $.ajax({
                    url: "status.php",
                    success: function (word) {
                        if (word = 0) {
                            running();
                        } else {
                            stopped();

                        }
                    },
                });
            }, 1000);
        });       
       