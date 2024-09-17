document.addEventListener('DOMContentLoaded', async () => {
    const tableBody = document.querySelector('#crypto-table tbody');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentPage = 1;
    const rowsPerPage = 5;
    let cryptos = [];

    // Function to display rows for the current page
    function displayPage(page) {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const pageData = cryptos.slice(start, end);

        tableBody.innerHTML = '';

        pageData.forEach((crypto, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${start + index + 1}</td>
                <td>${crypto.name}</td>
                <td>${crypto.last}</td>
                <td>${crypto.buy} / ${crypto.sell}</td>
                <td>${crypto.volume}</td>
                <td>${crypto.base_unit}</td>
            `;
            tableBody.appendChild(row);
        });

        // Disable/enable buttons based on the current page
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = end >= cryptos.length;
    }

    // Fetch data and initialize pagination
    async function fetchData() {
        try {
            const response = await fetch('/api/getTop10');
            cryptos = await response.json();
            displayPage(currentPage);  // Initially display the first page
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    }

    // Event listeners for pagination buttons
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayPage(currentPage);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage * rowsPerPage < cryptos.length) {
            currentPage++;
            displayPage(currentPage);
        }
    });

    // Fetch data every 10 seconds
        setInterval(fetchData, 10000);


    // Initial fetch of data
    fetchData();
});
