## Sitemap Challenge

We are going to build a sitemap. Because our site is dynamically generated,
the easiest way for us to do it is to write a crawler that will crawl the
site.

The interface for this crawler will be a function called `visit()`. See Below.

The crawler will start at the index and visit any of its child links.
The crawler will then visit those links as well and any of their child links.

This will continue until it has visted every link on our site.

The crawler will then take the sites it has visited and return a unique list
of them, and the time they were last modified. The order of this list does not
matter. Only its completeness does.

## Requirements

- `nodejs` installed


## Getting Started

- `npm test`


## Tips and Tricks

- analyze the helpers file to see what the site looks like
- feel free to create any objects, or classes that you want