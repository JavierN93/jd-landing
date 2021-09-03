import { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '../components/layout/layout';
import { Jumbotron } from '../components/landing/jumbotron';

const LegalNotice: NextPage = () => {
  return (
    <>
      <Head>
        <title>Legal Notice | J & D Landscaping</title>
        <meta name="description" content="J & D Landscaping Terms and Conditions of Use" />
      </Head>
      <Layout>
        <Jumbotron title="" image="/assets/images/privacy/header.jpg" blur="/assets/images/privacy/header-blur.png" />
        <section className="py-60 lg:py-100">
          <div className="container mx-auto">
            <div className="text-center">
              <p className="text-primary text-22">J & D Landscaping</p>
              <h2 className="text-32 md:text-44 text-light-500 text-center mb-40 lg:mb-60">TERMS AND CONDITIONS OF USE</h2>
            </div>
            <p className="mb-50 text-light-500">BY ACCESSING AND BROWSING THIS WEBSITE, YOU ACCEPT, WITHOUT LIMITATION
              OR QUALIFICATION, THE FOLLOWING TERMS AND CONDITIONS OF USE. IF YOU DO NOT AGREE, PLEASE DISCONTINUE YOUR
              USE OF THIS WEBSITE.</p>

            <p className="text-primary text-18 font-medium mb-20">Modification of Terms</p>
            <p className="mb-50 text-light-500">J & D Landscaping may, at any time and without notice, amend these
              terms and conditions (&quot;Terms&quot;), or may limit or deny access to, or change the content of, the website. You
              should periodically visit this J & D Landscapinge to review the then current Terms to which you are bound.
              These Terms are applicable to all J & D Landscaping North American websites. When leaving this website,
              whether or not to visit another J & D Landscaping website, please read the website terms and the privacy
              policy applicable to such website to ensure you understand and agree with the terms applicable to that
              website.</p>

            <p className="text-primary text-18 font-medium mb-20">Applicability</p>
            <p className="mb-50 text-light-500">Information and materials displayed on the website, including without
              limitation, product pricing, specifications, warranty and/or other information, are applicable to products
              sold in the United States and not necessarily to J & D Landscaping products sold in other markets.</p>

            <p className="text-primary text-18 font-medium mb-20">Restricted Use and Copyrights</p>
            <p className="mb-50 text-light-500">All photographs, audio and video clips, picture images, graphics,
              links, website architecture, format, layout and data structures, and all other items contained on the
              website are copyrighted unless otherwise noted and may not be used in any manner, except as provided in
              these Terms or in the website text, without J & D Landscaping&apos;s prior written permission. Images of people
              or places and J & D Landscaping products, are either property of, or used with permission by, J & D
              Landscaping. Any unauthorized use of these materials may violate copyright, trademark and privacy laws,
              and other applicable statutes. You may browse this website and download or print a copy of material
              displayed on the website for your personal use only and not for redistribution, unless consented to in
              writing by J & D Landscaping. This limited consent shall automatically terminate upon your breach of any
              of these website Terms.</p>

            <p className="text-primary text-18 font-medium mb-20">Trademarks</p>
            <p className="mb-50 text-light-500">J & D Landscaping, Belgard®, Dufferin Stone® and other J & D
              Landscaping product names, model numbers, logos, commercial symbols, trade names and slogans are
              trademarks and the distinctive shapes of J & D Landscaping. You are prohibited from using any of the marks
              appearing on this website without the express prior written consent of J & D Landscaping, except as
              permitted by applicable laws. Other marks and logos shown on this website may be marks owned by third
              parties not affiliated with J & D Landscaping and are used with permission. Nothing shown on this website
              should be construed as granting, by implication, estoppel or otherwise, any permission, license or right
              to use any trademark, service mark or trade name displayed on this website without the written permission
              of J & D Landscaping or the third party owner. The use of any J & D Landscaping logo or mark, whether
              registered or unregistered, as a hyperlink to this website or any other J & D Landscaping website is
              strictly prohibited unless consented to in writing by J & D Landscaping.</p>

            <p className="text-primary text-18 font-medium mb-20">Disclaimers</p>
            <p className="mb-20 text-light-500">All data contained on the website relating to third-party products or
              services, including but not limited to, prices, availability of service or product, product feature or
              service coverage, if any, should be verified with the party supplying the product or service. J & D
              Landscaping may at any time without notice amend the data displayed on the website. While J & D
              Landscaping endeavors to periodically update posted information, not all information may be current, and J
              & D Landscaping does not guarantee the accuracy or reliability of such data. Specifications on the website
              are for comparison purposes only. Manufacturer&apos;s Suggested Retail Price (MSRP) excludes transportation
              fees, taxes, license, title, optional or regionally required equipment. Actual dealer price may vary. J &
              D Landscaping is not responsible for any loss or damage caused by your reliance on any data contained on
              this website.</p>
            <p className="mb-50 text-light-500">This website is provided as a convenience to you on an &quot; as is&quot; and &quot;
              as available&quot; basis. J & D Landscaping does not warrant that your access to these website J & D
              Landscapinges will be uninterrupted or error-free. NO WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED,
              INCLUDING BUT NOT LIMITED TO WARRANTIES OF TITLE OR NON-INFRINGEMENT, OR IMPLIED WARRANTIES OF
              MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, IS MADE IN RELATION TO THE AVAILABILITY, ACCURACY,
              RELIABILITY OR CONTENT OF THE J & D Landscaping SITES. J & D Landscaping SHALL NOT BE LIABLE FOR ANY
              DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, LOST PROFITS, REVENUES OR DATA,
              OR LOSSES FOR BUSINESS INTERRUPTION ARISING OUT OF THE USE OF OR INABILITY TO USE THIS WEBSITE, EVEN IF J
              & D Landscaping HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. J & D Landscaping assumes no
              responsibility and/or liability for any damages to or viruses that may infect your computer equipment or
              other property on account of or arising out of your use of or access to this website. Some jurisdictions
              do not allow exclusion of certain warranties or limitations of liability, so the above limitations or
              exclusions may not apply to you. J & D Landscaping&apos;s liability in any case shall, however, be limited to
              the greatest extent permitted by law.</p>

            <p className="text-primary text-18 font-medium mb-20">Links</p>
            <p className="mb-50 text-light-500">J & D Landscaping may include links to other sites on the Internet that
              are owned or operated by third parties, including authorized J & D Landscaping dealers. When visiting
              these third-party sites, you do so at your own risk. You should review and determine if you agree to a
              particular site&apos;s terms and conditions of use before using such site. J & D Landscaping does not control
              these sites and assumes no responsibility for their content. A link to a non-J & D Landscaping site does
              not imply that J & D Landscaping endorses the site or the products or services described on such
              sites.</p>

            <p className="text-primary text-18 font-medium mb-20">Submissions</p>
            <p className="mb-50 text-light-500">Any communication or material you transmit to the website (including
              feedback, data, answers, questions, comments, suggestions, ideas, plans, orders, requests or the like)
              will be treated as non-confidential and non-proprietary. All materials transmitted to the website becomes
              the property of J & D Landscaping and may be used for any purpose. J & D Landscaping may publish the
              material and/or incorporate it or any concepts described in it in our products without compensation,
              restrictions on use, acknowledgement of source, accountability, or liability.</p>

            <p className="text-primary text-18 font-medium mb-20">Governing Law</p>

            <p className="mb-20 text-light-500">This website is governed by and subject to the laws of the State of
              Connecticut and, where applicable, U.S. federal law.</p>
            <p className="text-light-500">© 2020. J & D Landscaping. All rights reserved.</p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default LegalNotice;
