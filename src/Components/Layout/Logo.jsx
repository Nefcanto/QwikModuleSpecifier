import { Image } from "Base"

const Logo = ({ branding }) => {

    return <div class="col-start-5 col-end-9 md:col-start-1 md:col-end-6 xl:col-end-3 xl:col-start-1 ps-4 2xl:px-0">
        <a
            href={branding?.link}
            class="w-32 md:w-52 aspect-[2/1] flex items-center"
        >
            <Image
                containerClass="w-32 md:w-52 aspect-[2/1]"
                src={branding?.logo}
                alt={branding?.title}
                imageClass="w-full h-full object-contain"
                priority
            />
        </a>
    </div>
}

export default Logo
