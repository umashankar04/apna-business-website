import React from "react";
import { X, MapPin, PlayCircle, Dumbbell, IndianRupee } from "lucide-react";

const fitnessHubs = [
  {
    state: "Maharashtra",
    gym: "Cult.fit / Gold's Gym Mumbai",
    price: "₹1200-₹4500/mo",
    youtube: "home workout for fat loss india",
  },
  {
    state: "Karnataka",
    gym: "Cult.fit Bangalore",
    price: "₹1000-₹4000/mo",
    youtube: "strength training beginner india",
  },
  {
    state: "Delhi",
    gym: "Anytime Fitness Delhi",
    price: "₹1500-₹5000/mo",
    youtube: "gym workout routine india",
  },
  {
    state: "Tamil Nadu",
    gym: "The Workout Club Chennai",
    price: "₹900-₹3500/mo",
    youtube: "chest day workout india",
  },
  {
    state: "Telangana",
    gym: "Talwalkars Hyderabad",
    price: "₹1100-₹4200/mo",
    youtube: "weight loss workout india",
  },
  {
    state: "West Bengal",
    gym: "Fitness First Kolkata",
    price: "₹1000-₹3800/mo",
    youtube: "full body workout india",
  },
  {
    state: "Gujarat",
    gym: "Gold's Gym Ahmedabad",
    price: "₹900-₹3600/mo",
    youtube: "gym motivation hindi",
  },
  {
    state: "Punjab",
    gym: "Cult.fit Chandigarh",
    price: "₹1200-₹4300/mo",
    youtube: "muscle gain diet india",
  },
  {
    state: "Rajasthan",
    gym: "Anytime Fitness Jaipur",
    price: "₹900-₹3200/mo",
    youtube: "home gym workout india",
  },
  {
    state: "Kerala",
    gym: "Fitness One Kochi",
    price: "₹800-₹3000/mo",
    youtube: "cardio workout india",
  },
  {
    state: "Uttar Pradesh",
    gym: "Burn Fitness Lucknow",
    price: "₹700-₹2800/mo",
    youtube: "beginner gym plan india",
  },
  {
    state: "Madhya Pradesh",
    gym: "Gold's Gym Indore",
    price: "₹900-₹3400/mo",
    youtube: "best workout for beginners india",
  },
];

const buildMapsUrl = (state, gym) =>
  `https://www.google.com/maps/search/${encodeURIComponent(`${gym} in ${state}, India`)}`;

const buildYoutubeUrl = (query) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;

const TitanFitnessModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-6xl max-h-[92vh] overflow-hidden rounded-3xl border border-slate-700 bg-slate-950 shadow-[0_30px_120px_rgba(2,6,23,0.65)]">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-slate-800 bg-slate-950/95 px-5 py-5 md:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 mb-3">
              <Dumbbell className="h-4 w-4" />
              Titan Fitness Gym
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-white">
              Google Maps + YouTube Fitness Guide for India
            </h3>
            <p className="mt-2 max-w-3xl text-sm md:text-base text-slate-400">
              Tap a city to open Google Maps for gym discovery and use YouTube
              workout searches for routines, plans, and fitness ideas.
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
            aria-label="Close titan fitness details"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[calc(92vh-110px)] overflow-y-auto px-5 py-6 md:px-8">
          <div className="mb-5 flex flex-wrap gap-3 text-xs md:text-sm text-slate-400">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-2 border border-slate-800">
              <MapPin className="h-4 w-4 text-cyan-400" />
              Fitness hubs across India
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-2 border border-slate-800">
              <IndianRupee className="h-4 w-4 text-cyan-400" />
              Monthly gym budget ranges
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-2 border border-slate-800">
              <PlayCircle className="h-4 w-4 text-cyan-400" />
              Workout video search links
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
            {fitnessHubs.map((item) => (
              <article
                key={item.state}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 md:p-5 hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {item.state}
                    </h4>
                    <p className="text-sm text-slate-400">
                      Recommended gym: {item.gym}
                    </p>
                  </div>
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-500/20">
                    {item.price}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href={buildMapsUrl(item.state, item.gym)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
                  >
                    Open Google Maps
                  </a>
                  <a
                    href={buildYoutubeUrl(item.youtube)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
                  >
                    Open YouTube Search
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

export default TitanFitnessModal;
