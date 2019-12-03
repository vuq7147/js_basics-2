/**
 * Given the HTML below, please make the following changes with javascript – don't change any HTML!:
 *
 * 1. Any time someone clicks on the title at the top "feed template,"
 *    make the color of the "feed template" text change from black to red
 *    and then from red to black when clicked again.
 *
 * 2. The links on the side of the page – "your name," "section 1," "section 2," etc. –
 *    hide every odd-numbered link in the menu.
 *
 * 3. Change every instance of the word "bacon" on the page to be "LASER VISION"
 *
 * /
 * 4. Delete the last two posts in the middle section (they have a CSS class "post")
 *
 * 5. Remove the images in the right column
 *
 * BONUS: add a special surprise inside!
 *    
 */

(function () {
   
    let title = document.querySelector("h1") 
    title.onclick = function () {
        if (title.style.color === "red"){
            title.style.color = "black"
        }
        else {
            title.style.color = "red"
        }

        
    }

    let links = document.querySelectorAll('.section')
    links[0].remove();
    links[2].remove();
    links[4].remove();
    
    // let wordSplit = gAddress.split('');
    // console.log (wordSplit)
    // so we have to get all the elements from the page taht contain the word bacon

    let word = document.querySelectorAll('p')
    for(i=0; i < word.length;i = i+1) {
        let currentElement = word[i]
        let replacedText = currentElement.innerHTML.replace('Bacon', 'LASER VISION')
        currentElement.innerHTML = replacedText
    }

    let post = document.querySelectorAll('.row.post')
    post[6].remove();
    
    let image = document.querySelectorAll('aside p')
    image[0].remove();
    image[1].remove();
    console.log(image[1])
    

})();