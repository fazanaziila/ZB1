// Load member data and create member cards
document.addEventListener('DOMContentLoaded', function() {
    const membersGrid = document.getElementById('members-grid');
    if (!membersGrid) return; // Only proceed if we're on the members page

    // Embedded JSON data directly into the script
    const membersData = {
        "members": [
            {
                "id": "hanbin",
                "fullName": "Sung Han-bin (성한빈)",
                "dateOfBirth": "June 13, 2001",
                "role": "Leader",
                "finalRank": "2nd place",
                "profileImage": "assets/images/member/hanbin.jpg",
                "galleryImages": [
                    "https://i.pinimg.com/736x/7f/66/51/7f665160bb30957804177b0828f1e181.jpg",
                    "https://i.pinimg.com/736x/d3/c6/c4/d3c6c4addd49cd3f838b71e83b79cf5e.jpg"
                ]
            },
            {
                "id": "jiwoong",
                "fullName": "Kim Ji-woong (김지웅)",
                "dateOfBirth": "December 14, 1998",
                "role": "Visual",
                "finalRank": "8th place",
                "profileImage": "assets/images/member/jiwoong.jpg",
                "galleryImages": [
                    "https://i.pinimg.com/736x/97/3b/62/973b62a5931aa1d170012df94deae87b.jpg",
                    "https://i.pinimg.com/474x/5f/ae/95/5fae957c826bc14b5ed9b38da917b93d.jpg"
                ]
            },
            {
                "id": "hao",
                "fullName": "Zhang Hao (章昊 / 장하오)",
                "dateOfBirth": "July 25, 2000",
                "role": "Center",
                "finalRank": "1st place",
                "profileImage": "assets/images/member/zhanghao.jpg",
                "galleryImages": [
                    "https://i.pinimg.com/736x/7b/3e/24/7b3e245999cdac903e70cc017ccb4caa.jpg",
                    "https://i.pinimg.com/736x/a9/75/e4/a975e43c35a8f920b9cd967b347ac3ab.jpg"
                ]
            },
            {
                "id": "matthew",
                "fullName": "Seok Matthew (석매튜)",
                "dateOfBirth": "May 28, 2002",
                "role": "Vocalist",
                "finalRank": "3rd place",
                "profileImage": "assets/images/member/matthew.jpg",
                "galleryImages": [
                    "https://i.pinimg.com/736x/8c/41/02/8c4102feb6a3e24bdf02d62b277ef993.jpg",
                    "https://i.pinimg.com/736x/48/ea/5f/48ea5fdec25a1fb387f2073e8df10b55.jpg"
                ]
            },
            {
                "id": "taerae",
                "fullName": "Kim Tae-rae (김태래)",
                "dateOfBirth": "July 14, 2002",
                "role": "Main Vocalist",
                "finalRank": "4th place",
                "profileImage": "assets/images/member/taerae.jpg",
                "galleryImages": [
                    "https://i.pinimg.com/736x/67/f0/5d/67f05d45866ff932cbcf4ba63060874f.jpg",
                    "https://i.pinimg.com/736x/f6/98/37/f698379ba0bf6b98baa00b8be4f23592.jpg"
                ]
            },
            {
                "id": "ricky",
                "fullName": "Ricky (沈泉锐 / 리키)",
                "dateOfBirth": "May 20, 2004",
                "role": "Rapper",
                "finalRank": "5th place",
                "profileImage": "assets/images/member/ricky.jpg",
                "galleryImages": [
                    "https://i.pinimg.com/736x/2a/a4/69/2aa4698cf7803fe1e7cebc0a5be70407.jpg",
                    "https://i.pinimg.com/736x/9f/37/9b/9f379b825892fa42fdf19c39224e89cd.jpg"
                ]
            },
            {
                "id": "gyuvin",
                "fullName": "Kim Gyu-vin (김규빈)",
                "dateOfBirth": "August 30, 2004",
                "role": "Dancer",
                "finalRank": "6th place",
                "profileImage": "assets/images/member/gyuvin.jpg",
                "galleryImages": [
                    "https://i.pinimg.com/736x/d2/78/ab/d278ab1d90bc5245c180ee469557b9e9.jpg",
                    "https://i.pinimg.com/736x/fd/44/92/fd44926331480eddad2a071dadf97f9b.jpg"
                ]
            },
            {
                "id": "gunwook",
                "fullName": "Park Gun-wook (박건욱)",
                "dateOfBirth": "January 10, 2005",
                "role": "Rapper",
                "finalRank": "7th place",
                "profileImage": "assets/images/member/gunwook.jpg",
                "galleryImages": [
                    "https://i.pinimg.com/736x/f1/37/25/f137250862250068663d8a736807256c.jpg",
                    "https://i.pinimg.com/736x/3d/85/37/3d8537fda6b3135baff06c8b7d5812b3.jpg"
                ]
            },
            {
                "id": "yujin",
                "fullName": "Han Yu-jin (한유진)",
                "dateOfBirth": "March 20, 2007",
                "role": "Maknae, dancer",
                "finalRank": "9th place",
                "profileImage": "assets/images/member/yujin.jpg",
                "galleryImages": [
                    "https://i.pinimg.com/736x/14/47/c3/1447c34baa9bcc4cc1616f9c65f4b114.jpg",
                    "https://i.pinimg.com/736x/a1/fa/31/a1fa314db3b19d18e4ec140a7bfa5622.jpg"
                ]
            }
        ]
    };

    // Replace fetch call with direct data usage
    membersData.members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';
        memberCard.innerHTML = `
            <img src="${member.profileImage}" alt="${member.fullName}">
            <div class="member-info">
                <h3>${member.fullName.split('(')[0].trim()}</h3>
                <p>${member.role}</p>
            </div>
        `;
        memberCard.addEventListener('click', () => openMemberModal(member));
        membersGrid.appendChild(memberCard);
    });

    // Modal functionality
    const modal = document.getElementById('member-modal');
    const closeButton = document.querySelector('.close-button');

    // Close modal when clicking the close button or outside the modal
    closeButton.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Function to open the modal with member details
    function openMemberModal(member) {
        const profileBtn = document.getElementById('profile-image-btn');
        let currentProfileImage = member.profileImage;

        document.getElementById('modal-title').textContent = member.fullName;
        document.getElementById('modal-image').src = member.profileImage;
        document.getElementById('modal-fullname').textContent = `Full Name: ${member.fullName}`;
        document.getElementById('modal-birth').textContent = `Birth Date: ${member.dateOfBirth}`;
        document.getElementById('modal-role').textContent = `Role: ${member.role}`;
        document.getElementById('modal-rank').textContent = `Final Rank: ${member.finalRank}`;

        // Create gallery
        const galleryGrid = document.getElementById('modal-gallery');
        galleryGrid.innerHTML = '';
        member.galleryImages.forEach(imageUrl => {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = member.fullName;
            img.addEventListener('click', () => {
                document.getElementById('modal-image').src = imageUrl;
                profileBtn.style.display = 'block'; // Show the profile button when gallery image is viewed
            });
            galleryGrid.appendChild(img);
        });

        // Profile image button functionality
        profileBtn.addEventListener('click', () => {
            document.getElementById('modal-image').src = currentProfileImage;
            profileBtn.style.display = 'none'; // Hide the button when viewing profile image
        });

        // Hide the profile button initially (showing profile image)
        profileBtn.style.display = 'none';

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
});