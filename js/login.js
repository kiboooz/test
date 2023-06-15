var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // Parse JSON response and display data in HTML page
          var data = JSON.parse(this.responseText);
          var container = document.getElementById("nama");
          var container2 = document.getElementById("nrp");
          var container3 = document.getElementById("part");
          var container4 = document.getElementById("target");
          var container5 = document.getElementById("shift");
          var container6 = document.getElementById("reject");
          var container7 = document.getElementById("part2");


         
          var html = "";
          var html2 = "";
          var html3 = "";
          var html4 = "";
          var html5 = "";
          var html6 = "";
          var html7 = "";


          for (var i = 0; i < data.length; i++) {
            html += "<p>" + data[i].nama + "</p>";
            html2 += "<p>" + data[i].nrp + "</p>";
            html3 += "<p>" + data[i].part + "</p>";
            html4 += "<p>" + data[i].targetpart + "</p>";
            html5 += "<p>" + data[i].shift + "</p>";
            html6 += "<p>" + data[i].reject + "</p>";
            html7 += "<p>" + data[i].part + "</p>";
           
          }
          container.innerHTML = html;
          container2.innerHTML = html2;
          container3.innerHTML = html3;
          container4.innerHTML = html4;
          container5.innerHTML = html5;
          container6.innerHTML = html6;
          container7.innerHTML = html7;

        }
      };
      xhr.open("GET", "tes.php", true);
      xhr.send();