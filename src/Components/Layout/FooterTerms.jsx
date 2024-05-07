const FooterTerms = ({
    termsAndConditions
}) => {

    return <div class="flex gap-x-4 md:gap-x-6 text-xs font-bold justify-center md:justify-start">
        {
            termsAndConditions?.items?.map(item => <a
                class="flex relative before:absolute before:top-0 before:start-0 before:w-1 before:h-full before:custom-color3 first:before:w-0 first:ps-0 hover:underline"
                href={item.link}
                key={item.id}
            >
                {item.title}
                <div class="ms-4 md:ms-6 border-x border-s-custom-color15 border-e-custom-color16"></div>
            </a>)
        }
    </div>
}

export default FooterTerms
