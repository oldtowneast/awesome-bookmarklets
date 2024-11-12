javascript: (function() {
    var url = window.location.href;
    var text = '';
    if (window.getSelection) {
        text = window.getSelection().toString();
    }
    var wordpressUrl = 'https://openpluto.com/wp-admin/post-new.php';
    var postUrl = wordpressUrl + '?content=' + encodeURIComponent(text) + '&title=' + encodeURIComponent(document.title);
    window.open(postUrl);
})();