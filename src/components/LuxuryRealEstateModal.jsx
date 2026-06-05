import React from "react";
import { X, MapPin, Building2, IndianRupee, Search } from "lucide-react";

const propertyCategories = [
  {
    category: "Studio Luxury Apartment",
    bestFor: "Singles / investors",
    price: "₹35L-₹65L",
    city: "Pune",
  },
  {
    category: "1BHK Premium Flat",
    bestFor: "First-time buyers",
    price: "₹45L-₹80L",
    city: "Bengaluru",
  },
  {
    category: "2BHK Gated Community",
    bestFor: "Small families",
    price: "₹60L-₹1.2Cr",
    city: "Hyderabad",
  },
  {
    category: "3BHK Luxury Apartment",
    bestFor: "Urban comfort",
    price: "₹1.2Cr-₹2.5Cr",
    city: "Mumbai",
  },
  {
    category: "Sky Villa / Penthouse",
    bestFor: "High-end buyers",
    price: "₹2.5Cr-₹8Cr",
    city: "Delhi NCR",
  },
  {
    category: "Luxury Villa",
    bestFor: "Family residence",
    price: "₹1.8Cr-₹6Cr",
    city: "Goa",
  },
  {
    category: "Residential Plot",
    bestFor: "Long-term growth",
    price: "₹25L-₹2Cr",
    city: "Ahmedabad",
  },
  {
    category: "Commercial Office Space",
    bestFor: "Business / rental income",
    price: "₹50L-₹4Cr",
    city: "Chennai",
  },
];

const buildMapsSearchUrl = (category, city) =>
  `https://www.google.com/maps/search/${encodeURIComponent(`${category} in ${city}, India`)}`;

const buildGoogleSearchUrl = (category, city) =>
  `https://www.google.com/search?q=${encodeURIComponent(`best affordable ${category} in ${city}, India`)}`;

const LuxuryRealEstateModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-6xl max-h-[92vh] overflow-hidden rounded-3xl border border-slate-700 bg-slate-950 shadow-[0_30px_120px_rgba(2,6,23,0.65)]">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-slate-800 bg-slate-950/95 px-5 py-5 md:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300 mb-3">
              <Building2 className="h-4 w-4" />
              Luxury Real Estate
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-white">
              Best Affordable Categories for Luxury Property in India
            </h3>
            <p className="mt-2 max-w-3xl text-sm md:text-base text-slate-400">
              Explore budget-friendly to premium real estate categories. Each
              card includes a Google Maps search and a Google search link.
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
            aria-label="Close luxury real estate details"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[calc(92vh-110px)] overflow-y-auto px-5 py-6 md:px-8">
          <div className="mb-5 flex flex-wrap gap-3 text-xs md:text-sm text-slate-400">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-2 border border-slate-800">
              <MapPin className="h-4 w-4 text-amber-400" />
              Google Maps property search
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-2 border border-slate-800">
              <IndianRupee className="h-4 w-4 text-amber-400" />
              Affordable to premium budgets
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-2 border border-slate-800">
              <Search className="h-4 w-4 text-amber-400" />
              Searchable category suggestions
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
            {propertyCategories.map((item) => (
              <article
                key={item.category}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 md:p-5 hover:border-amber-500/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {item.category}
                    </h4>
                    <p className="text-sm text-slate-400">
                      Best for: {item.bestFor}
                    </p>
                  </div>
                  <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300 border border-amber-500/20">
                    {item.price}
                  </span>
                </div>

                <p className="text-sm text-slate-300 mb-3">
                  Suggested city:{" "}
                  <span className="font-semibold text-white">{item.city}</span>
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href={buildMapsSearchUrl(item.category, item.city)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
                  >
                    Open Google Maps
                  </a>
                  <a
                    href={buildGoogleSearchUrl(item.category, item.city)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400"
                  >
                    Search Google Results
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryRealEstateModal;
