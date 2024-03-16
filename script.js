document.getElementById('fetchFacts').addEventListener('click', function() {
    fetch('https://brianobruno.github.io/cats.json')
        .then(response => response.json())
        .then(data => {
            updateTable(data.facts);
            updateCatPhoto(data.catPhoto);
        })
        .catch(error => console.log('Error fetching cat facts:', error));
});

function updateTable(facts) {
    const factsBody = document.getElementById('factsBody');
    factsBody.innerHTML = ''; // Clear existing rows

    // Sort by factId
    facts.sort((a, b) => a.factId - b.factId);

    // Populate table
    facts.forEach(fact => {
        let row = factsBody.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.textContent = fact.factId;
        cell2.textContent = fact.text;
    });
}

function updateCatPhoto(photoUrl) {
    const catPhoto = document.getElementById('catPhoto');
    catPhoto.src = photoUrl;
    catPhoto.alt = 'Cat photo';
}
