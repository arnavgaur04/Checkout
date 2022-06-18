var i = 1;
var j = 1;
var price_bag;
var price_shoes;
var total = 148.98;

function add_bag() {
    i++;
    document.getElementById('inc_bag').value = i;
    price_bag = i * 54.99;
    total = total + 54.99;
    document.getElementById('bag').value = "$"+price_bag.toFixed(2);
    document.getElementById('TOTAL').value = "$"+total.toFixed(2);
}

function minus_bag() {
    if (i == 1) {
        price_shoes = 54.99;
        window.alert("Want to remove ?");
    }

    else
    {
        i--;
        price_bag = i * 54.99;
        total = total - 54.99;
        document.getElementById('bag').value = "$"+price_bag.toFixed(2);
        document.getElementById('inc_bag').value = i;
        document.getElementById('TOTAL').value = "$"+total.toFixed(2);
    }
}

function add_shoes() {
    j++;
    document.getElementById('inc_shoes').value = j;
    price_shoes = j * 74.99;
    total = total + 74.99;
    document.getElementById('shoes').value = "$"+price_shoes.toFixed(2);
    document.getElementById('TOTAL').value = "$"+total.toFixed(2);
}

function minus_shoes() {
    if (j == 1) {
        price_shoes = 1 * 74.99;
        window.alert("Want to remove ?");
    }

    else
    {
        j--;
        price_shoes = j * 74.99;
        total = total - 74.99;
        document.getElementById('shoes').value = "$"+price_shoes.toFixed(2);
        document.getElementById('TOTAL').value = "$"+total.toFixed(2);
        document.getElementById('inc_shoes').value = j;
    }
}

function submit()
{
    window.alert("SUBMITTED!");
}

