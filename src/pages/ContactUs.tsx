import Trusted from '@/components/organisms/trusted';
import ContactUsForm from '@/components/organisms/contactusform';
import LocationMap from '@/components/organisms/locationmap';

export default function ContactUsPage() {
  return (
    <>
      {/* Purple Header */}
      <section className="w-full bg-teal-950 py-16 px-4 text-center">
        <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Contact Us
        </h1>
        <p className="text-white text-xl md:text-2xl max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Have a business requirement? Drop your details below and one of our team members will get in touch with you and help you understand how MVPRockets can help you!
        </p>
      </section>
      <ContactUsForm />
      <LocationMap />
    </>
  );
}
