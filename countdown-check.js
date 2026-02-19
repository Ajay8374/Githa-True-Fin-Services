// Countdown timer check - redirects to countdown page if timer hasn't finished
(function() {
  // Set the same target date/time as in countdown.html
  const targetDateTime = '2026-02-19 21:35:00';
  
  // Don't redirect if we're already on the countdown page
  if (window.location.pathname.endsWith('countdown.html')) {
    return;
  }
  
  // Check if countdown has finished
  const targetDate = new Date(targetDateTime).getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;
  
  // If countdown hasn't finished, redirect to countdown page
  if (distance > 0) {
    window.location.href = 'countdown.html';
  }
})();
