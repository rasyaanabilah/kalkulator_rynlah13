$(function () {
    let input1;
    let input2;
    let operasiSelected = null;

    $(".tombol-angka").click(function () {
        let angka = $(this).text();
        
        if (operasiSelected == null) {
            let angkaSebelumnya = $("#input1").text();
            if (angkaSebelumnya == "...") angkaSebelumnya = "";
            input1 = angkaSebelumnya + angka;
            $("#input1").text(input1);
        } else {
            let angkaSebelumnya = $("#input2").text();
            if (angkaSebelumnya == "...") angkaSebelumnya = "";
            input2 = angkaSebelumnya + angka;
            $("#input2").text(input2);
        }
    });

    $(".tombol-operasi").click(function () {
        let operasiSebelumnya = $("#operasi-selected").text();
        let newOperasi = $(this).text();
        
        if (newOperasi == "%" && operasiSebelumnya == "%") {
            return;
        }
        
        if (operasiSebelumnya == "...") {
            operasiSelected = newOperasi;
            $("#operasi-selected").text(operasiSelected);
        }
    });

    $(".tombol-clear").click(function () {
        // Reset semua input, operasi, dan hasil
        input1 = "";
        input2 = "";
        operasiSelected = null;
        
        $("#input1").text("...");
        $("#input2").text("...");
        $("#operasi-selected").text("...");
        $("#hasil").text("0");  // Reset hasil pada tombol Hasil
        $("#hasil-temporer").text("=");  // Reset simbol "=" pada hasil-temporer
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
    
            $("#hasil").text(hasil);  // Tampilkan hasil di #hasil
            
            // Tetap tampilkan input dan operasi yang dipilih
            $("#input1").text(input1);
            $("#input2").text(input2);
            $("#operasi-selected").text(operasiSelected);
            
            // Siapkan untuk kalkulasi berikutnya, tetapi simpan tampilan saat ini
            input1 = hasil;
            input2 = "";
            operasiSelected = null;
        }
    });

    $(".toggle-negatif").click(function () {
        if (operasiSelected == null && input1) {
            input1 = -parseFloat(input1);
            $("#input1").text(input1);
        } else if (operasiSelected && input2) {
            input2 = -parseFloat(input2);
            $("#input2").text(input2);
        }
    });

    $(".tombol-faktorial").click(function () {
        if (operasiSelected == null && input1) {
            let num = parseInt(input1);
            if (num >= 0) {
                let hasil = 1;
                for (let i = 2; i <= num; i++) {
                    hasil *= i;
                }
                $("#hasil").text(hasil);  // Tampilkan hasil faktorial di #hasil
                
                // Tetap tampilkan input asli
                $("#input1").text(num);
            }
        }
    });

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
