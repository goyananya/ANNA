<!doctype html>
<html>
<head>
    <meta charset="utf-8" />
</head>
<body>
    <script>
        function Stepen() {
            let x = +prompt("Введите число: "),
                y = +prompt("Введите степень: "),
 
                // Новый вариант:
                z = x ** y;
 
            // Старый вариант:
            z = Math.pow(x, y);
 
            document.write(z)
        };
        Stepen();
    </script>
</body>
</html>
