
    const tweet = document.getElementById('tweet');
    const charCount = document.getElementById('charCount');
    const tweetCropButton = document.getElementById('tweetCropButton');
    tweet.addEventListener('input', () => {
        const tweetText = tweet.value;
        const tweetLength = tweet.value.length;
        charCount.innerHTML = `${tweetLength} characters entered | ${280 - tweetLength} characters remaining`;
        if (tweetLength > 280) {
            charCount.style.color = 'red';
            tweetCropButton.disabled = false;
        } else {
            charCount.style.color = 'black';
            tweetCropButton.disabled = true;
        }
        tweetCropButton.addEventListener('click', () => {
            tweet.value = tweetText.slice(0, 280);
            charCount.innerHTML = `280 characters entered | 0 characters remaining`;
        });
    });

    
