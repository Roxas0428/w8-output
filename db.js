// ページが読み込まれたときに、localStorageからemailとpasswordを取得して入力フィールドにセット
window.onload = function () {
  var email = localStorage.getItem("email");
  var password = localStorage.getItem("password");

  if (email && password) {
    document.getElementById("username").value = email;
    document.getElementById("password").value = password;
  }

  // Sign In ボタンが押されたときのイベントハンドラ
  document
    .querySelector(".login-button")
    .addEventListener("click", function (event) {
      event.preventDefault();
      var email = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      // emailとpasswordをlocalStorageに保存
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    });
};
