function removeAllWatchHistory() {
  let lastHeight = 0;

  function clickAndScroll() {
    // Select all removal buttons by their class name
    const removeButtons = document.querySelectorAll('button.SPqQmU._3RF4FN._1D7HW3._2G6lpB.pU0yt1');

    // Click each button with a delay
    removeButtons.forEach((button, index) => {
      setTimeout(() => {
        button.click();
        console.log(`Removed item ${index + 1} of ${removeButtons.length}`);
      }, index * 100);
    });

    // Scroll down after clicking all visible buttons
    setTimeout(() => {
      window.scrollBy(0, document.body.scrollHeight);
      let newHeight = document.body.scrollHeight;
      if (newHeight > lastHeight) {
        lastHeight = newHeight;
        console.log("Scrolled down to load more videos...");
        setTimeout(clickAndScroll, 2000); // Wait for new items to load
      } else {
        console.log("All items removed from watch history.");
      }
    }, removeButtons.length * 100 + 500); // Wait for all clicks to complete before scrolling
  }

  // Start the process
  clickAndScroll();
}

// Call the function to remove all items
removeAllWatchHistory();
