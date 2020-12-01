var showcaseitems = {
    Img1: ['movies/joker.html', "img/joker.jpg", 'Joker', 'Joker 2019'],
    Img2: ['movies/tenet.html', 'img/tenet.jpg', 'Tenet', 'Tenet 2020'],
    Img3: ['movies/solar.html', 'img/solar.jpg', 'Solar', 'Solar Opposites 2020']
}


// Changing showcase
function showcaseChange (sideLi) { 

    // swaps showcase items
    if (sideLi == 0) {
        showcaseitems.Img1 = [...showcaseitems.Img2, showcaseitems.Img2 = showcaseitems.Img1]
    } else {
        showcaseitems.Img3 = [...showcaseitems.Img2, showcaseitems.Img2 = showcaseitems.Img3]
    }

    //reassigning showcase items
    document.getElementById('showcaseImg1').src = showcaseitems.Img1[1]
    document.getElementById('showcaseImg2').src = showcaseitems.Img2[1]
    document.getElementById('showcaseImg3').src = showcaseitems.Img3[1]

    document.getElementById('showcaseImg1').alt = showcaseitems.Img1[2]
    document.getElementById('showcaseImg2').alt = showcaseitems.Img1[2]
    document.getElementById('showcaseImg3').alt = showcaseitems.Img1[2]

    document.getElementById('centerLink').href = showcaseitems.Img2[0]
    document.getElementById('showcaseInfo').innerHTML = showcaseitems.Img2[3]
}
