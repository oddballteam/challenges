## Analytics testing:

For this challenge, we are building an server that returns a tracking pixel and records analytics that are sent along with that request.


Build out the server and improve the front end code to make this all work

### Client side

Suppose we have a link:

```html
<a href='/some-where' id='some-where'>A link to somewhere</a>
```


An analytics handler written (feel free to redesign):

```js
function onClickHandler (a) {
  a.addEventListener('click', () => {
    trackClick(Math.random().toString(36).slice(2), a.href)
  }
}

function trackClick (id, href) {
  new Image(`https://.gif?id=${id}&href=${encodeURIComponent(href)}`)
}
```


### Server Side

A microservice that receives pixels and serves analytics queries.
The queries (reads) may be behind the writes due to how the system/database is built–let's assume reads are 1 minute behind writes.

#### GET https://.gif

Fires a pixel.
Returns `200` status code with an empty gif as the body.

```bash
curl -X POST https://.gif?id=1234&href=https://google.com
```

#### GET https://

Returns all click events within the specified query.

Query parameters:

- `id` - by id
- `event` - by event type
- `before` - before a UNIX timestamp
- `after` - after a UNIX timestamp

```bash
curl https://?id=1234
```


## Tips and Tricks

- I recommend using sqlite or even just a json file database to reduce overhead
