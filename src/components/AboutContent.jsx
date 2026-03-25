import img1 from '../assets/images/Director.jpg'
import img2 from '../assets/images/CEO.jpg'
import img3 from '../assets/images/Manager.jpg'
import img4 from '../assets/images/VC.jpg'
import happyCustomer from '../assets/images/Happy_Customers.jpg'
const teamMembers = [
  {
    name: "Wesells Koopman",
    role: "Founder & CEO",
    image:img4,
    bio: "20+ years in the automotive industry, passionate about bringing luxury vehicles to South Africa.",
  },
  {
    name: "Nuke King",
    role: "Director of Sales",
    image: img1,
    bio: "A customer-first mindset with a deep knowledge of premium and exotic vehicles.",
  },
  {
    name: "Sipho Nkosi",
    role: "Chief Mechanic",
    image:img2,
    bio: "Certified master technician specializing in European and American luxury brands.",
  },
  {
    name: "Ayanda Petersen",
    role: "Marketing Director",
    image:img3,
    bio: "Crafting the Auto Cars brand story and connecting with our growing community.",
  },
];

const milestones = [
  {
    year: "2005",
    title: "The Beginning",
    desc: "Auto Cars was founded in a small garage in Cape Town with just 3 vehicles and a big dream.",
  },
  {
    year: "2010",
    title: "First Showroom",
    desc: "Opened our first official showroom on Auto Drive, Cape Town, expanding to 50+ vehicles.",
  },
  {
    year: "2015",
    title: "Going Premium",
    desc: "Partnered with luxury brands and became an authorised dealer for European and exotic vehicles.",
  },
  {
    year: "2020",
    title: "Digital Expansion",
    desc: "Launched our online platform, making premium cars accessible to customers across South Africa.",
  },
  {
    year: "2024",
    title: "Industry Leaders",
    desc: "Recognised as Cape Town's #1 premium auto dealer with over 500 satisfied customers yearly.",
  },
];

function AboutPage() {
  return (
    <div className="bg-white text-black font-sans">
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Redefining the <br />
            <span className="text-gray-600">luxury car experience</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            At Auto Cars, we believe buying a premium vehicle should feel as
            extraordinary as driving one. We exist to bridge the gap between
            aspiration and ownership — offering world-class vehicles alongside a
            buying experience that's transparent, personal, and memorable.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Our vision is to be Southern Africa's most trusted name in luxury
            automotive retail — not just selling cars, but building long-term
            relationships with every driver who walks through our doors.
          </p>
        </div>
        <div className="relative">
          <img
            src= {happyCustomer}
            alt="Vision"
            className=" w-full h-80 object-cover"
          />
          <div className="absolute -bottom-6 -left-6 bg-white text-black  p-5 shadow-2xl">
            <p className="text-3xl font-bold">500+</p>
            <p className="text-sm text-gray-600">Happy customers yearly</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
            The People Behind It
          </p>
          <h2 className="text-4xl font-bold">Meet Our Team</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <div key={i} className="group text-center">
              <div className="relative overflow-hidden  mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-sm text-gray-300">{member.bio}</p>
                </div>
              </div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
export default AboutPage;
