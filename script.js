var i = 1;
var j = 1;
var price_bag;
var price_shoes;

function add_bag() {
    i++;
    document.getElementById('inc_bag').value = i;
    price_bag = i * 54.99;
    document.getElementById('bag').value = "$"+price_bag.toFixed(2);
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
        document.getElementById('bag').value = "$"+price_bag.toFixed(2);
        document.getElementById('inc_bag').value = i;
    }
}

function add_shoes() {
    j++;
    document.getElementById('inc_shoes').value = j;
    price_shoes = j * 54.99;
    document.getElementById('shoes').value = "$"+price_shoes.toFixed(2);
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
        document.getElementById('shoes').value = "$"+price_shoes.toFixed(2);
        document.getElementById('inc_shoes').value = j;
    }
}

function submit()
{
    window.alert("SUBMITTED!");
}

// var total = Number(price_shoes);

document.getElementById('TOTAL').value = "$" + price_bag.toFixed(2) + price_shoes.toFixed(2) + 19;
