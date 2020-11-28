var showcaseitems = {
    Img1: ['joker.html', "img/joker.jpg", 'Joker'],
    Img2: ['tenet.html', 'img/tenet.jpg', 'Tenet'],
    Img3: ['solar.html', 'img/solar.jpg', 'Solar']
}

// Changing showcase
function showcaseChange (sideLi) { 

    if (sideLi == 0) {
        showcaseitems.Img1 = [...showcaseitems.Img2, showcaseitems.Img2 = showcaseitems.Img1]
    } else {
        showcaseitems.Img3 = [...showcaseitems.Img2, showcaseitems.Img2 = showcaseitems.Img3]
    }




    document.getElementById('showcaseImg1').src = showcaseitems.Img1[1]
    document.getElementById('showcaseImg2').src = showcaseitems.Img2[1]
    document.getElementById('showcaseImg3').src = showcaseitems.Img3[1]

    document.getElementById('showcaseImg1').alt = showcaseitems.Img1[2]
    document.getElementById('showcaseImg2').alt = showcaseitems.Img1[2]
    document.getElementById('showcaseImg3').alt = showcaseitems.Img1[2]

    document.getElementById('centerLink').href = showcaseitems.Img2[0]
}