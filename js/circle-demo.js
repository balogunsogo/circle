// Capture before the exported form handler: never submit demo data to a third party.
document.addEventListener('submit', function(event) {
 const form = event.target.closest('form[data-circle-demo]');
 if (!form) return;
 event.preventDefault(); event.stopImmediatePropagation();
 let note = form.querySelector('[role="status"]');
 if (!note) { note = document.createElement('p'); note.setAttribute('role','status'); form.appendChild(note); }
 note.textContent = 'Demo only — your message has not been sent or stored.';
}, true);
