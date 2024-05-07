const EmptyCheckout = ({
    emptyCheckout,
    goToProducts,
    goToProductsLink,
}) => {

    return <div class="w-full py-20 flex items-center justify-center">
        <p class="flex items-center justify-center gap-1">
            <span class="text-md text-red-600">{emptyCheckout}</span>
            <a
                class="text-md text-custom-color14"
                href={goToProductsLink}>
                <span>{goToProducts}</span>
            </a>
        </p>
    </div>
}

export default EmptyCheckout
