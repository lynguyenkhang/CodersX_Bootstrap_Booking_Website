  function scaleContent() {

    document.getElementById('small_title').classList.add('hide');
    document.getElementById('small_underline').classList.add('hide');
    document.getElementById('big_title').classList.add('hide');
    document.getElementById('suites_box').classList.add('hide');

    setTimeout(function() {
      document.getElementById('small_title').classList.remove('hide');
      document.getElementById('small_underline').classList.remove('hide');
      document.getElementById('big_title').classList.remove('hide');
      document.getElementById('suites_box').classList.remove('hide');
    },1100)
  }

  function parallax5() {
    document.getElementById('parallax5').classList.add('show');
    document.getElementById('parallax4').classList.remove('show');
    scaleContent();
  }

  function parallax4() {
    document.getElementById('parallax4').classList.add('show');
    document.getElementById('parallax5').classList.remove('show');
    scaleContent();
  }