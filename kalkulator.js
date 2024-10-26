$(function () {
    let input1;
    let input2;
    let operasiSelected = null;

    $(".tombol-angka").click(function () {
        let angka = $(this).text();
        // alert("Hallo jQuery! Kamu menekan angka " + angka);
        
        // cek jika sudah ada selected operasi
        if (operasiSelected == null) {
            // operasi masih kosong, isi input1
            let angkaSebelumnya = $("#input1").text();
            if (angkaSebelumnya == "...") angkaSebelumnya = "";
            input1 = angkaSebelumnya + angka;
            $("#input1").text(input1);
        } else {
            // sudah ada operasi selected
            let angkaSebelumnya = $("#input2").text();
            if (angkaSebelumnya == "...") angkaSebelumnya = "";
            input2 = angkaSebelumnya + angka;
            $("#input2").text(input2);
        }
    });

    $(".tombol-operasi").click(function () {
        let operasiSebelumnya = $("#operasi-selected").text();
        let newOperasi = $(this).text();
        if (operasiSebelumnya == "...") {
            operasiSelected = newOperasi;
            $("#operasi-selected").text(operasiSelected);
        }
    });

    $(".tombol-clear").click(function () {
        input1 = "";
        input2 = "";
        operasiSelected = null;
        $("#input1").text("...");
        $("#input2").text("...");
        $("#operasi-selected").text("...");
        $("#hasil").text("hasil");
    });

    $("#btn-hitung").click(function () {
        if (input1 && input2 && operasiSelected) {
            let hasil;
            input1 = parseFloat(input1);
            input2 = parseFloat(input2);

            switch (operasiSelected) {
                case "+":
                    hasil = input1 + input2;
                    break;
                case "-":
                    hasil = input1 - input2;
                    break;
                case "x":
                    hasil = input1 * input2;
                    break;
                case "/":
                    hasil = input1 / input2;
                    break;
                case "^":
                    hasil = Math.pow(input1, input2);
                    break;
                case "%":
                    hasil = input1 % input2;
                    break;
            }

            $("#hasil").text(hasil);
            
            // Reset untuk kalkulasi berikutnya
            input1 = hasil;
            $("#input1").text(input1);
            input2 = "";
            $("#input2").text("...");
            operasiSelected = null;
            $("#operasi-selected").text("...");
        }
    });

    // Toggle negatif/positif
    $(".toggle-negatif").click(function () {
        if (operasiSelected == null && input1) {
            input1 = -parseFloat(input1);
            $("#input1").text(input1);
        } else if (operasiSelected && input2) {
            input2 = -parseFloat(input2);
            $("#input2").text(input2);
        }
    });

    // Faktorial
    $(".tombol-faktorial").click(function () {
        if (operasiSelected == null && input1) {
            let num = parseInt(input1);
            if (num >= 0) {
                let hasil = 1;
                for (let i = 2; i <= num; i++) {
                    hasil *= i;
                }
                input1 = hasil;
                $("#input1").text(hasil);
            }
        }
    });

    // Decimal point
    $(".decimal").click(function () {
        if (operasiSelected == null) {
            if (input1 && !input1.includes('.')) {
                input1 += '.';
                $("#input1").text(input1);
            } else if (!input1) {
                input1 = '0.';
                $("#input1").text(input1);
            }
        } else {
            if (input2 && !input2.includes('.')) {
                input2 += '.';
                $("#input2").text(input2);
            } else if (!input2) {
                input2 = '0.';
                $("#input2").text(input2);
            }
        }
    });
});