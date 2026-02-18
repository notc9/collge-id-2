function uploadPhoto(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById('studentPhoto').src = e.target.result;
  };
  reader.readAsDataURL(file);
}