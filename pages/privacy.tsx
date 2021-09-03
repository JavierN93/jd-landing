import Head from 'next/head';
import { NextPage } from 'next';
import { Layout } from '../components/layout/layout';
import { Jumbotron } from '../components/landing/jumbotron';

const Privacy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - J & D Landscaping</title>
        <meta name="description" content="Choose from a variety of patio, walkway, driveway, retaining wall, and stair kits for any budget and taste to create the perfect outdoor living space." />
      </Head>
      <Layout>
        <Jumbotron title="" image="/assets/images/privacy/header.jpg" blur="/assets/images/privacy/header-blur.png" />
        <section className="py-60 lg:py-100">
          <div className="container mx-auto">
            <div className="text-center">
              <p className="text-primary text-22">J & D Landscaping</p>
              <h2 className="text-32 md:text-44 text-light-500 text-center mb-40 lg:mb-60">Privacy Policy</h2>
            </div>
            <p className="mb-50 text-light-500">J & D Landscaping recognizes the importance of protecting the personal
              privacy of its website visitors <a className="underline">and as such will not send unsolicited &quot;junk&quot; or
                &quot;spam&quot; email to you as a result of visiting any J & D Landscaping website unless you specifically
                request that such data in email form be sent</a> . The following Privacy Policy (&quot;Policy&quot;) describes the
              types of information J & D Landscaping may collect and permissible use that information. The Policy
              applies only to J & D Landscaping North America websites. When leaving this website, please read the
              privacy policy applicable to <a className="underline">that</a> website, if any, to ensure you understand
              and agree with the applicable policy. J & D Landscaping reserves the right to change the Policy at any
              time without notice. Policy revisions are effective upon posting and apply only to data collected
              thereafter. You should periodically visit this J & D Landscaping to review the current terms.</p>

            <p className="text-primary text-18 font-medium mb-20">Confidentiality</p>
            <p className="mb-50 text-light-500">J & D Landscaping does not sell or provide data to non-affiliate third
              parties for promotional purposes, but may collect and share aggregate website statistical information
              (such as sales, traffic patterns or related information) with third parties <a className="underline">with
                the express approval of J & D Landscaping®</a>. No such shared statistics will contain any identifying
              user information.</p>

            <p className="text-primary text-18 font-medium mb-20">Visitor Identification</p>
            <p className="mb-50 text-light-500">When connecting to our website, J & D Landscaping may automatically
              collect technical non-personal information. Examples include the type of Internet browser used, your
              computer operating system and the IP address of the website from which you linked to our website. When
              viewing our website, information in the form of a &quot;cookie&quot; or similar file may also be stored on your
              computer. This information helps J & D Landscaping to tailor its website in a manner to better match your
              interests and preferences. If you do not wish to receive cookies or want to be notified when they are
              placed on your computer, many Internet browser&apos;s settings allow you to erase existing &quot;cookies&quot; or block
              or warn before a cookie is stored on your computer. Consult your specific browser&apos;s instructions to learn
              more about these features.</p>

            <p className="text-primary text-18 font-medium mb-20">Personal Information</p>
            <p className="mb-20 text-light-500">J & D Landscaping does not collect personally identifiable information
              (name, address, e-mail address and telephone number) through its website unless you provide it to us
              voluntarily. J & D Landscaping may ask you for personal information to respond to your questions; process
              or fulfill your order or request; or register you in contests and sweepstakes. For product or service
              orders, J & D Landscaping may need additional information in order to process or fulfill your order or
              request. J & D Landscaping will not share your personal information with third parties without your
              permission, except as otherwise necessary to (i) process or fulfill your order, (ii) respond to your
              request or answer your inquiries, (iii) enter you in contests, sweepstakes or other promotional
              activities, or (iv) comply with any applicable law, court order or other judicial process. J & D
              Landscaping may occasionally hire other companies to provide certain services on its behalf, including
              management of contests, sweepstakes and surveys. J & D Landscaping may provide such companies with the
              minimum amount of personal information necessary to deliver the service, which may not be for any other
              purpose. You will not receive e-mails or mailings concerning J & D Landscaping or its products, services
              or promotions unless you specifically elect to receive such information. Although no system is currently
              100% immune from external attack, J & D Landscaping has taken commercially reasonable measures to prevent
              the unauthorized access and improper use of your personal information.</p>

            <p className="text-light-500">© 2020. J & D Landscaping. All rights reserved.</p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Privacy;
