import { RichText as DefaultRichText } from "Base"

const RichText = ({ content }) => {

    return <>
        <DefaultRichText
            content={content}
            class="leading-8 mb-8"
            h1="font-bold mt-[10px] mb-[20px] text-[1.75rem]"
            h2="font-bold mt-[10px] mb-[15px] text-[1.5rem]"
            h3="font-bold mt-[10px] mb-[15px] text-[1.25rem]"
            p="mb-[10px]"
        />
    </>
}

export default RichText
