const DiscountPercent = ({
    percent,
}) => {

    return <div class={"w-fit py-1 px-4 bg-red-600 text-white relative after:h-0 after:w-0 after:border-t-[16px] after:border-e-[16px] after:border-b-[16px] after:border-solid after:border-t-transparent after:border-b-transparent after:border-e-red-600 after:absolute after:end-full after:top-1/2 after:-translate-y-1/2 text-xs mx-1"}>
        <p>
            <span>{percent}</span>
            <span>%</span>
        </p>
    </div>
}

export default DiscountPercent
