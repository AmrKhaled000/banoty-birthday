(function () {
  'use strict';

  var KEY = 'banoty.birthday.unlocked';

  try {
    if (sessionStorage.getItem(KEY) === '1') return;
  } catch (e) {
    window.location.replace('password.html');
    return;
  }

  window.location.replace('password.html');
})();
