// Attach behavior when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
	var link = document.getElementById('messageLink');
	if (!link) return;

	// When the mouse rolls out of the link, show the alert
	link.addEventListener('mouseout', function () {
		alert('My first JavaScript program!');
	});

	// Also support click to show the same message (keeps link usable)
	link.addEventListener('click', function (e) {
		e.preventDefault();
		alert('My first JavaScript program!');
	});
});
