function selectOption(num) {
  const options = document.querySelectorAll('.option');
  const prices = { 1: 10.00, 2: 18.00, 3: 24.00 };

  options.forEach((option, index) => {
    const id = index + 1;
    const input = document.getElementById(`unit${id}`);
    const variants = option.querySelector('.variant-selects');

    if (id === num) {
      option.classList.add('active');
      input.checked = true;
      if (variants) variants.classList.remove('hidden');
    } else {
      option.classList.remove('active');
      input.checked = false;
      if (variants) variants.classList.add('hidden');
    }
  });

  document.getElementById('total').textContent = `$${prices[num].toFixed(2)} USD`;
}
