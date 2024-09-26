document.addEventListener('DOMContentLoaded', () => {
    const translationForm = document.getElementById('translationForm');
    const textInput = document.getElementById('text');
    const languageSelect = document.getElementById('language');
    const resultDiv = document.getElementById('result');
    const translatedTextElement = document.getElementById('translatedText');

    translationForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const text = textInput.value.trim();
        const language = languageSelect.value;

        console.log('Sending translation request:', { text, language });

        const response = await fetch('/translate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text, language }),
        });

        const data = await response.json();
        console.log('Received translation response:', data);
        
        translatedTextElement.textContent = data.translatedText;
        resultDiv.style.display = 'block';
    });

    languageSelect.addEventListener('change', (e) => {
        console.log('Language changed to:', e.target.value);
    });

    // Xóa phần code liên quan đến suggestions và từ gốc
});