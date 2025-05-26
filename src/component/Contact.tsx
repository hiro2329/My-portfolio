interface ContactProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}
const Contact: React.FC<ContactProps> = ({ sectionRef }) => {
  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-gray-100 py-8 flex flex-col justify-center items-center"
    >
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-lg mb-6">
        Feel free to reach out for any inquiries or collaborations!
      </p>
    </section>
  );
};
export default Contact;
