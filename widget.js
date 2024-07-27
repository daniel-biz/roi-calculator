(function() {
    function loadScript(url, callback) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.onload = callback;
        document.head.appendChild(script);
    }

    function loadCSS(url) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        document.head.appendChild(link);
    }

    function initWidget() {
        var container = document.getElementById('roi-calculator-container');
        if (!container) {
            console.error('ROI Calculator container not found');
            return;
        }

        container.innerHTML = `
            <div id="roi-calculator" class="roi-widget">
                <h2>ROI Calculator</h2>
                
                <div class="input-group">
                    <label for="client-value">Average Client Value:</label>
                    <input type="number" id="client-value" min="0" step="1" required>
                </div>
                
                <div class="input-group">
                    <label for="missed-calls">Missed Calls per Week:</label>
                    <input type="number" id="missed-calls" min="0" step="1" required>
                </div>
                
                <div class="input-group">
                    <label for="close-rate">Average Close Rate (%):</label>
                    <input type="number" id="close-rate" min="0" max="100" step="0.1" required>
                </div>
                
                <button id="calculate-roi">Calculate ROI</button>
                
                <div id="results" class="hidden">
                    <h3>Results:</h3>
                    <p>Average Weekly Sales Lost: <span id="weekly-sales-lost"></span></p>
                    <p>Monthly $$$ Left on Table: <span id="monthly-left"></span></p>
                    <p>We Charge (per month): <span id="we-charge">$247</span></p>
                    <p>ROI: <span id="roi"></span></p>
                </div>
                
                <div id="error-message" class="hidden"></div>
            </div>
        `;

        loadScript('https://yourusername.github.io/roi-calculator/roi-calculator.js');
    }

    loadCSS('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
    loadCSS('https://yourusername.github.io/roi-calculator/styles.css');
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initWidget);
    } else {
        initWidget();
    }
})();
