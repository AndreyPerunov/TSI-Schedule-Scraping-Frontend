import { Heading } from "@/ui"
import { Wrapper } from "@/layouts"

export default function Terms() {
  return (
    <Wrapper>
      <article className="mt-20">
        <Heading className="text-center">Terms of service </Heading>
        <p className="text-passive mt-8">Attention! The information provided by me on TSI Schedule Scraper Site is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site. UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.</p>
        <p className="text-passive mt-8">This application uses cookies, if you want to enjoy this website you shall agree to that. It simply does not work without. We use cookies to create auth sessions. If you continue to use this site, you consent to our use of cookies.</p>
      </article>
    </Wrapper>
  )
}
