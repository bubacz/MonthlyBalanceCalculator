/*
Kevin Bubacz
WEB115
02/26/2016
*/

var $ = function(id) { return document.getElementById(id); }

var get_item_list = function (item_list) {
	if ( item_list.length == 0 ) {
		return ""; // outputs blank display if no value is entered
	}
	
	// format for transactions output text area
	var list, trans_amount = 0;
	list  = pad_right("Date", 12) + " ";
	list += pad_right("Amount", 12) + " ";
	list += "Running Balance\n";
	list += pad_right("", 12, "-") + " ";
	list += pad_right("", 12, "-") + " ";
	list += pad_right("", 15, "-") + "\n";
	
	var balance = 2000; // set starting balance
	
	for ( var i in item_list) {
		var item = item_list[i];
		list += pad_right(item_list[i]["trans_date"], 12) + " ";
		if ( item["trans_type"] == "withdrawal" ) { // withdrawal selected
			balance -= item["trans_amount"];
			list += "$" + pad_left("-" + item["trans_amount"].toFixed(2), 11) + " ";
		} else { // deposit selected
			balance += item["trans_amount"];
			list += "$" + pad_left(item["trans_amount"].toFixed(2), 11) + " ";
		}
		
		list += "$" + pad_left(balance.toFixed(2), 14) + "\n";
	}
	return list; // displays all transactions
}

var get_starting_balance = function (transactions) {
	var starting_balance = 2000;
	return starting_balance; // displays the starting balance
}

var get_deposits = function (transactions) {
	var total_deposits = 0;
	for ( var i in transactions ) {
		var item = transactions[i];
		if ( item["trans_type"] == "deposit" ) {
			total_deposits += item["trans_amount"];
		}
	}
	return total_deposits; // displays the total deposits
}

var get_withdrawals = function (transactions) {
	var total_withdrawals = 0;
	for ( var i in transactions ) {
		var item = transactions[i];
		if ( item["trans_type"] == "withdrawal" ) {
			total_withdrawals -= item["trans_amount"];
		}
	}
	return total_withdrawals; // displays the total withdrawals
}

var get_endingBalance = function (transactions) {
	var ending_balance = 2000;
	for ( var i in transactions) {
		var item = transactions[i];
		if ( item["trans_type"] == "withdrawal" ) {
			ending_balance -= item["trans_amount"];
		} else {
			ending_balance += item["trans_amount"];
		}
	}
	return ending_balance; // displays the ending balance
}












