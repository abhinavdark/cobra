var div = document.createElement("div");

div.innerHTML = `<div class="menu-container">
<div class="menu">
    <ul>
      <li class='menu-logo desktop'><a href="index.html"><img src="images/logo.png" alt="havocmadhan" /></a></li>
      <li class='mobile'><a href="index.html">HOME</a></li>
      <li><a href="http://calistnx.com/">CALISTNX</a></li>
      <li><a href="" target=''>NEWSLETTER</a></li>
      <li><a href="https://beacons.ai/havocmadhan" target="_blank">SOCIAL MEDIA</a></li>
      <li><a href='#'>WISDOM</a>
      </li>
      <li><a href='#'>RESOURCES</a>
        <ul>
          <li><a href="http://calistnx.com/" target='_blank'>Soon</a></li>
          <li><a href="">NEWSLETTER</a></li>
          <li><a href="https://beacons.ai/havocmadhan" target='_blank'>CONTACT ME</a></li>
        </ul>
      </li>
      
      <li><a href="https://havocmadhan.com/">MY ACCOUNT</a></li>
      <li class='right-btn shop-btn'><a href="#">SOON</a></li>
      <li class='right-btn shop-btn'><a href="http://havocmadhan.com/">Soon</a></li>
    </ul>
</div>
</div>`;

document.currentScript.parentNode.insertBefore(
  div.firstElementChild,
  document.currentScript
);


document.addEventListener("DOMContentLoaded", () => {

  $('head').append('<link rel="stylesheet" href="css/menu-style.css" type="text/css"/>');
  $('head').append('  <link rel="stylesheet" href="css/ionicons.min.css" type="text/css">');
  
  $("#agent-btn").click(function(e) {
    Intercom('showNewMessage');
  });
});

