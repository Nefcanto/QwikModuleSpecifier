const Summary = ({ product }) => {

    return <>
        {product.summary &&
            <section class="bg-white border border-custom-color32 mt-10 p-3 md:p-8">
                <p>{product.summary}</p>
            </section>
        }
    </>
}

export default Summary
