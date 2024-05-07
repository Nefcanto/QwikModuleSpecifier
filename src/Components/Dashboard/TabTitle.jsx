import { ArrowDown } from "Svg"

const TabTitle = ({ title }) => {

    return <div class="w-full flex items-center justify-between px-2 text-slate-600 hover:text-custom-color14 transition-all text-md">
        <span>{title}</span>
        <ArrowDown class="w-4" />
    </div>
}

export default TabTitle
