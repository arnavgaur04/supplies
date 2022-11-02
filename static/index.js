const i = [];
const already_present = [];
const product_name = ["", "Hide & Seek", "Maggi", "Lay's Magic Masala", "Lay's West Indies"];
const price = [0, 20, 14, 10, 10];
const stock = [0 , 0 , 3, 9, 1000];

var sum = 0;

function available(e) {
    stock[e]--;
    var item = document.getElementsByClassName("add"+e);
    if (stock[e] == 0) {
        for (let j = 0; j < item.length; j++) {
            item[j].style.display = "none";
        }
    }

    else
    {
        for (let j = 0; j < item.length; j++) {
            item[j].style.display = "inline";
        }
    }
}

for (let index = 0; index < 5; index++) {
    i.push(0);
}


function total_price() {
    var price_total = 0;

    for (let index = 0; index < i.length; index++) {
        price_total = price_total + i[index]*price[index];
    }

    var total_value = document.getElementById("total_value");
    total_value.innerHTML = '₹' + price_total;
}

function check(sum) {
    if (sum > 0) {
        let pri = 0;
        for (let index = 0; index < price.length; index++) {
            pri = price[index]*i[index] + pri;
        }

        if (sum > 1) {
            document.querySelector(".details").innerHTML = sum + " items <br> ₹ " + pri;
        }
        else
        {
            document.querySelector(".details").innerHTML = sum + " item <br> ₹ " + pri;
        }
    }

    else
    {
        document.querySelector(".details").innerHTML = "My Cart";
    }

}


function add(e) {
    i[e]++;
    sum = 0;

    for (let index = 0; index < i.length; index++) {
        sum = sum + i[index];
    }

    check(sum);
    inside_cart_check(sum, e);

    const add_item = document.querySelectorAll(".add_item"+e);
    const counterr = document.querySelectorAll(".counterr"+e);
    const counterr_input = document.querySelectorAll(".counter_input"+e);
    for (let index = 0; index < add_item.length; index++) {
        add_item[index].style.display = 'none';
        counterr[index].style.display = 'flex';
        counterr_input[index].innerHTML = i[e];
    }

    var price_total = 0;

    for (let index = 0; index < i.length; index++) {
        price_total = price_total + i[index]*price[index];
    }

    var total_value = document.getElementById("total_value");
    total_value.innerHTML = '₹' + price_total;
    available(e);

}

function add_item(e) {
    const add_item = document.querySelectorAll(".add_item"+e);
    const counterr_input = document.querySelectorAll(".counter_input"+e);

    if (i[e] < 1) {
        i[e] = 0;
    }

    i[e]++;    

    for (let index = 0; index < add_item.length; index++) {
        counterr_input[index].innerHTML = i[e];
    }
    sum = 0;
    for (let index = 0; index < i.length; index++) {
        sum = sum + i[index];
    }
    check(sum);
    inside_cart_check(sum, e);
    var price_total = 0;

    for (let index = 0; index < i.length; index++) {
        price_total = price_total + i[index]*price[index];
    }

    var total_value = document.getElementById("total_value");
    total_value.innerHTML = '₹' + price_total;
    available(e);

}

function sub_item(e) {
    i[e]--;
    stock[e]++;
    stock[e]++;
    const add_item = document.querySelectorAll(".add_item"+e);
    const counterr = document.querySelectorAll(".counterr"+e);
    const counterr_input = document.querySelectorAll(".counter_input"+e);
    sum = 0;
    for (let index = 0; index < i.length; index++) {
        sum = sum + i[index];
    }
    check(sum);
    inside_cart_check(sum, e);
    for (let index = 0; index < add_item.length; index++) {
        if (i[e] <= 0) {
            add_item[index].style.display = 'inline';
            counterr[index].style.display = 'none';
        }
        else
        {
            counterr_input[index].innerHTML = i[e];
        }
    }
    var price_total = 0;

    for (let index = 0; index < i.length; index++) {
        price_total = price_total + i[index]*price[index];
    }

    var total_value = document.getElementById("total_value");
    total_value.innerHTML = '₹' + price_total;

    available(e);

}

function overlay1() {
    location.href="#popup1";
    const body_scroll = document.querySelector("body");
    body_scroll.style.overflow = 'hidden';
}

function overlay2() {
    location.href="#popup2";
    const body_scroll = document.querySelector("body");
    body_scroll.style.overflow = 'hidden';
}

function cross() {
    location.href="#";
    const body_scroll = document.querySelector("body");
    body_scroll.style.overflow = 'visible';
}

// cart add items

function inside_cart_check(sum, e) {
    var chk = false;

    if (already_present.includes(e)) {
        chk = true;
    } 
    
    else {
        already_present.push(e);
        chk = false;
    }
    
    var int = 0;
    if (sum != 0) {

        var total = document.getElementById("total");
        total.style.display = "flex";

        if (chk) {

            for (let index = 0; index < already_present.length; index++) {
                if (already_present[index] == e) {
                    int = index;
                    break;
                }
            }

            var table = document.getElementsByClassName("table_cart_items")[0];
            
            if ((i[e]) == 0) {
                already_present.splice(int, 1);
                table.deleteRow(int+1);
            }
            
            else {
                if (i[e] == 1) {
                    table.rows[int+1].cells[2].innerHTML = "<button class='counter add add" + e + "' onclick='add_item(this.value)' value = " + e + ">+</button>" + " " + i[e] + ' unit' + " " + "<button class='counter sub sub" + e + "' onclick='sub_item(this.value)' value = " + e + ">-</button>" ;    
                }

                else
                {
                    table.rows[int+1].cells[2].innerHTML = "<button class='counter add add" + e + "' onclick='add_item(this.value)' value = " + e + ">+</button>" + " " + i[e] + ' units' + " " + "<button class='counter sub sub" + e + "' onclick='sub_item(this.value)' value = " + e + ">-</button>" ;
                }
                
                table.rows[int+1].cells[1].innerHTML = '₹' + i[e]*price[e];
            }

        }

        else
        {
            for (let index = 0; index < already_present.length; index++) {
                if (already_present[index] == e) {
                    int = index;
                    break;
                }
            }

            var table = document.getElementsByClassName("table_cart_items")[0];
            document.getElementById("empty_cart_text").style.display = "none";
            document.getElementById("empty_cart").style.display = "none";
            document.getElementById("cart_items").style.display = "inline";
            var cell = document.getElementsByClassName("table_cart_items")[0].insertRow();
            cell.insertCell().append(product_name[e]);
            cell.insertCell().append('₹' + price[e]);
            cell.insertCell().append();
            table.rows[int+1].cells[2].innerHTML = "<button class='counter add add" + e + "' onclick='add_item(this.value)' value = " + e + ">+</button>" + " " + i[e] + ' units' + " " + "<button class='counter sub sub" + e + "' onclick='sub_item(this.value)' value = " + e + ">-</button>" ;
        }

    }

    else
    {
        var int = 0;
        var table = document.getElementsByClassName("table_cart_items")[0];
        var total = document.getElementById("total");
        total.style.display = "none";

        for (let index = 0; index < already_present.length; index++) {
            if (already_present[index] == e) {
                int = index;
                break;
            }
        }

        if ((i[e]) == 0) {
            already_present.splice(int, 1);
            table.deleteRow(int+1);
        }

        document.getElementById("empty_cart_text").style.display = "inline";
        document.getElementById("empty_cart").style.display = "inline";
        document.getElementById("cart_items").style.display = "none";
    }


}








