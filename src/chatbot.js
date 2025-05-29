async function askGemini(prompt) {
  const response = await fetch("https://us-central1-time-tracker-5dae5.cloudfunctions.net/geminiChat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });
  const data = await response.json()
  return data.text
}

document.getElementById('send-button').onclick = async function() {
  const input = document.getElementById('user-input')
  const inputValue = input.value
  const answer = await askGemini(inputValue)
  alert(answer)
  input.value = ''
};