         $(document).ready(function () {
            $.ajax({
                url: "gabungdtmaint.php",
                dataType: "json",
                success: function (total) {
                    if (total > 1) {
                        showModal3();
                        change();
                    }
                },
            });
            $.ajax({
                url: "gabungdtprod.php",
                dataType: "json",
                success: function (total) {
                    if (total > 1) {
                        showModal();
                        change2();

                    }
                },
            });
            $.ajax({
                url: "gabungdteng.php",
                dataType: "json",
                success: function (total) {
                    if (total > 1) {
                        showModal2();
                        change3();

                    }
                },
            });
        });
        
        function ubahWarna() {
            var div = document.getElementById("myDiv");
            div.style.color = "orange";
            div.style.borderColor = "orange";
        }
        function ubahWarna2() {
            var div2 = document.getElementById("myDiv2");
            div2.style.color = "orange";
            div2.style.borderColor = "orange";
        }
        function ubahWarna3() {
            var div3 = document.getElementById("myDiv3");
            div3.style.color = "orange";
            div3.style.borderColor = "orange";
        }

        function change() {
            var div = document.getElementById("change");
            div.style.color = "red";
            div.style.borderColor = "red";
        }
        function change2() {
            var div2 = document.getElementById("change2");
            div2.style.color = "red";
            div2.style.borderColor = "red";
        }
        function change3() {
            var div3 = document.getElementById("change3");
            div3.style.color = "red";
            div3.style.borderColor = "red";
        }