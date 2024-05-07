const FooterSocials = ({
    phone,
    phoneTitle,
    socials,
}) => {

    return <div class="border-b border-b-custom-color15 border-t border-t-custom-color16 py-4">
        <div class="flex flex-col gap-4 items-center sm:flex-row sm:justify-between">

            <div class="flex gap-x-4 items-center justify-center md:justify-start text-lg font-bold">
                <p>{socials?.title} : </p>
                {
                    socials?.items.map(item => <a
                        aria-label={item.link}
                        class="bg-custom-color12 rounded-full overflow-hidden p-2 hover:translate-y-1 transition-all"
                        href={item.link}
                        key={item.id}
                    >
                        <span
                            class="[&>svg]:w-7 aspect-square [&>svg]:fill-white"
                            dangerouslySetInnerHTML={item?.icon} />
                    </a>)
                }
            </div>

            <div class="flex gap-2">
                <p class="text-lg font-bold">{phoneTitle}</p>
                <a
                    class="text-white"
                    href={`tel:${phone}`}
                >
                    {phone}
                </a>
            </div>

        </div>
    </div>
}

export default FooterSocials
