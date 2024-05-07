import { Pagination } from "Shared"
import {
    Categories,
    Form,
    Heading,
    Main,
} from "Questions"

const Layout = ({
    categories,
    fields,
    form,
    localePathPrefix,
    questions,
    questionsTexts,
    seo,
    translations,
}) => {

    return <>
        <section class="mb-5">

            <Heading title={seo?.pageTitle} />

            <div class="max-w-7xl mx-auto px-5 flex flex-col lg:flex-row gap-10">

                <Main
                    fields={fields}
                    form={form}
                    localePathPrefix={localePathPrefix}
                    questions={questions}
                    questionsTexts={questionsTexts}
                />

                <Categories
                    categories={categories}
                    localePathPrefix={localePathPrefix}
                    questionsTexts={questionsTexts}
                />

                <Form
                    {...fields}
                    {...translations}
                    class="flex lg:hidden"
                    form={form}
                />

            </div>

            <Pagination metadata={questions.metadata} />

        </section>
    </>
}

export default Layout
