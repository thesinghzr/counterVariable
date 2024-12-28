const decrementBtn = document.getElementById('decrement');
const incrementBtn = document.getElementById('increment');
const clearBtn = document.getElementById('clear');
const countDiv = document.getElementById('count');
const errorDiv = document.getElementById('error');

let count = 0;

incrementBtn.addEventListener('click', () => {
  count++;
  countDiv.innerHTML = count;
  errorDiv.style.display = 'none';
  if (count > 0) {
    clearBtn.style.display = 'inline-block';
  }
});

decrementBtn.addEventListener('click', () => {
  if (count > 0) {
    count--;
    countDiv.innerHTML = count;
    errorDiv.style.display = 'none';
    if (count === 0) {
      clearBtn.style.display = 'none';
    }
  } else {
    errorDiv.style.display = 'block';
  }
});

clearBtn.addEventListener('click', () => {
  count = 0;
  countDiv.innerHTML = count;
  clearBtn.style.display = 'none';
  errorDiv.style.display = 'none';
});