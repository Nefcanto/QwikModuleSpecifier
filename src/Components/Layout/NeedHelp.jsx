const NeedHelp = ({ headerItems }) => {

    return <a
        href={headerItems?.helpLink}
        class="flex items-center gap-1 text-white text-xs md:text-sm"
    >
        <span>{headerItems?.helpText}</span>
        <span
            class="[&>svg]:w-5 [&>svg]:h-5 [&>svg]:fill-white"
            dangerouslySetInnerHTML={headerItems?.helpIcon} />
    </a>
}

export default NeedHelp
