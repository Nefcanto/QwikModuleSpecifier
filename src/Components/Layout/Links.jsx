const Links = ({ headerItems }) => {

    return <>
        {
            headerItems?.items?.map(item => <a
                class="min-w-fit whitespace-nowrap text-white px-1 py-0.5 text-xs sm:text-sm border border-dotted rounded-md"
                href={item.link}
                key={item.id}
            >
                {item.title}
            </a>)
        }
    </>
}

export default Links
