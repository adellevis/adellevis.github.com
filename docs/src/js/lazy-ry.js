// <img> swap
// window.onload = function() {
//     var images = document.getElementsByTagName('img');
//     for (var i = 0; i < images.length; i++) {
//         var highRes = images[i].getAttribute('data-high-res');
//         images[i].src = highRes;
//     }
// };

// <!-- Initial image using <img> -->
// <picture>
//   <source srcset="thumb.webp" media="(max-width: 767px)">
//   <source srcset="thumb@2x.webp 2x" media="(min-width: 768px)">
//   <img id="thumbnail" src="thumb.png" alt="Thumbnail">
// </picture>

<!-- JavaScript code -->

  var thumbnail = document.getElementById('thumbnail');

  // Check if the browser supports WebP
  function supportsWebP() {
    var elem = document.createElement('canvas');
    if (elem.getContext && elem.getContext('2d')) {
      return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
    return false;
  }

  // Load 2x WebP version if supported, otherwise load fallback JPG
  if (supportsWebP()) {
    var img2x = new Image();
    img2x.src = 'thumb@2x.webp';

    img2x.addEventListener('load', function() {
      thumbnail.src = img2x.src;
    });
  } else {
    var img1xJpg = new Image();
    img1xJpg.src = 'thumb.png';

    img1xJpg.addEventListener('load', function() {
      thumbnail.src = img1xJpg.src;
    });
  }
