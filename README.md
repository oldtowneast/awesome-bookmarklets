<!-- 
## foo
```javascript
foo
```
-->

# awesome-bookmarklets

## Post Overview
```javascript
javascript:window.location.href = `${window.location.protocol}//${window.location.hostname}/wp-admin/edit.php?post_status=publish&post_type=post`;
```


## Edit Post

```javascript
javascript:!function(){const e=Array.from(document.body.classList).filter((function(e){return e.includes("page-id-")||e.includes("postid-")})),o=e.length?e[0].replace(/page-id-|postid-/,%22%22):0;if(!o)return%20void%20alert(%22No%20WordPress%20post%20found%22);let%20t=document.querySelector(%27link[rel=%22https://api.w.org/%22]%27);t=t&&t.href?t.href.replace(%22/wp-json/%22,%22%22):document.location.origin,window.location.href=`${t}/wp-admin/post.php?action=edit&post=${o}`}();
```

## Nomads
```javascript
javascript:window.location.href = `${window.location.protocol}//${window.location.hostname}/wp-admin/edit.php?s&post_status=all&post_type=post&action=-1&m=0&cat=1&filter_action=Filter&paged=1&action2=-1`;
```


## Site Health

```javascript
javascript:window.location.href = `${window.location.protocol}//${window.location.hostname}/wp-admin/site-health.php?tab=debug`;
```

## Login
```javascript
javascript:window.location.href = `${window.location.protocol}//${window.location.hostname}/wp-admin`;
```

## Site
```javascript
javascript:window.location.href = `${window.location.protocol}//${window.location.hostname}/wp-admin/site-editor.php`;
```

