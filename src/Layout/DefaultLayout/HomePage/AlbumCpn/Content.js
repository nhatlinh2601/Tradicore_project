import React from 'react'
import ct1 from '~/assets/images/img-content/CongChieng/ct1.jpg';
import ct2 from '~/assets/images/img-content/CongChieng/ct2.jpg';
import ct3 from '~/assets/images/img-content/CongChieng/ct3.jpg';
import ct4 from '~/assets/images/img-content/CongChieng/ct4.jpg';

import lamGom1 from '~/assets/images/img-content/LamGom/lamGom1.jpg';
import lamGom2 from '~/assets/images/img-content/LamGom/lamGom2.jpg';
import lamGom3 from '~/assets/images/img-content/LamGom/lamGom3.jpg';
import lamGom4 from '~/assets/images/img-content/LamGom/lamGom4.jpg';

import mrn1 from '~/assets/images/img-content/MuaRoiNuoc/mrn1.png';
import mrn2 from '~/assets/images/img-content/MuaRoiNuoc/mrn2.jpg';
import mrn3 from '~/assets/images/img-content/MuaRoiNuoc/mrn3.jpg';

import suThi1 from '~/assets/images/img-content/SuThi/suThi1.jpg';
import suThi2 from '~/assets/images/img-content/SuThi/suThu2.jpg';
import suThi3 from '~/assets/images/img-content/SuThi/suThi3.jpg';

import sonMai1 from '~/assets/images/img-content/SonMai/sonMai1.jpg';
import sonMai2 from '~/assets/images/img-content/SonMai/sonMai2.jpg';
import sonMai3 from '~/assets/images/img-content/SonMai/sonMai3.jpg';

import toHe1 from '~/assets/images/img-content/ToHe/toHe1.webp';
import toHe2 from '~/assets/images/img-content/ToHe/toHe2.jpg';
import toHe3 from '~/assets/images/img-content/ToHe/toHe3.jpg';

import hatXam1 from '~/assets/images/img-content/HatXam/hatXam1.jpg';
import hatXam2 from '~/assets/images/img-content/HatXam/hatXam2.jpg';
import hatXam3 from '~/assets/images/img-content/HatXam/hatXam3.jpg';

import trangPhuc1 from '~/assets/images/img-content/TrangPhuc/trangPhuc1.jpg';
import trangPhuc2 from '~/assets/images/img-content/TrangPhuc/trangPhuc2.jpg';
import trangPhuc3 from '~/assets/images/img-content/TrangPhuc/trangPhuc3.jpg';

import tranh from '~/assets/images/img-content/TranhDH/tranh.jpg';
import tranh1 from '~/assets/images/img-content/TranhDH/tranh3.jpg';
import tranh2 from '~/assets/images/img-content/TranhDH/tranh2.jpg';






const SliderCongChieng = [ct1, ct2, ct3, ct4]
const SliderLamGom = [lamGom1, lamGom2, lamGom3, lamGom4]
const SliderMuaRoiNuoc = [mrn1, mrn2, mrn3]
const SliderSuThi = [suThi1, suThi2, suThi3]
const SliderSonMai = [sonMai1, sonMai2, sonMai3]
const SliderToHe = [toHe1, toHe2, toHe3]
const SliderHatXam = [hatXam1, hatXam2, hatXam3]
const SliderTrangPhuc = [trangPhuc1, trangPhuc2, trangPhuc3]
const SliderTranh = [tranh, tranh1, tranh2]


const boxCongChieng = {
    des1: 'Được UNESCO công nhận là Kiệt tác truyền khẩu và phi vật thể nhân loại',
    des2: 'Chủ thể của không gian văn hóa này gồm nhiều dân tộc khác nhau: Ê đê, Jarai, Ba Na, Mạ, Lặc...[2]',
    time: 'Thời gian:  25 tháng 11 năm 2005',
    place: 'Kon Tum, Gia Lai, Đắk Lắk, Đắk Nông và Lâm Đồng',
    trangThai: 'Trạng thái : Cần được bảo tồn'
}
const boxLamGom = {
    des1: 'Được UNESCO ghi danh vào Danh sách di sản văn hóa phi vật thể cần bảo vệ khẩn cấp',
    des2: 'Chủ yếu là đồ gia dụng, đồ dùng cúng lễ và đồ mỹ nghệ gồm chum (jek), nồi (gok), mâm (cambak), bình (bilaok)…',
    time: '16 giờ 12 phút, ngày 29.11',
    place: 'Người Chăm',
    trangThai: 'Trạng thái : Cần được bảo tồn'
}
const muaRoiNuoc = {
    des1: 'Múa rối nước là một loại hình nghệ thuật sân khấu dân gian truyền thống ra đời từ nền văn minh lúa nước.',
    des2: 'Múa rối nước thường được diễn vào dịp lễ, hội làng, ngày vui, ngày Tết... ',
    time: 'Múa / rối nước đã ra đời chừng hơn 10 thế kỷ trước ở vùng châu thổ sông Hồng.',
    place: '',
    trangThai: 'Trạng thái : Cần được bảo tồn'
}
const suThi = {
    des1: 'Sử thi và văn hóa Tây Nguyên - Đậm chất Tây nguyên',
    des2: 'Sử thi là linh hồn của văn hóa Tây Nguyên, có ảnh hưởng đến lời ăn tiếng nói, luật tục, nghệ thuật, tín ngưỡng, nếp sống của con người và cộng đồng',
    time: 'Danh mục di sản văn hóa phi vật thể Quốc gia',
    place: 'Đắk Lắk, Gia Lai, Kon Tum, Lâm Đồng',
    trangThai: 'Nỗ lực bảo tồn'
}
const sonMai = {
    des1: 'Nghệ thuật sơn mài – tinh túy truyền thống và niềm tự hào của mỹ thuật Việt',
    des2: 'Sơn mài là ưu điểm độc đáo của Mỹ thuật Việt Nam, là sự tìm tòi và phát triển kỹ thuật của lớp nghệ sĩ đàn anh',
    time: 'Sơn mài tuy gia nhập thị trường hơi muộn nhưng rất nhanh đã khẳng định giá trị của mình',
    place: 'Bảo tồn tinh túy truyền thống trong vẽ tranh sơn mài',
    trangThai: null
}
const toHe = {
    des1: 'Tò he - một nét văn hóa dân gian',
    des2: 'Tò he là đồ chơi dân gian thuần chất thôn quê đã đi vào đời sống tinh thần của biết bao thế hệ người dân đất Việt',
    time: ' Ðể nặn ra tò he chỉ cần những nguyên liệu rất đơn giản, gần gũi với cuộc sống nông dân. ',
    place: 'làng Xuân La',
    trangThai: null
}
const xam = {
    des1: 'Xẩm là một loại hình dân ca của Việt Nam, phổ biến ở đồng bằng và trung du Bắc Bộ.',
    des2: 'Hát Xẩm còn là loại hình âm nhạc dân gian mang đậm tính nhân văn, thẩm mỹ và giáo dục về đạo đức, lối sống của mọi tầng lớp trong xã hội',
    time: ' Những bài hát Xẩm mang đậm triết lý nhân sinh, tính giáo dục, nhân văn sâu sắc',
    place: '',
    trangThai: null
}
const trangPhucDT = {
    des1: 'Những trang phục dân tộc Việt Nam đẹp ngẩn ngơ làm nên bản sắc văn hóa Việt',
    des2: 'Trang phục dân tộc Việt Nam đẹp và vô cùng phong phú. Mỗi dân tộc lại mang đến một dấu ấn riêng, thể hiện qua thiết kế, màu sắc và chất liệu.',
    time: 'Nhờ đó mà văn hóa trang phục của người Việt trở nên cực kỳ đa dạng, không dễ bị nhầm lẫn với bất kỳ trang phục nào trên thế giới.',
    place: '',
    trangThai: null
}
const tranhDH = {
    des1: 'Tranh Đông Hồ, hay tên đầy đủ là tranh khắc gỗ dân gian Đông Hồ[1][2][3], là một dòng tranh dân gian Việt Nam với xuất xứ từ làng Đông Hồ',
    des2: 'Tranh làng Hồ được yêu thích bởi thể hiện những đề tài quen thuộc, gắn liền với hình ảnh làng quê, cuộc sống bình dị hằng ngày của người Việt. ',
    time: 'Nghề làm tranh dân gian Đông Hồ là Di sản văn hóa phi vật thể cấp Quốc gia',
    place: '',
    trangThai: null
}




export { SliderCongChieng, SliderLamGom, SliderMuaRoiNuoc, SliderHatXam, SliderSonMai, SliderSuThi, SliderToHe, SliderTrangPhuc, SliderTranh }
export { boxCongChieng, boxLamGom, muaRoiNuoc, suThi, sonMai, toHe, xam, trangPhucDT, tranhDH }

