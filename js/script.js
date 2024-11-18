document.addEventListener("DOMContentLoaded", () => {
    const videoGrid = document.getElementById('video-grid');

    // Cek apakah elemen videoGrid ada
    if (!videoGrid) {
        console.error("Elemen #video-grid tidak ditemukan di DOM!");
        return;
    }

    // Data video
    const videoData = [
        {
            id: 1,
            title: "jombie",
            thumbnail: "images/bg1.jpg",
            videoUrl: "videos/bokep1.mp4",
            views: "20K",
            duration: "10:34",
            uploaded: "1 week ago",
            channelName: "ppppp",
            channelIcon: "images/bg.JPG",
        },
        {
            id: 2,
            title: "jombii",
            thumbnail: "images/bg2.JPG",
            videoUrl: "videos/bokep10.mp4",
            views: "15K",
            duration: "8:20",
            uploaded: "3 days ago",
            channelName: "ppppp",
            channelIcon: "images/bg2.JPG",
        },
                {
            id: 3,
            title: "ayam",
            thumbnail: "images/bg1.jpg",
            videoUrl: "videos/bokep11.mp4",
            views: "20K",
            duration: "10:34",
            uploaded: "1 week ago",
            channelName: "kucing",
            channelIcon: "images/bg.JPG",
        },
        {
            id: 4,
            title: "monyet",
            thumbnail: "images/bg2.JPG",
            videoUrl: "videos/bokep12.mp4",
            views: "15K",
            duration: "8:20",
            uploaded: "3 days ago",
            channelName: "kucing",
            channelIcon: "images/bg2.JPG",
        },
                {
            id: 5,
            title: "semut",
            thumbnail: "images/bg1.jpg",
            videoUrl: "videos/bokep13.mp4",
            views: "20K",
            duration: "10:34",
            uploaded: "1 week ago",
            channelName: "kucing",
            channelIcon: "images/bg.JPG",
        },
        {
            id: 6,
            title: "sioyen",
            thumbnail: "images/bg2.JPG",
            videoUrl: "videos/bokep14.mp4",
            views: "15K",
            duration: "8:20",
            uploaded: "3 days ago",
            channelName: "kucing",
            channelIcon: "images/bg2.JPG",
        },
                {
            id: 7,
            title: "pena",
            thumbnail: "images/bg1.jpg",
            videoUrl: "videos/bokep16.mp4",
            views: "20K",
            duration: "10:34",
            uploaded: "1 week ago",
            channelName: "kucing",
            channelIcon: "images/bg.JPG",
        },
        {
            id: 8,
            title: "kopi",
            thumbnail: "images/bg2.JPG",
            videoUrl: "videos/bokep17.mp4",
            views: "15K",
            duration: "8:20",
            uploaded: "3 days ago",
            channelName: "kucing",
            channelIcon: "images/bg2.JPG",
        },
                {
            id: 9,
            title: "korek",
            thumbnail: "images/bg1.jpg",
            videoUrl: "videos/bokep18.mp4",
            views: "20K",
            duration: "10:34",
            uploaded: "1 week ago",
            channelName: "kucing",
            channelIcon: "images/bg.JPG",
        },
        {
            id: 10,
            title: "burung",
            thumbnail: "images/bg2.JPG",
            videoUrl: "videos/bokep19.mp4",
            views: "15K",
            duration: "8:20",
            uploaded: "3 days ago",
            channelName: "kucing",
            channelIcon: "images/bg2.JPG",
        },
                {
            id: 11,
            title: "labu",
            thumbnail: "images/bg1.jpg",
            videoUrl: "videos/bokep2.mp4",
            views: "20K",
            duration: "10:34",
            uploaded: "1 week ago",
            channelName: "kucing",
            channelIcon: "images/bg.JPG",
        },
        {
            id: 12,
            title: "singkong",
            thumbnail: "images/bg2.JPG",
            videoUrl: "videos/bokep20.mp4",
            views: "15K",
            duration: "8:20",
            uploaded: "3 days ago",
            channelName: "kucing",
            channelIcon: "images/bg2.JPG",
        },
                {
            id: 13,
            title: "bikin",
            thumbnail: "images/bg1.jpg",
            videoUrl: "videos/bokep21.mp4",
            views: "20K",
            duration: "10:34",
            uploaded: "1 week ago",
            channelName: "kucing",
            channelIcon: "images/bg.JPG",
        },
        {
            id: 14,
            title: "dedek",
            thumbnail: "images/bg2.JPG",
            videoUrl: "videos/bokep3.mp4",
            views: "15K",
            duration: "8:20",
            uploaded: "3 days ago",
            channelName: "kucing",
            channelIcon: "images/bg2.JPG",
        },
                {
            id: 15,
            title: "yuk enak",
            thumbnail: "images/bg1.jpg",
            videoUrl: "videos/bokep4.mp4",
            views: "20K",
            duration: "10:34",
            uploaded: "1 week ago",
            channelName: "kuving",
            channelIcon: "images/bg.JPG",
        },
        {
            id: 16,
            title: "lagi musim",
            thumbnail: "images/bg2.JPG",
            videoUrl: "videos/bokep5.mp4",
            views: "15K",
            duration: "8:20",
            uploaded: "3 days ago",
            channelName: "kucing",
            channelIcon: "images/bg2.JPG",
        },
                {
            id: 17,
            title: "ujan enak",
            thumbnail: "images/bg1.jpg",
            videoUrl: "videos/bokep6.mp4",
            views: "20K",
            duration: "10:34",
            uploaded: "1 week ago",
            channelName: "kucing",
            channelIcon: "images/bg.JPG",
        },
        {
            id: 18,
            title: "mau gak",
            thumbnail: "images/bg2.JPG",
            videoUrl: "videos/bokep7.mp4",
            views: "15K",
            duration: "8:20",
            uploaded: "3 days ago",
            channelName: "kucing",
            channelIcon: "images/bg2.JPG",
        },
                {
            id: 19,
            title: "kalo mau",
            thumbnail: "images/bg1.jpg",
            videoUrl: "videos/bokep8.mp4",
            views: "20K",
            duration: "10:34",
            uploaded: "1 week ago",
            channelName: "kucing",
            channelIcon: "images/bg.JPG",
        },
        {
            id: 20,
            title: "ayuukk",
            thumbnail: "images/bg2.JPG",
            videoUrl: "videos/bokep9.mp4",
            views: "15K",
            duration: "8:20",
            uploaded: "3 days ago",
            channelName: "kucing",
            channelIcon: "images/bg2.JPG",
        },
                {
            id: 21,
            title: "gas lah",
            thumbnail: "images/bg1.jpg",
            videoUrl: "videos/bokep14.mp4",
            views: "20K",
            duration: "10:34",
            uploaded: "1 week ago",
            channelName: "kucing",
            channelIcon: "images/bg.JPG",
        },
        {
            id: 22,
            title: "kapan ayuk",
            thumbnail: "images/bg2.JPG",
            videoUrl: "videos/bokep18.mp4",
            views: "15K",
            duration: "8:20",
            uploaded: "3 days ago",
            channelName: "kucing",
            channelIcon: "images/bg2.JPG",
        },
                {
            id: 23,
            title: "canda ya guys",
            thumbnail: "images/bg1.jpg",
            videoUrl: "videos/bokep16.mp4",
            views: "20K",
            duration: "10:34",
            uploaded: "1 week ago",
            channelName: "kucing",
            channelIcon: "images/bg.JPG",
        },
        {
            id: 24,
            title: "baper cepet tua",
            thumbnail: "images/bg2.JPG",
            videoUrl: "videos/bokep2.mp4",
            views: "15K",
            duration: "8:20",
            uploaded: "3 days ago",
            channelName: "kucing",
            channelIcon: "images/bg2.JPG",
        },
        // Tambahkan data lainnya...
    ];

    // Fungsi untuk membuat elemen video
    const createVideoItem = (video) => {
        const videoItem = document.createElement('article');
        videoItem.classList.add('video-item');
        videoItem.setAttribute('data-id', video.id);

        videoItem.innerHTML = `
            <a href="#" class="video-link">
                <div class="thumbnail">
                    <img src="${video.thumbnail}" alt="${video.title}" onerror="this.src='images/default-thumbnail.jpg'">
                    <span class="duration">${video.duration}</span>
                </div>
            </a>
            <div class="video-info">
                <img class="channel-icon" src="${video.channelIcon}" alt="${video.channelName}" onerror="this.src='images/default-channel-icon.jpg'">
                <div class="video-details">
                    <h3>${video.title}</h3>
                    <p>${video.channelName} • ${video.views} views • ${video.uploaded}</p>
                </div>
            </div>
        `;
        return videoItem;
    };

    // Render video items ke dalam videoGrid
    videoData.forEach(video => {
        const videoItem = createVideoItem(video);
        videoGrid.appendChild(videoItem);
    });

    // Delegasi event listener untuk navigasi
    videoGrid.addEventListener('click', (e) => {
        const link = e.target.closest('.video-link');
        if (link) {
            e.preventDefault();
            const videoId = link.closest('.video-item').getAttribute('data-id');
            window.location.href = `play.html?id=${videoId}`;
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    // Pastikan elemen toggle dan menu ada
    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    } else {
        console.error("Menu toggle atau menu tidak ditemukan di DOM!");
    }
});
