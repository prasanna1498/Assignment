function selectOption(num) {
  const allOptions = document.querySelectorAll('.option');
  allOptions.forEach((el, i) => {
    el.classList.remove('active');
    document.getElementById(`unit${i + 1}`).checked = false;
  });

  const selected = document.getElementById(`unit${num}`).parentElement;
  selected.classList.add('active');
  document.getElementById(`unit${num}`).checked = true;

  const prices = { 1: 10.00, 2: 18.00, 3: 24.00 };
  document.getElementById('total').textContent = `$${prices[num].toFixed(2)} USD`;
}
