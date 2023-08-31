// Az input mezőre hivatkozó elem lekérése a DOM-ból
let input = document.getElementById('inputBox');

// Az összes gombra hivatkozó elemek lekérése a DOM-ból
let buttons = document.querySelectorAll('button');

// Üres string változó a számításokhoz
let string = "";

// NodeList átalakítása tömbbé, hogy könnyen ciklusolhassunk rajta
let arr = Array.from(buttons);

// A gombokra eseménykezelők hozzáadása
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        // Ha a gomb szövege '=', akkor értékeljük ki az eddigi mezőt
        if (e.target.innerHTML == '=') {
            string = eval(string); // Az eval() függvény kiértékeli a mezőt
            input.value = string;
        }
        // Ha a gomb szövege 'AC', akkor töröljük az eddigi számokat amezőből
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        // Ha a gomb szövege 'DEL', akkor töröljük az utolsó karaktert a mezőből
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        // Egyébként hozzáadjuk a gomb szövegét a stringhez és frissítjük az input mezőt
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
