import { Image } from "Base"

const FooterMenus = ({
    aboutFooterLinks,
    customerServices,
    quickAccessFooterLinks,
    shoppingWithUs,
}) => {

    return <div class="hidden sm:grid grid-cols-2 lg:grid-cols-4 sm:justify-items-center md:justify-items-start gap-y-5 gap-x-2">
        <div>
            <h3 class="text-lg font-bold">{customerServices?.title}</h3>
            <div class="flex flex-col gap-y-2 mt-5">
                {
                    customerServices?.items?.map(item => <a
                        key={item.id}
                        href={item.link}
                        aria-label={item.title}
                        class="flex gap-x-1 items-center hover:underline"
                    >
                        <Image
                            containerClass="w-10 aspect-square"
                            src={item.image}
                            alt={item.title}
                        />
                        <span class="text-lg">{item.title}</span>
                    </a>
                    )
                }
            </div>
        </div>
        <div>
            <h3 class="text-lg font-bold">{shoppingWithUs?.title}</h3>
            <div class="flex flex-col gap-y-2 mt-5">
                {
                    shoppingWithUs?.items?.map(item => <a
                        key={item.id}
                        href={item.link}
                        class="flex gap-x-1 items-center text-sm hover:underline"
                        aria-label={item.title}
                    >
                        <span>{item.title}</span>
                    </a>)
                }
            </div>
        </div>
        <div>
            <h3 class="text-lg font-bold">{aboutFooterLinks?.title}</h3>
            <div class="flex flex-col gap-y-2 mt-5">
                {
                    aboutFooterLinks?.items.map(item => <a
                        key={item.id}
                        href={item.link}
                        class="flex gap-x-1 items-center text-sm hover:underline"
                        aria-label={item.title}
                    >
                        <span>{item.title}</span>
                    </a>)
                }
            </div>
        </div>
        <div>
            <h3 class="text-lg font-bold">{quickAccessFooterLinks?.title}</h3>
            <div class="flex flex-col gap-y-2 mt-5">
                {
                    quickAccessFooterLinks?.items.map(item => <a
                        key={item.id}
                        href={item.link}
                        class="flex gap-x-1 items-center text-sm hover:underline"
                        aria-label={item.title}
                    >
                        <span>{item.title}</span>
                    </a>)
                }
            </div>
        </div>
    </div>
}

export default FooterMenus
