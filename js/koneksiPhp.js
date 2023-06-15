  $(document).ready(function () {
      setInterval(function () {
        $.ajax({
          url: "get_user.php",
          dataType: "json",
          success: function (nilai) {
            $("#hitung").html(nilai);
          },
        });
        $.ajax({
          url: "status.php",
          success: function (word) {
            $("#status").html(word);
          },
        });
        $.ajax({
          dataType: "json",
          url: "partok.php",
          success: function (data) {
            $("#ok").html(data.hasil);
            $("#reject").html(data.reject);
            $("progres").html(data.progres);

          },
        });
        $.ajax({
          url: "tes.php",
          type: "GET",
          dataType: "json",
          success: function (data) {
            var html = "";
            var html2 = "";
            var html3 = "";
            var html4 = "";
            var html5 = "";
            var html6 = "";
            var html7 = "";
            var html8 = "";

            // Looping data yang diterima dalam format JSON
            $.each(data, function (index, value) {
              html += "<p>" + value.dtdie + "</p>";
              html2 += "<p>" + value.tilting + "</p>";
              html3 += "<p>" + value.ejector + "</p>";
              html4 += "<p>" + value.ekstraktor + "</p>";
              html5 += "<p>" + value.safetyh + "</p>";
              html6 += "<p>" + value.core + "</p>";
              html7 += "<p>" + value.hydraulic + "</p>";
              html8 += "<p>" + value.electrical + "</p>";

            });
            // Tampilkan data di dalam elemen HTML yang sudah disiapkan
            $("#dt1").html(html);
            $("#dt2").html(html2);
            $("#dt3").html(html3);
            $("#dt4").html(html4);
            $("#dt5").html(html5);
            $("#dt6").html(html6);
            $("#dt7").html(html7);
            $("#dt8").html(html8);


          }
        });
        $.ajax({
          url: "totaldt.php",
          dataType: "json",
          success: function (hasil) {
            $("#total").html(hasil);
          },
        });
      }, 1000);

    });