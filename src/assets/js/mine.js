// Copy the current data in details page
    var animation = bodymovin.loadAnimation({
      container: document.getElementById('lottie-container'),
      loop: true,
      autoplay: true,
      path: './assets/alerts/check.json' // Replace 'your-animation.json' with the path to your JSON file
    });
    // For copying the data
    document.getElementById('copyIcon').addEventListener('click', function () {
      
      var contentToCopy = document.querySelector('.copy-info'); // Select the div to copy its content
      var range = document.createRange();
      range.selectNode(contentToCopy);
      window.getSelection().removeAllRanges(); // Clear previous selections
      window.getSelection().addRange(range); // Add range to selection
      document.execCommand('copy'); // Copy the selected content to clipboard
      window.getSelection().removeAllRanges(); // Clear selection after copying
    });
// The bellow code is for zooming in imgs details page
    // main picture
    var picture = document.querySelector('#pic');
    // Main picture container
    var mainContainer = document.querySelector('#picture');

    // selector
    var rect = document.querySelector("#rect");

    // Zoom window
    var zoom = document.querySelector('#zoom');

    // list of pictures 

    // Active side picture
    let picActive = 1;

    // Width and height of main picture in px
    let w1 = mainContainer.offsetWidth;
    let h1 = mainContainer.offsetHeight;

    // Zoom ratio
    let ratio = 3;

    // Zoom window background-image size
    zoom.style.backgroundSize = w1 * ratio + 'px ' + h1 * ratio + 'px';

    // Coordinates of mouse cursor
    let x, y, xx, yy;

    // Width and height of selector
    let w2 = rect.offsetWidth;
    let h2 = rect.offsetHeight;

    // zoom window width and height
    zoom.style.width = w2 * ratio + 'px';
    zoom.style.height = h2 * ratio + 'px';

    // half of selector shows outside the main picture
    // We need half of width and height
    w2 = w2 / 2;
    h2 = h2 / 2;
    // moving the selector box 
    function move(event) {
      // How far is the mouse cursor from an element
      // x how far the cursor from left of element
      x = event.offsetX;
      // y how far the cursor from the top of an element
      y = event.offsetY;

      xx = x - w2;
      yy = y - h2;
      // Keeping the selector inside the main picture
      // left of picture
      if (x < w2) {
        x = w2;
        // matching the zoom window with the selector
        xx = 0;
      }
      // right of main picture
      if (x > w1 - w2) {
        x = w1 - w2;
        xx = x - w2;
      }
      // top of main picture 
      if (y < h2) {
        y = h2;
        yy = 0;
      }
      // bottom of main picture
      if (y > h1 - h2) {
        y = h1 - h2;
      }

      xx = xx * ratio;
      yy = yy * ratio;
      // changing the position of the selector
      rect.style.left = x + 'px';
      rect.style.top = y + 'px';
      // changing background image of zoom window
      zoom.style.backgroundPosition = '-' + xx + 'px ' + '-' + yy + 'px';
    }

    mainContainer.addEventListener('mousemove', function () {
      move(event);
      addOpacity();
    })

    // show selector
    // show zoom window
    function addOpacity() {
      rect.classList.add('rect-active');
      zoom.classList.add('rect-active');
    }

    // Hide the zoom window 
    function removeOpacity() {
      zoom.classList.remove('rect-active');
    }

    mainContainer.addEventListener('mouseout', function () {
      removeOpacity();
    })
