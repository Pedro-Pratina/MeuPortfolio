[1mdiff --git a/src/sections/Home/IntroducaoSection.jsx b/src/sections/Home/IntroducaoSection.jsx[m
[1mindex b76eb51..457c961 100644[m
[1m--- a/src/sections/Home/IntroducaoSection.jsx[m
[1m+++ b/src/sections/Home/IntroducaoSection.jsx[m
[36m@@ -2,11 +2,12 @@[m [mimport { FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaJs} from "react-icons/fa"[m
 import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi"[m
 [m
 import { IconLink } from "../../components/ui/IconLink"[m
[32m+[m[32mimport { Button } from "../../components/ui/Button"[m
 [m
 export function IntroducaoSection() {[m
     return ([m
         <section className="mt-10 flex flex-col text-(--cinzaClaro) justify-center items-center">[m
[31m-            <div className="relative justify-center flex">[m
[32m+[m[32m            <div className="relative justify-center flex ">[m
                 <div className="absolute opacity-30 inset-0 flex justify-center gap-15">[m
                     <div className="mt-8"><FaHtml5 className="text-2xl" /></div>[m
                     <div className="mt-4"><FaCss3Alt className="text-2xl" /></div>[m
[36m@@ -30,6 +31,12 @@[m [mexport function IntroducaoSection() {[m
                 <div className="w-px h-6 bg-(--textoTema)" />[m
                 <IconLink href="https://instagram.com/pedropratina/" icon={FiInstagram} className="text-4xl"/>[m
             </div>[m
[32m+[m[32m            <Button onClick={null} children="Mais sobre mim" addClasses="mt-20"/>[m
[32m+[m[32m            <div className="w-80 flex justify-center items-center gap-5 mt-22">[m
[32m+[m[32m                <hr className="w-full my-6 border-(--textoTema)"/>[m
[32m+[m[32m                <span>SCROLL</span>[m
[32m+[m[32m                <hr className="w-full my-6 border-(--textoTema)"/>[m
[32m+[m[32m            </div>[m
         </section>[m
     )[m
 }[m
\ No newline at end of file[m
