import { IntroducaoSection } from "../sections/Home/IntroducaoSection";
import { SobreMimSection } from "../sections/Home/SobreMimSection";

export function Home() {
    return (
        <main className="flex flex-col justify-center items-center">
            <IntroducaoSection />
            <div className="w-80 flex justify-center items-center gap-5 mt-22 text-(--cinzaClaro) opacity-35">
                <hr className="w-full my-6 border-(--cinzaClaro)"/>
                <span>SCROLL</span>
                <hr className="w-full my-6 border-(--cinzaClaro)"/>
            </div>
            <SobreMimSection />
        </main>
    )
}