const UNIT_AMOUNT = {
	"ONE HUNDRED": 100.00 * 100,
	"TWENTY": 20.00 * 100,
	"TEN": 10.00 * 100,
	"FIVE": 5.00 * 100,
	"ONE": 1.00 * 100,
	"QUARTER": 0.25 * 100,
	"DIME": 0.10 * 100,
	"NICKEL": 0.05 * 100,
	"PENNY": 0.01 * 100,
};
function checkCashRegister(price, cash, cid) {
	//we multiply by 100 to remove the decimals
	//calculate change
	let change = (cash - price)*100;

	let cidTotal = 0;
	//print everything from the 2d array
	for(let elem of cid){
		cidTotal += elem[1] * 100;
	}
	//INSUFFICIENT FUNDS
	if(change>cidTotal){
		return {status:"INSUFFICIENT_FUNDS", change:[]};
	}else if(change===cidTotal){
		//if we have exactly CLOSED
		return {status:"CLOSED", change:cid};
	}else{
		let res = [];
		cid = cid.reverse(); //sorted from highest to lowest based on instructions
		
		for(let elem of cid){
			let moneyHolder = [elem[0],0]; //all the UNIT_AMOUNT with the value of zero
			elem[1] *= 100;

			//execute the code for change
			while(change>=UNIT_AMOUNT[elem[0]] && elem[1]>0){
				change -= UNIT_AMOUNT[elem[0]];
				elem[1] -= UNIT_AMOUNT[elem[0]];
				moneyHolder[1] += UNIT_AMOUNT[elem[0]]/100;
			}
			//check money holder
			if(moneyHolder[1]>0){
				res.push(moneyHolder);
			}
		}
		// Check if there is still change to give
		if(change>0){
			return {status:"INSUFFICIENT_FUNDS", change:[]};
		}
		
		return {status:"OPEN", change:res};
	}
}
  
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);