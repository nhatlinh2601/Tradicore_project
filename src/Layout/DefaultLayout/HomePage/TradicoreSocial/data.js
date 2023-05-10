import images1 from 'src/assets/images/img-social/user.jpg';
import images2 from 'src/assets/images/img-social/posts/person2.jpg';
import post1 from 'src/assets/images/img-social/posts/post1.jpg';
import post2 from 'src/assets/images/img-social/posts/post2.jpg';
import post3 from 'src/assets/images/img-social/posts/post3.jpg';
import post4 from 'src/assets/images/img-social/posts/post4.jpg';
import post6 from 'src/assets/images/img-social/posts/post6.jpg';
export const Users = [
    {
        id: 1,
        name: 'Hoai An',
        username: 'hoaian_18',
        email: 'annvh.22ite@vku.udn.vn',
        profilePicture: images1,
    },
    {
        id: 2,
        name: 'Nhat Linh',
        username: 'Nlinh_19',
        email: 'linhttn.22itb@vku.udn.vn',
        profilePicture: images2,
    },
    {
        id: 3,
        name: 'Cong Anh',
        username: 'anh_KD19',
        email: 'anhtc.22itb@vku.udn.vn',
        profilePicture: '/assets/images/img-social/posts/',
    },
    {
        id: 4,
        name: 'Quynh Nga',
        username: 'besHangNga',
        email: 'ngadtq.22gba@vku.udn.vn',
        profilePicture: '/assets/images/img-social/posts/',
    },
];
export const Usersonline = [
    {
        id: 1,
        name: 'Nhat Minh',
        username: 'minhbebong_19',
        email: 'minhttn.22ba@vku.udn.vn',
        profilePicture: '/assets/images/img-social/posts/',
    },
    {
        id: 2,
        name: 'Tuyet Ni',
        username: 'nimongmanh_19',
        email: 'niptt.22el@vku.udn.vn',
        profilePicture: '/assets/images/img-social/posts/',
    },
];

export const Posts = [
    {
        userId: 3,
        id: 1,
        title: 'Da Nang',
        body: 'Một phong cảnh kì vĩ đến khó tin',
        photo: post1,
        date: '5 mins ago',
        like: '100',
        comment: '70',
    },
    {
        userId: 2,
        id: 2,
        title: 'Cầu Vàng',
        body: 'Điểm đến du lịch nhất định phải đến.',
        photo: post2,
        date: '23 mins ago',
        like: '480',
        comment: '112',
    },
    {
        userId: 1,
        id: 3,
        title: 'Hồ Hoàn Kiếm',
        body: 'Theo truyền thuyết, trong một lần vua Lê Thái Tổ dạo chơi trên thuyền, bỗng một con rùa vàng nổi lên mặt nước đòi nhà vua trả thanh gươm mà Long Vương cho mượn để đánh đuổi quân Minh xâm lược. Nhà vua liền trả gươm cho rùa thần và rùa lặn xuống nước biến mất. Từ đó hồ được lấy tên là hồ Hoàn Kiếm.',
        photo: post3,
        date: '10 hours ago',
        like: '10',
        comment: '30',
    },

    {
        userId: 4,
        id: 5,
        title: 'Hát Xẩm',
        body: 'Năm 2022, hát Xẩm được công nhận là di sản văn hoá phi vật thể quốc gia. Hát Xẩm là một dòng dân ca của nước ta phát triển mạnh và phổ biến tại đồng bằng Bắc Bộ và trung du miền núi phía Bắc. Ban đầu hát xẩm là một hình thức mưu sinh của những người dân nghèo khổ tại các chợ, đường phố và nơi đông người qua lại.',
        photo: post6,
        date: '2 days ago',
        like: '560',
        comment: '200',
    },

    {
        userId: 1,
        id: 7,
        title: 'Khoảnh khẳc',
        body: 'Bức ảnh là khoảnh khắc khi lại cảnh tàu thuyền vô tình xếp thành những bông hoa vô cùng đẹp mắt.',
        photo: post4,
        date: '2 weeks ago',
        like: '10',
        comment: '30',
    },
];
