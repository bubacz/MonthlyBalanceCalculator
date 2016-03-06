/*
Kevin Bubacz
WEB115
02/26/2016
*/

var $ = function(id) { return document.getElementById(id); }

var transactions = []; // creates empty array for transaction list

// determines what information to display in transactions text area
var update_display = function () {
	$("item_list").value = get_item_list(transactions);
	$("starting_balance").value = get_starting_balance(transactions).toFixed(2);
	$("total_deposits").value = get_deposits(transactions).toFixed(2);
	$("total_withdrawals").value = get_withdrawals(transactions).toFixed(2);
	$("ending_balance").value = get_endingBalance(transactions).toFixed(2);
	
	$("trans_date").value = "";
	$("trans_amount").value = "";
	$("trans_date").focus();
}

var item_add_click = function () { // user clicks "add transaction" button
	var item = []; // creates empty item array to be added to transaction array
	item["trans_date"] = $("trans_date").value;
	item["trans_type"] = $("trans_type").value;
	item["trans_amount"] = parseFloat($("trans_amount").value);
	
	if ( item["trans_date"] == "" ) return;
	if ( isNaN(item["trans_amount"])) return;
	
	transactions.push(item); // adds new item to the transaction array
	update_display();
}

window.onload = function () {
	$("add_trans").onclick = item_add_click;
	$("trans_date").focus();
}