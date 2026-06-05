import React from "react";
import { X, MapPin, IndianRupee, Soup } from "lucide-react";

const stateFoods = [
  { state: "Andhra Pradesh", food: "Gongura Chicken", restaurant: "Rayalaseema Ruchulu", price: "₹400-₹900" },
  { state: "Arunachal Pradesh", food: "Thukpa", restaurant: "Khamti Kitchen", price: "₹250-₹700" },
  { state: "Assam", food: "Masor Tenga", restaurant: "Paradise Restaurant", price: "₹300-₹800" },
  { state: "Bihar", food: "Litti Chokha", restaurant: "Biryani Mahal & Litti House", price: "₹150-₹500" },
  { state: "Chhattisgarh", food: "Chana Samosa", restaurant: "Maharaja Restaurant", price: "₹200-₹600" },
  { state: "Goa", food: "Goan Fish Curry", restaurant: "Pousada by the Beach", price: "₹600-₹1800" },
  { state: "Gujarat", food: "Undhiyu", restaurant: "Agashiye", price: "₹400-₹1500" },
  { state: "Haryana", food: "Bajra Khichdi", restaurant: "Gulab Palace", price: "₹250-₹700" },
  { state: "Himachal Pradesh", food: "Dham", restaurant: "Johnson's Cafe", price: "₹400-₹1200" },
  { state: "Jharkhand", food: "Thekua", restaurant: "Bhojan", price: "₹150-₹500" },
  { state: "Karnataka", food: "Bisi Bele Bath", restaurant: "MTR", price: "₹300-₹1000" },
  { state: "Kerala", food: "Appam with Stew", restaurant: "Paragon Restaurant", price: "₹350-₹1200" },
  { state: "Madhya Pradesh", food: "Poha Jalebi", restaurant: "Shreemaya Celebration", price: "₹200-₹700" },
  { state: "Maharashtra", food: "Misal Pav", restaurant: "Aaswad", price: "₹200-₹800" },
  { state: "Manipur", food: "Eromba", restaurant: "Luxmi Kitchen", price: "₹250-₹700" },
  { state: "Meghalaya", food: "Jadoh", restaurant: "Dylan's Cafe", price: "₹300-₹900" },
  { state: "Mizoram", food: "Bai", restaurant: "Aizawl Kitchen", price: "₹250-₹650" },
  { state: "Nagaland", food: "Smoked Pork with Bamboo Shoot", restaurant: "Hornbill Restaurant", price: "₹350-₹1000" },
  { state: "Odisha", food: "Dalma", restaurant: "Dalma Restaurant", price: "₹200-₹700" },
  { state: "Punjab", food: "Sarson da Saag & Makki di Roti", restaurant: "Bharawan Da Dhaba", price: "₹250-₹900" },
  { state: "Rajasthan", food: "Dal Baati Churma", restaurant: "Chokhi Dhani", price: "₹350-₹1200" },
  { state: "Sikkim", food: "Phagshapa", restaurant: "Taste of Tibet", price: "₹300-₹900" },
  { state: "Tamil Nadu", food: "Chettinad Chicken", restaurant: "Murugan Idli Shop", price: "₹250-₹1100" },
  { state: "Telangana", food: "Hyderabadi Biryani", restaurant: "Paradise Biryani", price: "₹300-₹1500" },
  { state: "Tripura", food: "Mui Borok", restaurant: "Nirapara", price: "₹200-₹600" },
  { state: "Uttar Pradesh", food: "Tunday Kababi", restaurant: "Tunday Kababi", price: "₹300-₹1200" },
  { state: "Uttarakhand", food: "Aloo ke Gutke", restaurant: "Kafuli Kitchen", price: "₹200-₹700" },
  { state: "West Bengal", food: "Kosha Mangsho", restaurant: "6 Ballygunge Place", price: "₹400-₹1600" },
];

const buildMapsSearchUrl = (state, food) =>
  `https://www.google.com/maps/search/${encodeURIComponent(`best ${food} restaurant in ${state}, India`)}`;

const GourmetRestaurantModal = ({ open, onClose }) => {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-6xl max-h-[92vh] overflow-hidden rounded-3xl border border-slate-700 bg-slate-950 shadow-[0_30px_120px_rgba(2,6,23,0.65)]">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-slate-800 bg-slate-950/95 px-5 py-5 md:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300 mb-3">
              <Soup className="h-4 w-4" />
              Gourmet Restaurant
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-white">
              Indian State Food Guide with Restaurant Price Range
            </h3>
            <p className="mt-2 max-w-3xl text-sm md:text-base text-slate-400">
              Click a state to search on Google Maps for a recommended restaurant and signature food. Prices are indicative per person.
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
            aria-label="Close gourmet restaurant details"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[calc(92vh-110px)] overflow-y-auto px-5 py-6 md:px-8">
          <div className="mb-5 flex flex-wrap gap-3 text-xs md:text-sm text-slate-400">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-2 border border-slate-800"><MapPin className="h-4 w-4 text-emerald-400" />28 Indian states</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-2 border border-slate-800"><IndianRupee className="h-4 w-4 text-emerald-400" />Budget, mid-range, premium</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-2 border border-slate-800"><Soup className="h-4 w-4 text-emerald-400" />Signature local dishes</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
            {stateFoods.map((item) => (
              <article key={item.state} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 md:p-5 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white">{item.state}</h4>
                    <p className="text-sm text-slate-400">Best food: {item.food}</p>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300 border border-emerald-500/20">{item.price}</span>
                </div>
                <p className="text-sm text-slate-300 mb-3">
                  Restaurant: <span className="font-semibold text-white">{item.restaurant}</span>
                </p>
                <a
                  href={buildMapsSearchUrl(item.state, item.food)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
                >
                  Open in Google Maps
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GourmetRestaurantModal;
