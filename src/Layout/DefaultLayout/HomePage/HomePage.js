import SliderImages from "./SliderImages";
import SectionCore from "./SectionCore";
import SliderComment from "./SliderComment";
import AlbumCpn from "./AlbumCpn";
import ApplyVolunteer from "./ApplyVolunteer";
import Tours from "./Tours";
function HomePage() {
    return (
        <>
            <SliderImages />
            <AlbumCpn />
            <ApplyVolunteer />
            <SectionCore />
            {/* <SliderComment /> */}
            <Tours />

        </>
    );
}

export default HomePage;

