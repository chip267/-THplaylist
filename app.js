const song = document.getElementById("song");
const playBtn = document.querySelector(".play");
const nextBtn = document.querySelector(".play-forward");
const prevBtn = document.querySelector(".play-back");
const durationTime = document.querySelector(".duration");
const remainingTime = document.querySelector(".remaining");
const rangeBar = document.querySelector(".range");
const musicName = document.querySelector(".music-name");
const singerName= document.querySelector(".singer-name");
const musicThumbnail = document.querySelector(".music-thumb");
const musicImage = document.querySelector(".music-thumb img");
const playRepeat = document.querySelector(".play-repeat");
playRepeat.addEventListener("click", function() {
    if(isRepeat) { 
    isRepeat=false;
    playRepeat.removeAttribute("style");

    } else {
    isRepeat = true;
    playRepeat.style.color = "#20e3b2";
    }
});
let isRepeat = false;

let isPlaying = true;
let indexSong = 0;
/*const musics = ["Pink Venom.mp3", "How You Like That.mp3", "Kill This Love.mp3",
 "Lovesick Girls.mp3", "DDUDUDDUDU.mp3", "Forever Young.mp3",
 "Boombayah.mp3", "WHISTLE.mp3", "STAY.mp3", "You Never Know.mp3",
 "Bet You Wanna.mp3", "Love To Hate Me.mp3", "Pretty Savage.mp3",
 "SOUR CANDY.mp3", "See U Later.mp3", "REALLY.mp3",
 "Kick It.mp3", "Crazy Over You.mp3", "Dont Know What To Do.mp3"];*/

 const musics= [
    {
        id: 1,
        title: "Pink Venom",
        file: "Pink Venom.mp3",
        name: "BLACKPINK",
        image: "https://znews-photo.zingcdn.me/w660/Uploaded/yqdxwpcww/2022_07_29/841424591.jpg"
    },
    {
        id: 2,
        title: "How You Like That",
        file: "How You Like That.mp3",
        name: "BLACKPINK",
        image: "https://kenh14cdn.com/2020/6/23/hylt-poster-1592784840060717374470-15929037318401929119192.jpeg"
    },
    {
        id: 3,
        title: "Kill This Love",
        file: "Kill This Love.mp3",
        name: "BLACKPINK",
        image: "https://cf.shopee.vn/file/c7cf81df62c543e82898eadbdab168b1"
    },
    {
        id: 4,
        title: "Lovesick Girls",
        file: "Lovesick Girls.mp3",
        name: "BLACKPINK",
        image: "https://upload.wikimedia.org/wikipedia/vi/4/45/Lovesick_Girls_Poster.jpeg"
    },
    {
        id: 5,
        title: "DDUDUDDUDU",
        file: "DDUDUDDUDU.mp3",
        name: "BLACKPINK",
        image: "https://upload.wikimedia.org/wikipedia/vi/d/db/Black_Pink_-_Ddu-Du_Ddu-Du_%28bia_ban_tieng_Nhat%29.png"
    },
    {
        id: 6,
        title: "Forever Young",
        file: "Forever Young.mp3",
        name: "BLACKPINK",
        image: "https://ss-images.saostar.vn/wp700/2019/06/26/5489405/65166414_346683985965942_2133336734396579840_n.jpg"
    },
    {
        id: 7,
        title: "Boombayah",
        file: "Boombayah.mp3",
        name: "BLACKPINK",
        image: "https://i.pinimg.com/originals/bd/9e/93/bd9e939ad93df5ab78230b21663f57a8.jpg"
    },
    {
        id: 8,
        title: "WHISTLE",
        file: "WHISTLE.mp3",
        name: "BLACKPINK",
        image: "https://kenh14cdn.com/203336854389633024/2021/8/16/photo-1-1629121648656283506628.jpg"
    },
    {
        id: 9,
        title: "AS IF IT'S YOUR LAST",
        file: "AS IF IT'S YOUR LAST.mp3",
        name: "BLACKPINK",
        image: "https://i.vietgiaitri.com/2019/10/31/nho-as-if-its-your-last-blackpink-tro-thanh-nhom-nhac-kpop-dau-tien-va-duy-nhat-o-thi-hien-tai-dat-thanh-tich-nay-30888b.jpg"
    },
    {
        id: 10,
        title: "You Never Know",
        file: "You Never Know.mp3",
        name: "BLACKPINK",
        image: "https://i.pinimg.com/564x/ce/21/d3/ce21d3cdfad74221a3a91b8c003a6709.jpg"
    },
    {
        id: 11,
        title: "Bet You Wanna",
        file: "Bet You Wanna.mp3",
        name: "BLACKPINK, Cardi B",
        image: "https://i.pinimg.com/originals/f7/6b/c9/f76bc99d37f7122dfee070d319d85d30.jpg"
    },
    {
        id: 12,
        title: "Love To Hate Me",
        file: "Love To Hate Me.mp3",
        name: "BLACKPINK",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/50679769-3849-43ea-a515-a41e76784871/deekdkx-3d9385bb-47c1-4f6b-912e-615b2c125477.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUwNjc5NzY5LTM4NDktNDNlYS1hNTE1LWE0MWU3Njc4NDg3MVwvZGVla2RreC0zZDkzODViYi00N2MxLTRmNmItOTEyZS02MTViMmMxMjU0NzcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rDaEsi7WL1HVMlnSkx1WV5yJr4sNYpSgjfs50aQHkCo"
    },
    {
        id: 13,
        title: "PLAYING WITH FIRE",
        file: "PLAYING WITH FIRE.mp3",
        name: "BLACKPINK",
        image: "https://i.pinimg.com/originals/f1/79/1a/f1791a5edb3c795d20ab36137ca2f842.jpg"
    },
    {
        id: 14,
        title: "SOUR CANDY",
        file: "SOUR CANDY.mp3",
        name: "Lady Gaga, BLACKPINK",
        image: "https://congluan-cdn.congluan.vn/files/dieulinh/2020/05/29/sour-candy-1122.jpeg"
    },
    {
        id: 15,
        title: "See U Later",
        file: "See U Later.mp3",
        name: "BLACKPINK",
        image: "https://i0.wp.com/colorcodedlyrics.com/wp-content/uploads/2018/12/BLACKPINK-BLACKPINK-IN-YOUR-AREA.jpg?fit=590%2C600&ssl=1"
    },
    {
        id: 16,
        title: "REALLY",
        file: "REALLY.mp3",
        name: "BLACKPINK",
        image: "https://az743702.vo.msecnd.net/cdn/useruploads/jpg_d877de61-c3bb-45eb-8ad1-9e1dc1a33088.jpg"
    },
    {
        id: 17,
        title: "Kick It",
        file: "Kick It.mp3",
        name: "BLACKPINK",
        image: "https://i.pinimg.com/originals/3b/3a/bf/3b3abf8dc947816887a512f1d6baa9ba.jpg"
    },
    {
        id: 18,
        title: "Crazy Over You",
        file: "Crazy Over You.mp3",
        name: "BLACKPINK",
        image: "https://cdn.gingergeneration.it/uploads/2020/09/BLACKPINK.jpg"
    },
    {
        id: 19,
        title: "Dont Know What To Do",
        file: "Dont Know What To Do.mp3",
        name: "BLACKPINK",
        image: "https://i.pinimg.com/originals/c0/9e/96/c09e9629ce17f6be1a672de6c8c402db.jpg"
    },
    {
        id: 20,
        title: "Hai Muoi Hai",
        file: "Hai Mươi Hai.mp3",
        name: "AMEE",
        image: "https://i.ytimg.com/vi/n2iFnPaAsnU/maxresdefault.jpg"
    },
    {
        id: 21,
        title: "THICHTHICH",
        file: "THICHTHICH.mp3",
        name: "Phuong Ly",
        image: "https://i.ytimg.com/vi/OqdA6DKV1Fs/maxresdefault.jpg"
    },
    {
        id: 22,
        title: "Kiss and Make up",
        file: "KISS AND MAKE UP.mp3",
        name: "BLACKPINK, Dua Lipa",
        image: "https://images.genius.com/8a24164b47f435fb1360d34e098befc8.500x500x1.jpg"
    },
    {
        id: 23,
        title: "LALISA",
        file: "LALISA.mp3",
        name: "Lisa - BLACKPINK",
        image: "https://2sao.vietnamnetjsc.vn/images/2021/09/03/09/23/lisa-1.jpg"
    },
    {
        id: 24,
        title: "MONEY",
        file: "MONEY.mp3",
        name: "Lisa - BLACKPINK",
        image: "https://media.vov.vn/sites/default/files/styles/large/public/2021-09/lisa-21.jpeg"
    },
    {
        id: 25,
        title: "SOLO",
        file: "SOLO.mp3",
        name: "Jennie - BLACKPINK",
        image: "https://afamilycdn.com/150157425591193600/2021/9/13/jennie-solo-101746-16315012995791225913877.jpg"
    },
    {
        id: 26,
        title: "Gone",
        file: "Gone.mp3",
        name: "Rosé - BLACKPINK",
        image: "https://www.pinkvilla.com/files/rose_poster_main.jpg"
    },
    {
        id: 27,
        title: "On The Ground",
        file: "On The Ground.mp3",
        name: "Rosé - BLACKPINK",
        image: "https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/3/4/title-16148711349622043999449.jpeg"
    },
    {
        id: 28,
        title: "DUMB DUMB",
        file: "DUMB DUMB.mp3",
        name: "Jeon Somi",
        image: "https://img.theinfluencer.vn/thumb_w/850/uploads/2021/08/PBoETEsbehVQL4PsIY0cbObRtF5p8Nk0vPq80dxo.jpg"
    },
    {
        id: 29,
        title: "What You Waiting For",
        file: "What You Waiting For.mp3",
        name: "Jeon Somi",
        image: "https://kenh14cdn.com/thumb_w/660/2020/7/15/somi-15947843188371231087465.jpeg"
    },
    {
        id: 30,
        title: "XOXO",
        file: "XOXO.mp3",
        name: "Jeon Somi",
        image: "https://www.jeonsomiofficial.com/files/2021/11/release_202111_ab67616d0000b273350ecac91d0f0af55788c648.jpg"
    },
    {
        id: 31,
        title: "Watermelon",
        file: "Watermelon.mp3",
        name: "Jeon Somi",
        image: "https://image.thanhnien.vn/w1024/Uploaded/2022/abfluao/2021_11_04/1-6166.jpeg"
    },
    {
        id: 32,
        title: "ANYMORE",
        file: "ANYMORE.mp3",
        name: "Jeon Somi",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bcc96d39-785d-4796-bb89-fede2ff7fe12/dex19br-779a2f0d-c9ce-4569-96e8-2602abee1bd9.jpg/v1/fill/w_894,h_894,q_70,strp/jeon_somi___anymore__album_cover__by_kyliemaine_dex19br-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2JjYzk2ZDM5LTc4NWQtNDc5Ni1iYjg5LWZlZGUyZmY3ZmUxMlwvZGV4MTlici03NzlhMmYwZC1jOWNlLTQ1NjktOTZlOC0yNjAyYWJlZTFiZDkuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.f_urpj1H6baQqceyLwB_dVNHWfNuccxXayRossqn6QE"
    },
    {
        id: 33,
        title: "BIRTHDAY",
        file: "BIRTHDAY.mp3",
        name: "Jeon Somi",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/69416b50-5aaa-490d-8da7-682b35321b11/dd9ozpp-fbcf868c-4985-4d2f-90e4-1368121d632a.jpg/v1/fill/w_1280,h_1280,q_75,strp/somi__birthday__album_cover_1_by_areumdawokpop_dd9ozpp-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzY5NDE2YjUwLTVhYWEtNDkwZC04ZGE3LTY4MmIzNTMyMWIxMVwvZGQ5b3pwcC1mYmNmODY4Yy00OTg1LTRkMmYtOTBlNC0xMzY4MTIxZDYzMmEuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.DzBecs5lzQtU-SvSTpL2dNnz9ybUp_5DCygFw1EtoNs"
    },

]
/**
 * Music
 * id: 1
 * title: Pink Venom
 * file: Pink Venom.mp3
 * image: unsplash
 */

 let timer=setInterval(displayTimer, 500);
 
nextBtn.addEventListener("click", function() {
    changeSong(1);
});
prevBtn.addEventListener("click", function() {
    changeSong(-1);
});
song.addEventListener("ended", handleEndedSong);
function handleEndedSong() {
    if(isRepeat) {
        //handle repeat song
        isPlaying = true;
        playPause();

    } else {
        changeSong(1);
    }
}
function changeSong(dir) {
    if(dir === 1) {
        //next song
        indexSong++;
        if(indexSong >= musics.length) {
            indexSong=0;
        }
        isPlaying=true;
    } else if(dir === -1) {
        //prev song
        indexSong--;
        if(indexSong < 0) {
            indexSong = musics.length -1;
        }
        isPlaying=true;
    }
    init(indexSong);
    //song.setAttribute("src", `./music/${musics[indexSong],file}`);
    playPause();
}                           
playBtn.addEventListener("click", playPause);
function playPause() {
    if (isPlaying) {
        musicThumbnail.classList.add("is-playing");
        song.play();
        playBtn.innerHTML = '<ion-icon name="pause"></ion-icon>';
        isPlaying = false;
        timer = setInterval(displayTimer, 500);
    } else {
        musicThumbnail.classList.remove("is-playing");
        song.pause();
        playBtn.innerHTML = '<ion-icon name="play"></ion-icon>';
        isPlaying = true;
        clearInterval(timer);
    } 
}
function displayTimer() {
    const {duration, currentTime} = song;
    rangeBar.max=duration;
    rangeBar.value=currentTime;        //rangBar đang chạy theo time
    
    remainingTime.textContent = formatTimer(currentTime);
    if(!duration) {
        durationTime.textContent = "00:00";
    } else {
        durationTime.textContent = formatTimer(duration);
    }

}
function formatTimer(number) {
    const minutes = Math.floor(number / 60);
    const seconds = Math.floor(number - minutes * 60);
    return `${minutes < 10 ? '0' + minutes: minutes}:${seconds < 10 ? '0' + seconds: seconds}`;
}
rangeBar.addEventListener("change", handleChangeBar);
function handleChangeBar() {
    song.currentTime = rangeBar.value;
}

function init(indexSong) {
    displayTimer();
    song.setAttribute("src", `./music/${musics[indexSong].file}`);
    musicImage.setAttribute("src", musics[indexSong].image);
    musicName.textContent = musics[indexSong].title;
    singerName.textContent=musics[indexSong].name;
}
init(indexSong);