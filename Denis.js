const content = document.querySelector('#content');
const url = 'https://api.nationalize.io?name=nathaniel';

const hitAPI = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

 document.addEventListener('DOMContentLoaded', async () => {
            let result = await hitAPI(url);
            let countries = result.country;

            let text = '<ul class="population">';
            countries.forEach(element => {
                text += `<li>`;
                text += `<h3>${element.country_id} (Probability: ${(element.probability * 100).toFixed(2)}%)</h3>`;
                text += `</li>`;
            });
            text += '</ul>';

            content.innerHTML = text;
});