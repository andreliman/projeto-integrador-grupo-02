function readImage() {
  if (this.files && this.files[0]) {
    const file = new FileReader();
    file.onload = function (e) {
      document.getElementById("preview").src = e.target.result;
    };
    file.readAsDataURL(this.files[0]);
  }
}
document.getElementById("photo").addEventListener("change", readImage, false);
