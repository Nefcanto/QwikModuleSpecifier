import { BooleanProperty } from "CompareParts"

const CompareTable = ({
    compareStatics,
    entitiesToBeCompared,
}) => {

    const toBeComparedItems = entitiesToBeCompared.map(item => item.relatedItems.entityAttributes)

    return <div class="my-20 py-4 overflow-x-clip">
        <div class="sticky top-14 start-0">
            <div class="flex items-center justify-start shadow border-b rounded-sm bg-white">
                {
                    entitiesToBeCompared.map(item => <div class="max-w-[50%] grow min-w-[50%] md:min-w-[33%] lg:min-w-[25%] font-bold text-xl py-8 px-2 text-center">
                        {item.title}
                    </div>)
                }
            </div>
        </div>
        {/* <div class="flex">

            {
                toBeComparedItems.map((projectAttributes, projectAttributesIndex) => <div class="max-w-[50%] grow min-w-[50%] md:min-w-[33%] lg:min-w-[25%]">
                <div>
                    <div>{projectAttributes.isActive}</div>
                    {
                        projectAttributes.filter(item => item.attributesAttributeDataTypeKey !== "longText").map(attribute => <div class="py-2 flex flex-col gap-4 border-b last:border-none px-2">
                            {projectAttributesIndex < 1 ?
                                <p class="text-lg text-black/50">{attribute.attributesAttributeTitle}</p> :
                                <p class="text-lg text-black/50 select-none">&nbsp;</p>
                            }
                            <p class="text-center">
                                {attribute.value}
                            </p>
                        </div>
                        )}
                </div>
            </div>
            )}
        </div> */}
    </div>
}

export default CompareTable
