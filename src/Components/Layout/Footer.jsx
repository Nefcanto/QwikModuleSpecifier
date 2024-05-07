import { component$ } from "@builder.io/qwik"
import {
    Accordions,
    FooterMenus,
    FooterSocials,
    FooterTerms,
} from "Layout"

const Footer = component$(({
    aboutFooterLinks,
    contactInfo,
    copyRight,
    customerServices,
    quickAccessFooterLinks,
    shoppingWithUs,
    socials,
    termsAndConditions,
}) => {

    return <footer class="bg-custom-color1 bg-gradient-to-b from-custom-color13 to-custom-color14 px-4 2xl:px-0 pt-10 lg:pt-20 pb-10 text-white">
        <div class="max-w-6xl mx-auto">
            <div class="w-full border-b border-b-custom-color15 pb-12">
                <Accordions
                    customerServices={customerServices}
                    shoppingWithUs={shoppingWithUs}
                    aboutFooterLinks={aboutFooterLinks}
                    quickAccessFooterLinks={quickAccessFooterLinks}
                />
                <FooterMenus
                    aboutFooterLinks={aboutFooterLinks}
                    customerServices={customerServices}
                    quickAccessFooterLinks={quickAccessFooterLinks}
                    shoppingWithUs={shoppingWithUs}
                />
            </div>
            <FooterSocials
                phone={contactInfo?.mainPhone}
                phoneTitle={contactInfo?.mainPhoneTitle}
                socials={socials}
            />
            <div class="flex md:justify-between items-center flex-wrap gap-4 border-t border-t-custom-color16 pt-12">
                <FooterTerms termsAndConditions={termsAndConditions} />
                <div class="text-xs flex justify-center md:justify-start">{copyRight?.title}</div>
            </div>
        </div>
    </footer>
})

export default Footer
