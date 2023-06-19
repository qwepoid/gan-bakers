export function calculateTotalItems(items) {
    let total = 0;
    debugger;
    total = items.reduce((acc, cur) => {
      acc += cur.itemQty;
      return acc;
    }, 0);
    return total;
  }

  export function calculateTotalPrice(items) {
    let total = 0;
    debugger;
    total = items.reduce((acc, cur) => {
        let qty = cur.itemQty;
        let price = cur.itemPrice;
      acc += (qty * price);
      return acc;
    }, 0);
    return total;
  }