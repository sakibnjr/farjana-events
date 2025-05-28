import Image from 'next/image';

const services = [
  {
    title: 'BIRTHDAY PARTIES',
    desc: 'Make your birthday unforgettable with a vibrant and personalized celebration at our event space',
    img: '/birthday.jpg',
  },
  {
    title: 'BABY SHOWERS',
    desc: 'Celebrate the joy of new beginnings in a charming and cozy setting perfect for your baby shower.',
    img: '/baby.jpg',
  },
  {
    title: 'CORPORATE EVENTS',
    desc: 'Host your corporate events with style and sophistication in a professional and versatile environment.',
    img: '/party20.jpg',
  },
  {
    title: 'ANNIVERSARY CELEBRATION',
    desc: 'Cherish your milestone moments with an elegant and romantic anniversary celebration.',
    img: '/party14.jpg',
  },
  {
    title: 'INTIMATE WEDDINGS',
    desc: 'Say \'I do\' in an intimate, beautifully decorated venue designed for your special day.',
    img: '/party19.jpg',
  },
  {
    title: 'SPECIAL OCASSIONS',
    desc: 'Create lasting memories for any special occasion with our customizable and inviting event space.',
    img: '/party22.jpg',
  },
];

export default function Services() {
  return (
    <section className="w-full bg-[#ecebed] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative rounded-md overflow-hidden h-[300px] md:h-[400px] group"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={idx < 3}
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300">
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base mb-6">
                    {service.desc}
                  </p>
                  <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-white/90 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 