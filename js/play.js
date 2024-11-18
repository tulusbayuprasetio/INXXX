document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('id');

    // Data video (harus sama seperti di script.js)
    const videoData = [
        {
            id: 1,
            title: "Learn HTML in 10 Minutes",
            videoUrl: "videos/videos2.mp4",
            views: "20K",
            duration: "10:34",
            uploaded: "1 week ago",
            channelName: "Code Academy"
        },
        {
            id: 2,
            title: "CSS Grid Tutorial",
            videoUrl: "videos/videos1.mp4",
            views: "15K",
            duration: "8:20",
            uploaded: "3 days ago",
            channelName: "Web Dev Simplified"
        }
    ];

    // Cari video berdasarkan ID
    const video = videoData.find(v => v.id == videoId);

    if (video) {
        document.getElementById('video-player').src = video.videoUrl;
        document.getElementById('video-title').textContent = video.title;
        document.getElementById('video-details').textContent =
            `${video.channelName} • ${video.views} views • ${video.uploaded}`;
    } else {
        alert('Video not found!');
    }
});
