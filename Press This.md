Here's a basic outline of how you can create your own "Press This" bookmarklet:

### 1. Understand Bookmarklets
- A bookmarklet is essentially a small JavaScript application that can be stored as a bookmark in your browser.
- When you click the bookmarklet, it executes the JavaScript on the current page you are viewing.

### 2. Basic Bookmarklet Structure
A simple bookmarklet starts with `javascript:` followed by your code. For example:

```javascript
javascript: (function() {
    // Your code goes here
})();
```

### 3. Grab Page Details
Your bookmarklet will need to grab details from the current webpage, like the URL and any selected text. Here’s a basic way to do this:

```javascript
var url = window.location.href;
var text = '';
if (window.getSelection) {
    text = window.getSelection().toString();
}
```

### 4. Open a New WordPress Post
The next step is to open a new window or tab with a WordPress post creation URL, including the grabbed details. WordPress has a URL structure for creating new posts which can include parameters for content.

```javascript
var wordpressUrl = 'https://yourwordpresssite.com/wp-admin/post-new.php';
var postUrl = wordpressUrl + '?content=' + encodeURIComponent(text) + '&title=' + encodeURIComponent(document.title);
window.open(postUrl);
```

Replace `'https://yourwordpresssite.com'` with the URL of your WordPress site.

### 5. Putting It All Together
Combine all the pieces into a bookmarklet:

```javascript
javascript: (function() {
    var url = window.location.href;
    var text = '';
    if (window.getSelection) {
        text = window.getSelection().toString();
    }
    var wordpressUrl = 'https://yourwordpresssite.com/wp-admin/post-new.php';
    var postUrl = wordpressUrl + '?content=' + encodeURIComponent(text) + '&title=' + encodeURIComponent(document.title);
    window.open(postUrl);
})();
```

### 6. Create the Bookmark
- Minify your JavaScript code to make it compact.
- Create a new bookmark in your browser.
- Edit the bookmark and paste your minified JavaScript code in the URL field.

### 7. Use Your Bookmarklet
Now, when you're on a page you want to blog about, just click the bookmarklet. It will open a new WordPress post with the page title and any selected text.

### Caveats
- This is a basic implementation. Depending on your WordPress setup, you might need to adjust the URL structure or handle authentication differently.
- Bookmarklets can have limitations with cross-site scripting protections in modern browsers.

This should give you a good starting point to recreate the "Press This" functionality. As with any web development, you might need to tweak it to fit your specific needs and browser behaviors.