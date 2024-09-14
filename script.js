function calculateCost() {
    // Get the input values
    const length = parseFloat(document.getElementById('length').value);
    const shippingLine = document.getElementById('shipping-line').value;

    // Validate input
    if (isNaN(length) || length <= 0) {
        document.getElementById('result').textContent = "Please enter a valid vehicle length.";
        return;
    }

    // Cargo Dues Calculation
    const cargoDues = 170 * length;

    // D.O Charges based on Shipping Line
    let doCharges;
    switch (shippingLine) {
        case 'MOL':
        case 'HOEGH':
        case 'NYK':
        case 'OTHER':
            doCharges = 900;
            break;
        case 'BEFOREWARD':
            doCharges = 1350;
            break;
        default:
            doCharges = 900;
    }

    // Landing Fee Calculation based on vehicle length
    let landingFee;
    if (length >= 3.5 && length < 4.8) {
        landingFee = 1437.50; // Updated range: 3.5m to 4.8m
    } else if (length >= 4.8) {
        landingFee = 2394.50;
    } else {
        landingFee = 0; // No landing fee for lengths below 3.5 meters
    }

    // Fixed Costs
    const transportCost = 700;
    const otherCosts = 500;

    // Calculate the clearance charge (how much to charge the customer)
    let clearanceCharge;
    if (length >= 4.8) {
        clearanceCharge = (shippingLine === 'BEFOREWARD') ? 6400 : 6200; // 6400 for Beforward, 6200 for others
    } else {
        clearanceCharge = (shippingLine === 'BEFOREWARD') ? 5900 : 5800; // 5900 for Beforward, 5800 for others
    }

    // Calculate the total internal cost (excluding the clearance charge)
    const totalCost = cargoDues + doCharges + landingFee + transportCost + otherCosts;

    // Display the breakdown
    document.getElementById('cargo-dues').textContent = cargoDues.toFixed(2);
    document.getElementById('do-charges').textContent = doCharges.toFixed(2);
    document.getElementById('landing-fee').textContent = landingFee.toFixed(2);
    document.getElementById('transport-cost').textContent = transportCost.toFixed(2);
    document.getElementById('other-costs').textContent = otherCosts.toFixed(2);
    document.getElementById('total-cost').textContent = totalCost.toFixed(2);
    document.getElementById('clearance-charge').textContent = clearanceCharge.toFixed(2);
}
