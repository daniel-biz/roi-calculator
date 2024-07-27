document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculate-roi');
    const resultsDiv = document.getElementById('results');
    const errorMessageDiv = document.getElementById('error-message');

    calculateButton.addEventListener('click', calculateROI);

    function calculateROI() {
        const clientValue = parseInt(document.getElementById('client-value').value);
        const missedCalls = parseInt(document.getElementById('missed-calls').value);
        const closeRate = parseFloat(document.getElementById('close-rate').value);

        // Input validation
        if (isNaN(clientValue) || isNaN(missedCalls) || isNaN(closeRate)) {
            showError('Please fill in all fields with valid numbers.');
            return;
        }

        if (clientValue < 0 || missedCalls < 0 || closeRate < 0 || closeRate > 100) {
            showError('Please enter positive numbers. Close rate should be between 0 and 100.');
            return;
        }

        // Calculations
        const weeklySalesLost = Math.round(missedCalls * (closeRate / 100));
        const monthlyLeftOnTable = weeklySalesLost * clientValue * 4; // Assuming 4 weeks per month
        const weCharge = 247;
        const roi = ((monthlyLeftOnTable - weCharge) / weCharge) * 100;

        // Update results
        document.getElementById('weekly-sales-lost').textContent = weeklySalesLost;
        document.getElementById('monthly-left').textContent = '$' + monthlyLeftOnTable.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        document.getElementById('roi').textContent = roi.toFixed(2) + '%';

        // Show results and hide error message
        resultsDiv.classList.remove('hidden');
        errorMessageDiv.classList.add('hidden');
    }

    function showError(message) {
        errorMessageDiv.textContent = message;
        errorMessageDiv.classList.remove('hidden');
        resultsDiv.classList.add('hidden');
    }
});
