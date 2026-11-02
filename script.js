document.getElementById("hesaplaBtn").addEventListener("click", function() {
    let devamsiz = document.getElementById("devamsiz").checked;
    let sinavaGirdim = document.getElementById("sinavaGirdim").checked;
    
    let vize = parseFloat(document.getElementById("vize").value);
    let yilIciInput = document.getElementById("yilIci").value;
    let final = parseFloat(document.getElementById("final").value);
    let butunlemeInput = document.getElementById("butunleme").value;

    let sonucDiv = document.getElementById("sonuc");

    
    if (devamsiz) {
        sonucDiv.innerHTML = "<b>Harf Notu:</b> F1 <br> <b>Durum:</b> Devamsızlıktan Kaldı";
        return;
    }

    
    if (!sinavaGirdim) {
        sonucDiv.innerHTML = "<b>Harf Notu:</b> F2 <br> <b>Durum:</b> Sınava Girmediği İçin Kaldı";
        return;
    }

   
    if (isNaN(vize)) {
        alert("Lütfen vize notunu giriniz!");
        return;
    }

    
    let yilIci = vize;
    if (yilIciInput !== "") {
        yilIci = parseFloat(yilIciInput);
    }

    
    let sinavNotu = final;
    if (butunlemeInput !== "") {
        sinavNotu = parseFloat(butunlemeInput);
    }

    if (isNaN(sinavNotu)) {
        alert("Lütfen final veya bütünleme notunu giriniz!");
        return;
    }

    
    let basariNotu = (yilIci * 0.40) + (sinavNotu * 0.60);
    let harfNotu = "";
    let durum = "";

    
    if (sinavNotu < 50) {
        harfNotu = "F3";
        durum = "Kaldı (Sınav notu 50'den küçük)";
    } else if (basariNotu < 60) {
        harfNotu = "F3";
        durum = "Kaldı (Başarı notu 60'tan küçük)";
    } else { 
        
        durum = "Geçti";
        if (basariNotu >= 90) harfNotu = "A1";
        else if (basariNotu >= 80) harfNotu = "A2";
        else if (basariNotu >= 70) harfNotu = "B1";
        else if (basariNotu >= 65) harfNotu = "B2";
        else if (basariNotu >= 60) harfNotu = "C";
    }

    
    sonucDiv.innerHTML = "<b>Başarı Notu:</b> " + basariNotu.toFixed(2) + "<br>" +
                         "<b>Harf Notu:</b> " + harfNotu + "<br>" +
                         "<b>Durum:</b> " + durum;
});


document.getElementById("sifirlaBtn").addEventListener("click", function() {
    document.getElementById("vize").value = "";
    document.getElementById("yilIci").value = "";
    document.getElementById("final").value = "";
    document.getElementById("butunleme").value = "";
    document.getElementById("devamsiz").checked = false;
    document.getElementById("sinavaGirdim").checked = true;
    document.getElementById("sonuc").innerHTML = "";
});