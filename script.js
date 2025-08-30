const stripe = Stripe('pk_test_51OQIX7EDuRo2uHSynlFRqu5qoz9fdrBDyLy2DJr1VP793X5AyQ1NKJ45P9NSoT8txi8gTiAxpAoIYTZjBQZBYqfA00VRlYGHoF'); // Substitua pela sua chave pública
const elements = stripe.elements();
const card = elements.create('card');
card.mount('#card-element');

document.getElementById('payment-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const { error, paymentMethod } = await stripe.createPaymentMethod({
    type: 'card',
    card: card,
  });

  const resultDiv = document.getElementById('payment-result');

  if (error) {
    resultDiv.innerText = `❌ Erro: ${error.message}`;
    resultDiv.style.color = 'red';
  } else {
    resultDiv.innerText = `✅ Cartão válido! ID: ${paymentMethod.id}`;
    resultDiv.style.color = 'green';
  }
});
