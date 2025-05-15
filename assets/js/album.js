document.addEventListener('DOMContentLoaded', () => {
    // Embedded album data
    const albumsData = {
        "koreanAlbums": [
            {
                "id": "youth-in-the-shade",
                "title": "YOUTH IN THE SHADE",
                "releaseDate": "July 10, 2023",
                "type": "1st Mini Album",
                "coverImage": "https://i.pinimg.com/736x/79/af/bd/79afbd14b7957d8579d000b054ea074c.jpg",
                "tracklist": [
                    "Back to ZEROBASE",
                    "In Bloom",
                    "New Kidz on the Block",
                    "우주먼지 (and I)",
                    "Our Season",
                    "Always"
                ]
            },
            {
                "id": "melting-point",
                "title": "MELTING POINT",
                "releaseDate": "November 6, 2023",
                "type": "2nd Mini Album",
                "coverImage": "https://i.pinimg.com/736x/57/80/3a/57803a20ba8b5f0625bf6dd9e37a1519.jpg",
                "tracklist": [
                    "MELTING POINT",
                    "Take My Hand",
                    "CRUSH",
                    "Kidz Zone",
                    "Good Night"
                ]
            },
            {
                "id": "you-had-me-at-hello",
                "title": "You Had Me At Hello",
                "releaseDate": "May 13, 2024",
                "type": "3rd Mini Album",
                "coverImage": "https://i.pinimg.com/736x/15/af/66/15af66dac02ef8fb5f95d8f1484ece86.jpg",
                "tracklist": [
                    "Solar POWER",
                    "Feel the POP",
                    "Dear ECLIPSE",
                    "SWEAT",
                    "Sunday RIDE",
                    "HELLO",
                    "Feel the POP (Sped Up ver.)"
                ]
            },
            {
                "id": "cinema-paradise",
                "title": "Cinema Paradise",
                "releaseDate": "August 26, 2024",
                "type": "4th Mini Album",
                "coverImage": "https://i.pinimg.com/736x/ba/d5/8a/bad58adbe2e5435e99c7afea1efbaf2f.jpg",
                "tracklist": [
                    "Good So Bad",
                    "Kill The Romeo",
                    "The Sea – ZB1 Remake",
                    "Insomnia",
                    "Road Movie",
                    "Eternity",
                    "Yura Yura (Korean Ver.)"
                ]
            },
            {
                "id": "blue-paradise",
                "title": "Blue Paradise",
                "releaseDate": "February 24, 2025",
                "type": "5th Mini Album",
                "coverImage": "https://i.pinimg.com/736x/97/cb/35/97cb3571bffeece70578133f4abbd6e2.jpg",
                "tracklist": [
                    "BLUE",
                    "Devil Game",
                    "Doctor! Doctor!",
                    "Out of Love",
                    "Step Back",
                    "Cruel"
                ]
            }
        ],
        "japaneseAlbums": [
            {
                "id": "yura-yura",
                "title": "Yura Yura (ゆらゆら -運命の花-)",
                "releaseDate": "March 20, 2024",
                "type": "Japanese Single",
                "coverImage": "https://i.pinimg.com/736x/60/76/cd/6076cdd03ec5d7bbc87ca4addc250481.jpg",
                "tracklist": [
                    "Yura Yura (ゆらゆら -運命の花-)",
                    "In Bloom (Japanese ver.)",
                    "CRUSH (Japanese ver.)"
                ]
            },
            {
                "id": "feel-the-pop",
                "title": "Feel The POP (Japanese Version)",
                "releaseDate": "May 17, 2024",
                "type": "Japanese Single",
                "coverImage": "https://pbs.twimg.com/media/GMi66QxawAAaDPY?format=jpg&name=4096x4096",
                "tracklist": [
                    "Feel The POP (Japanese ver.)"
                ]
            },
            {
                "id": "good-so-bad",
                "title": "Good So Bad (Japanese Version)",
                "releaseDate": "August 30, 2024",
                "type": "Japanese Digital Single",
                "coverImage": "https://i.pinimg.com/736x/ba/d5/8a/bad58adbe2e5435e99c7afea1efbaf2f.jpg",
                "tracklist": [
                    "Good So Bad (Japanese ver.)"
                ]
            },
            {
                "id": "prezent",
                "title": "PREZENT",
                "releaseDate": "January 29, 2025",
                "type": "1st Japanese EP Album",
                "coverImage": "https://i.pinimg.com/736x/56/1e/dd/561eddbd2b288389b9532ced9072009d.jpg",
                "tracklist": [
                    "NOW OR NEVER",
                    "Only One Story",
                    "Firework",
                    "Hana",
                    "Feel The Pop (Japanese ver.)",
                    "Good So Bad (Japanese ver.)"
                ]
            },
            {
                "id": "blue-jp",
                "title": "BLUE (Japanese Version)",
                "releaseDate": "March 21, 2025",
                "type": "Japanese Digital Single",
                "coverImage": "https://pbs.twimg.com/media/Glr7KMNWgAA1xLK?format=jpg&name=medium",
                "tracklist": [
                    "BLUE (Japanese ver.)"
                ]
            }
        ]
    };

    // Get modal elements
    const modal = document.getElementById('album-modal');
    const closeButton = document.querySelector('.close-button');

    // Close modal when clicking the close button or outside the modal
    closeButton.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Function to open the modal with album details
    function openAlbumModal(album) {
        document.getElementById('modal-title').textContent = album.title;
        document.getElementById('modal-subtitle').textContent = `– ${album.type}`;
        document.getElementById('modal-cover').src = album.coverImage;
        document.getElementById('modal-type').innerHTML = `<strong>Album:</strong> ${album.type}`;
        document.getElementById('modal-release').innerHTML = `<strong>Release Date:</strong> ${album.releaseDate}`;

        // Create tracklist
        const tracklistContainer = document.getElementById('modal-tracklist');
        tracklistContainer.innerHTML = '';
        album.tracklist.forEach((track, index) => {
            const trackText = document.createElement('div');
            trackText.className = 'track-item';
            trackText.textContent = `${index + 1}. ${track}`;
            tracklistContainer.appendChild(trackText);
        });

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }

    // Load Korean albums
    const koreanAlbumsContainer = document.getElementById('korean-albums');
    albumsData.koreanAlbums.forEach(album => {
        const albumCard = createAlbumCard(album);
        koreanAlbumsContainer.appendChild(albumCard);
    });

    // Load Japanese albums
    const japaneseAlbumsContainer = document.getElementById('japanese-albums');
    albumsData.japaneseAlbums.forEach(album => {
        const albumCard = createAlbumCard(album);
        japaneseAlbumsContainer.appendChild(albumCard);
    });

    // Function to create album card
    function createAlbumCard(album) {
        const card = document.createElement('div');
        card.className = 'album-item';
        
        card.innerHTML = `
            <img src="${album.coverImage}" alt="${album.title}" class="album-cover">
            <div class="album-info">
                <h3>${album.title}</h3>
                <p>${album.type}</p>
                <p>${album.releaseDate}</p>
            </div>
        `;
        
        card.addEventListener('click', () => openAlbumModal(album));
        return card;
    }
});