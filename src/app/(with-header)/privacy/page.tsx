import { Heading } from "@/ui"
import { Wrapper } from "@/layouts"

export default function Privacy() {
  return (
    <Wrapper>
      <article className="my-20">
        <Heading className="text-center">Privacy Policy</Heading>
        <p className="text-passive mt-8">This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the TSI Schedule Scraper website.</p>
        <p className="text-passive mt-8">If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.</p>
        <Heading className="text-center mt-20">Information Collection and Use</Heading>
        <p className="text-passive mt-8">For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, email, group number, google picture. The information that we collect will be used to contact or identify you.</p>
        <Heading className="text-center mt-20">Cookies</Heading>
        <p className="text-passive mt-8">Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer hard drive.</p>
        <p className="text-passive mt-8">This application uses cookies, if you want to enjoy this website you shall agree to that. It simply does not work without. We use cookies to create auth sessions. If you continue to use this site, you consent to our use of cookies.</p>
        <Heading className="text-center mt-20">Service Providers</Heading>
        <p className="text-passive mt-8">We may employ third-party companies and individuals due to the following reasons:</p>
        <ul className="text-passive list-disc list-inside mt-2 divide-y-8 divide-transparent">
          <li className="ml-5">To facilitate our Service</li>
          <li className="ml-5">To provide the Service on our behalf</li>
          <li className="ml-5">To perform Service-related services</li>
        </ul>
        <p className="text-passive">We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>
        <Heading className="text-center mt-20">Links to Other Sites</Heading>
        <p className="text-passive mt-8">Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
      </article>
    </Wrapper>
  )
}
