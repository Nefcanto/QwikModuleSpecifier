import { Breadcrumb } from "Shared"
import { Brand } from "BrandsParts"

const Layout = ({
    brands,
    breadcrumb,
    localePathPrefix,
}) => {

    return <div class="max-w-6xl mx-auto px-4 2xl:px-0 min-h-[50vh]">
        <Breadcrumb items={breadcrumb} />
        <div class="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-8 gap-3 mt-4 mb-10">
            {brands.map(brand => <Brand
                key={brand.id}
                brand={brand}
                localePathPrefix={localePathPrefix}
            />
            )}
        </div>
    </div>
}

export default Layout
