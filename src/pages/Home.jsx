import { IntroducaoSection } from "../sections/Home/IntroducaoSection";
import { SobreMimSection } from "../sections/Home/SobreMimSection";
import { HabilidadesSection } from "../sections/Home/HabilidadesSection";

export function Home() {
    return (
        <main className="flex flex-col justify-center items-center">
            <IntroducaoSection />
            <div className="w-4/5 flex justify-center items-center gap-5 mt-22 text-(--cinzaClaro) opacity-35">
                <hr className="w-full my-6 border-(--cinzaClaro)"/>
                <span>SCROLL</span>
                <hr className="w-full my-6 border-(--cinzaClaro)"/>
            </div>
            <SobreMimSection />
            <div className="w-4/5"><hr className="w-full border-(--cinzaClaro) opacity-35"/></div>
            <HabilidadesSection />
            <div className="w-4/5"><hr className="w-full border-(--cinzaClaro) opacity-35"/></div>
        </main>
    )
}