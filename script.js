const input = document.getElementById('input');
    function checkInput() {
      if (input.value === 'password') {
        document.getElementById('secret-page').style.display = 'block';
        document.getElementById('my-card').style.display = 'none';
      }
    }