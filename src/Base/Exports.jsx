import { clearCache } from "./Cache"
import { component$ } from "@builder.io/qwik"
import { get } from "./Api"
import { getFromCacheOrApi } from "./Cache"
import { getPixel } from "../../TailwindBase"
import { getRem } from "../../TailwindBase"
import { getWithAuthentication } from "./Api.jsx"
import { lg } from "../../TailwindBase"
import { md } from "../../TailwindBase"
import { post } from "./Api"
import { postWithAuthentication } from "./Api.jsx"
import { sm } from "../../TailwindBase"
import { upload } from "./Api"
import { xl } from "../../TailwindBase"
import { xs } from "../../TailwindBase"
import { xxl } from "../../TailwindBase"
import { zero } from "../../TailwindBase"
import AppContext from "../BaseContexts/AppContext"
import AppContextProvider from "./AppContextProvider"
import buildUrl from "./BuildUrl.jsx"
import Calendar from "../BaseComponents/Svg/Calendar"
import camelize from "./Camelize"
import Check from "../BaseComponents/Svg/Check"
import ChevronLeftIcon from "../BaseComponents/Svg/ChevronLeftIcon"
import ChevronRightIcon from "../BaseComponents/Svg/ChevronRightIcon"
import CircularProgress from "../BaseComponents/CircularProgress"
import Close from "../BaseComponents/Close"
import ConditionalLink from "../BaseComponents/ConditionalLink"
import convertDate from "../BaseFunctions/ConvertDate"
import Copy from "../BaseComponents/Svg/Copy"
import CountUp from "../BaseComponents/CountUp"
import DefaultBreadcrumb from "../BaseComponents/Breadcrumb"
import Duration from "../BaseComponents/Duration"
import Edit from "../BaseComponents/Svg/Edit"
import Element from "../BaseComponents/Element"
import Envelop from "../BaseComponents/Svg/Envelop"
import ExpandMore from "../BaseComponents/Svg/ExpandMore"
import Eye from "../BaseComponents/Svg/Eye"
import FiresPageIcon from "../BaseComponents/Svg/FiresPage"
import Font from "../BaseComponents/Font"
import getRandomId from "../BaseFunctions/GetRandomId.jsx"
import getSession from "../BaseFunctions/GetSession"
import GoogleTagManagerNoScript from "../BaseComponents/GoogleTagManagerNoScript"
import Image from "../BaseComponents/Image"
import isDev from "./IsDev"
import LastPageIcon from "../BaseComponents/Svg/LastPage"
import Link from "../BaseComponents/Link"
import LocalizedDate from "../BaseComponents/LocalizedDate"
import Map from "../BaseComponents/Map"
import merge from "../BaseFunctions/Merge"
import Message from "../BaseComponents/Message"
import Modal from "../BaseComponents/Modal"
import Navigation from "../BaseComponents/Svg/Navigation"
import NoIndex from "../BaseComponents/NoIndex"
import NotFound from "./NotFound"
import OpenInFull from "../BaseComponents/OpenInFull"
import Pagination from "../BaseComponents/Pagination"
import RichText from "../BaseComponents/RichText"
import ScrollToTop from "../BaseComponents/ScrollToTop"
import setting from "./Setting.jsx"
import Star from "../BaseComponents/Svg/Star"
import SwiperConfig from "./SwiperConfig"
import SwiperElement from "../BaseComponents/SwiperElement"
import SwiperSlide from "../BaseComponents/SwiperSlide"
import tailwindConfig from "../../tailwind.config.js"
import Telegram from "../BaseComponents/Svg/Telegram"
import TimeAgo from "../BaseComponents/TimeAgo"
import Toc from "../BaseComponents/Toc.jsx"
import toCamelCase from "../BaseFunctions/ToCamelCase"
import toKebabCase from "../BaseFunctions/ToKebabCase"
import useAsync from "../BaseHooks/UseAsync"
import useLocalizedDate from "../BaseHooks/UseLocalizedDate"
import useLocalizedTime from "../BaseHooks/UseLocalizedTime"
import useMessage from "../BaseHooks/UseMessage"
import useQuery from "../BaseHooks/UseQuery"
import Video from "../BaseComponents/Video"
import WhatsApp from "../BaseComponents/Svg/WhatsApp"

const customColors = tailwindConfig?.theme?.extend?.colors?.custom

export { AppContext }
export { AppContextProvider }
export { buildUrl }
export { Calendar }
export { camelize }
export { Check }
export { ChevronLeftIcon }
export { ChevronRightIcon }
export { CircularProgress }
export { clearCache }
export { Close }
export { component$ }
export { ConditionalLink }
export { convertDate }
export { Copy }
export { CountUp }
export { customColors }
export { DefaultBreadcrumb }
export { Duration }
export { Edit }
export { Element }
export { setting }
export { Envelop }
export { Eye }
export { ExpandMore }
export { FiresPageIcon }
export { Font }
export { get }
export { getFromCacheOrApi }
export { getPixel }
export { getRandomId }
export { getRem }
export { getSession }
export { getWithAuthentication }
export { GoogleTagManagerNoScript }
export { Image }
export { isDev }
export { LastPageIcon }
export { lg }
export { Link }
export { LocalizedDate }
export { Map }
export { md }
export { merge }
export { Message }
export { Modal }
export { Navigation }
export { NoIndex }
export { NotFound }
export { OpenInFull }
export { Pagination }
export { post }
export { postWithAuthentication }
export { RichText }
export { ScrollToTop }
export { sm }
export { Star }
export { SwiperConfig }
export { SwiperElement as Swiper }
export { SwiperSlide }
export { Telegram }
export { TimeAgo }
export { Toc }
export { toCamelCase }
export { toKebabCase }
export { upload }
export { useAsync }
export { useLocalizedDate }
export { useLocalizedTime }
export { useMessage }
export { useQuery }
export { Video }
export { WhatsApp }
export { xl }
export { xs }
export { xxl }
export { zero }
