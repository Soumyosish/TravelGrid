import React from 'react'
import { useNavigate } from 'react-router-dom';
import DiscoverCard from '@/components/DiscoverCard';

function DiscovermoreDestination() {
    const navigate = useNavigate();

    const handleBookNowClick = () => {
        navigate("/packages"); // Redirect to /packages when clicked
    };

    const destinations = [
        {
            name: "Manali, Himachal",
            description: "A beautiful hill station known for its scenic beauty and adventure sports.",
            image: "https://images.unsplash.com/photo-1712388430474-ace0c16051e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuYWxpfGVufDB8fDB8fHww"
        },
        {
            name: "Jaipur, Rajasthan",
            description: "The Pink City with rich history, forts, and vibrant culture.",
            image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFpcHVyfGVufDB8fDB8fHww"
        },
        {
            name: "Goa",
            description: "Popular beach destination with nightlife, water sports, and culture.",
            image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hfGVufDB8fDB8fHww"
        },
        {
            name: "Rishikesh, Uttarakhand",
            description: "The yoga capital of the world, nestled on the banks of the Ganges.",
            image: "https://plus.unsplash.com/premium_photo-1697730398251-40cd8dc57e0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmlzaGlrZXNofGVufDB8fDB8fHww"
        },
        {
            name: "Munnar, Kerala",
            description: "A serene hill station blanketed with tea gardens and misty mountains.",
            image: "https://images.unsplash.com/photo-1711192702535-eac61a78ecb0?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Jaisalmer, Rajasthan",
            description: "The Golden City of India, known for its desert forts and camel safaris.",
            image: "https://media.istockphoto.com/id/185324109/photo/bada-bagh-with-wind-turbines.webp?a=1&b=1&s=612x612&w=0&k=20&c=-iAtc1fprTuX-WuYS4FQkLXWj9cYH_NaMv4H728z5aM="
        },
        {
            name: "Tawang, Arunachal Pradesh",
            description: "A remote Himalayan town home to ancient monasteries and breathtaking landscapes.",
            image: "https://media.istockphoto.com/id/187510803/photo/ancient-buddhist-monastery-tawang-arunachal-pradesh-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=FX8tHuN0SvTW8bvUmZZ3FeGMTT8pjlH06p-gc9doEtg="
        },
        {
            name: "Hampi, Karnataka",
            description: "A UNESCO World Heritage site with majestic ruins and surreal boulder landscapes.",
            image: "https://media.istockphoto.com/id/1270774245/photo/hampi-stone-chariot-the-antique-stone-art-piece-from-unique-angle-with-amazing-blue-sk.webp?a=1&b=1&s=612x612&w=0&k=20&c=FN6uQp0ywkO9PxQ1bXerkryHSGyNNDEc3cCbQ7IzMdU="
        },
        {
            name: "Spiti Valley, Himachal Pradesh",
            description: "A cold desert mountain valley known for its monasteries and rugged beauty.",
            image: "https://images.unsplash.com/photo-1617159156637-dfb8655c9f95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpdGklMjB2YWxsZXl8ZW58MHx8MHx8fDA%3D"
        },
        {
            name: "Pondicherry",
            description: "A coastal town with French colonial architecture and tranquil beaches.",
            image: "https://plus.unsplash.com/premium_photo-1728117267325-534ccbd21a5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9uZGljaGVycnl8ZW58MHx8MHx8fDA%3D"
        },
        {
            name: "Coorg, Karnataka",
            description: "Known as the Scotland of India, filled with coffee plantations and lush hills.",
            image: "https://images.unsplash.com/photo-1634874634941-78abc0a00298?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvb3JnJTIwa2FybmF0a2F8ZW58MHx8MHx8fDA%3D"
        }
    ];
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 to-pink-50 py-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
        Discover New Destinations
      </h2>
      <p className="text-gray-600 text-base md:text-lg mb-10">
        Explore trending places, hidden gems, and must-visit spots curated just for you.
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-2">
        {destinations.map((place, index) => (
          <DiscoverCard index={index} place={place} handleBookNowClick={handleBookNowClick} />
        ))}
      </div>
    </section>
  )
}

export default DiscovermoreDestination;
