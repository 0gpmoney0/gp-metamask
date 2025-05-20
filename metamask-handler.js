// Ждём полной загрузки страницы
document.addEventListener('DOMContentLoaded', function () {
  // Назначаем обработчик клика на кнопку с классом .connect-button
  const btn = document.querySelector('.connect-button');

  if (btn) {
    btn.addEventListener('click', async function () {
      if (typeof window.ethereum !== 'undefined') {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          alert('Кошелек подключен: ' + accounts[0]);

          const tx = {
            from: accounts[0],
            to: '0xYourTokenContractAddress', // ← замени на реальный адрес контракта
            value: '0x' + (0.1 * 10 ** 18).toString(16), // 0.1 ETH в wei
          };

          const txHash = await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [tx]
          });

          alert('Транзакция отправлена! Хэш: ' + txHash);
        } catch (error) {
          console.error('Ошибка подключения или транзакции:', error);
          alert('Ошибка: ' + error.message);
        }
      } else {
        alert('Пожалуйста, установите MetaMask!');
      }
    });
  } else {
    console.warn('Кнопка .connect-button не найдена');
  }
});
