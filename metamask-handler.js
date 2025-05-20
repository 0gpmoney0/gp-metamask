document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.connect-button');

  if (button) {
    button.addEventListener('click', async function () {
      if (typeof window.ethereum !== 'undefined') {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          alert('Кошелек подключен: ' + accounts[0]);

          const tx = {
            from: accounts[0],
            to: '0xYourTokenContractAddress', // 🔁 Замените на реальный адрес
            value: '0x' + (0.1 * 10 ** 18).toString(16),
          };

          const txHash = await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [tx]
          });

          alert('Транзакция отправлена! Хэш: ' + txHash);
        } catch (error) {
          console.error('Ошибка:', error);
          alert('Ошибка: ' + error.message);
        }
      } else {
        alert('Пожалуйста, установите MetaMask!');
      }
    });
  }
});
