function updateClock() {
      // Mendapatkan waktu saat ini
      var currentTime = new Date();

      // Mengisi tag HTML time dengan jam saat ini
      document.getElementById('current-time').textContent = currentTime.toLocaleTimeString();
    }

    // Memperbarui jam setiap 1 detik (1000 milidetik)
    setInterval(updateClock, 1000);

    var today = new Date();
    var date = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var formattedDate = date + " " + getMonthName(month) + " " + year;
    document.getElementById("tanggal").innerHTML = formattedDate;

    function getMonthName(month) {
      var monthNames = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
      ];
      return monthNames[month - 1];
    }