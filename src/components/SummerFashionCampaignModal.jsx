import React, { useMemo, useState } from "react";
import { Building2, ChevronRight, GraduationCap, IndianRupee, MapPin, Search, Stethoscope, X } from "lucide-react";

const stateData = [
  { state: "Andhra Pradesh", city: "Visakhapatnam", educationGov: "Andhra University / govt polytechnic options", educationPrivate: "GITAM / private degree colleges", hospitalGov: "King George Hospital, Visakhapatnam", hospitalPrivate: "Apollo / multi-specialty private care" },
  { state: "Arunachal Pradesh", city: "Itanagar", educationGov: "Rajiv Gandhi University / government colleges", educationPrivate: "Private skill and degree institutes", hospitalGov: "Tomo Riba Institute of Health and Medical Sciences", hospitalPrivate: "Private clinics and nursing care centers" },
  { state: "Assam", city: "Guwahati", educationGov: "Gauhati University / govt higher education", educationPrivate: "Assam Don Bosco University / private colleges", hospitalGov: "Gauhati Medical College and Hospital", hospitalPrivate: "Narayana / Apollo-style private hospitals" },
  { state: "Bihar", city: "Patna", educationGov: "Patna University / government colleges", educationPrivate: "Amity-style private campuses / private colleges", hospitalGov: "Patna Medical College and Hospital", hospitalPrivate: "Private multi-specialty hospitals in Patna" },
  { state: "Chhattisgarh", city: "Raipur", educationGov: "Pt. Ravishankar Shukla University / govt colleges", educationPrivate: "IT and management private institutes", hospitalGov: "Dr. Bhimrao Ambedkar Memorial Hospital", hospitalPrivate: "Private hospitals and diagnostic chains" },
  { state: "Goa", city: "Panaji", educationGov: "Goa University / government institutes", educationPrivate: "Private hospitality and management colleges", hospitalGov: "Goa Medical College", hospitalPrivate: "Private coastal healthcare centers" },
  { state: "Gujarat", city: "Ahmedabad", educationGov: "Gujarat University / govt engineering colleges", educationPrivate: "Nirma / private universities", hospitalGov: "Civil Hospital Ahmedabad", hospitalPrivate: "Apollo / Zydus private hospitals" },
  { state: "Haryana", city: "Gurugram", educationGov: "Maharshi Dayanand University / govt colleges", educationPrivate: "Private MBA and engineering institutes", hospitalGov: "Civil Hospital Gurugram", hospitalPrivate: "Medanta / Artemis private hospitals" },
  { state: "Himachal Pradesh", city: "Shimla", educationGov: "Himachal Pradesh University / govt colleges", educationPrivate: "Private hill-state universities", hospitalGov: "Indira Gandhi Medical College", hospitalPrivate: "Private clinics and diagnostic centers" },
  { state: "Jharkhand", city: "Ranchi", educationGov: "Ranchi University / government colleges", educationPrivate: "Private technical institutes", hospitalGov: "Rajendra Institute of Medical Sciences", hospitalPrivate: "Private hospitals and nursing homes" },
  { state: "Karnataka", city: "Bengaluru", educationGov: "Bangalore University / govt colleges", educationPrivate: "Manipal / Christ / private universities", hospitalGov: "Victoria Hospital", hospitalPrivate: "Apollo / Manipal Hospitals" },
  { state: "Kerala", city: "Kochi", educationGov: "Cochin University / govt colleges", educationPrivate: "Amrita / private colleges", hospitalGov: "Government Medical College, Ernakulam", hospitalPrivate: "Aster / private specialty hospitals" },
  { state: "Madhya Pradesh", city: "Bhopal", educationGov: "Barkatullah University / govt colleges", educationPrivate: "Private engineering and management campuses", hospitalGov: "AIIMS Bhopal", hospitalPrivate: "Private multi-specialty hospitals" },
  { state: "Maharashtra", city: "Mumbai", educationGov: "University of Mumbai / govt colleges", educationPrivate: "NMIMS / private colleges", hospitalGov: "JJ Hospital", hospitalPrivate: "Apollo / Hinduja / private care" },
  { state: "Manipur", city: "Imphal", educationGov: "Manipur University / government colleges", educationPrivate: "Private skill and degree institutes", hospitalGov: "Jawaharlal Nehru Institute of Medical Sciences", hospitalPrivate: "Private clinics and nursing homes" },
  { state: "Meghalaya", city: "Shillong", educationGov: "North-Eastern Hill University / govt colleges", educationPrivate: "Private colleges and training centers", hospitalGov: "North Eastern Indira Gandhi Regional Institute of Health and Medical Sciences", hospitalPrivate: "Private hospitals in Shillong" },
  { state: "Mizoram", city: "Aizawl", educationGov: "Mizoram University / government colleges", educationPrivate: "Private institutes and coaching campuses", hospitalGov: "Zoram Medical College", hospitalPrivate: "Private medical and dental clinics" },
  { state: "Nagaland", city: "Kohima", educationGov: "Nagaland University / govt colleges", educationPrivate: "Private degree and skill institutes", hospitalGov: "Naga Hospital Authority Kohima", hospitalPrivate: "Private hospitals in Kohima and Dimapur" },
  { state: "Odisha", city: "Bhubaneswar", educationGov: "Utkal University / govt colleges", educationPrivate: "KIIT / private universities", hospitalGov: "SCB Medical College / govt hospitals", hospitalPrivate: "Apollo Hospitals / private care" },
  { state: "Punjab", city: "Chandigarh", educationGov: "Punjab University / govt colleges", educationPrivate: "Private management and engineering campuses", hospitalGov: "Government Medical College and Hospital, Chandigarh", hospitalPrivate: "Fortis / private specialty hospitals" },
  { state: "Rajasthan", city: "Jaipur", educationGov: "University of Rajasthan / govt colleges", educationPrivate: "Manipal University Jaipur / private colleges", hospitalGov: "Sawai Man Singh Hospital", hospitalPrivate: "Fortis / private hospitals" },
  { state: "Sikkim", city: "Gangtok", educationGov: "Sikkim University / govt institutes", educationPrivate: "Private hospitality and skill colleges", hospitalGov: "STNM Hospital", hospitalPrivate: "Private clinics and diagnostics" },
  { state: "Tamil Nadu", city: "Chennai", educationGov: "University of Madras / govt colleges", educationPrivate: "VIT / SRM / private universities", hospitalGov: "Rajiv Gandhi Government General Hospital", hospitalPrivate: "Apollo / Kauvery private hospitals" },
  { state: "Telangana", city: "Hyderabad", educationGov: "Osmania University / govt colleges", educationPrivate: "BVRIT / private universities", hospitalGov: "Osmania General Hospital", hospitalPrivate: "Yashoda / Apollo private hospitals" },
  { state: "Tripura", city: "Agartala", educationGov: "Tripura University / govt colleges", educationPrivate: "Private degree and nursing institutes", hospitalGov: "GB Pant Hospital", hospitalPrivate: "Private hospitals and clinics" },
  { state: "Uttar Pradesh", city: "Lucknow", educationGov: "University of Lucknow / govt colleges", educationPrivate: "Amity Lucknow / private campuses", hospitalGov: "King George's Medical University / govt hospitals", hospitalPrivate: "Medanta / Sahara-style private hospitals" },
  { state: "Uttarakhand", city: "Dehradun", educationGov: "Hemvati Nandan Bahuguna University / govt colleges", educationPrivate: "UPES / private institutes", hospitalGov: "AIIMS Rishikesh / govt care", hospitalPrivate: "Private hospitals in Dehradun and Haridwar" },
  { state: "West Bengal", city: "Kolkata", educationGov: "University of Calcutta / govt colleges", educationPrivate: "JIS Group / private universities", hospitalGov: "SSKM Hospital", hospitalPrivate: "Apollo Gleneagles / private hospitals" },
];

const buildMapsUrl = (query) => `https://www.google.com/maps/search/${encodeURIComponent(query)}`;
const buildGoogleSearchUrl = (query) => `https://www.google.com/search?q=${encodeURIComponent(query)}`;

const tabConfig = {
  Education: {
    icon: GraduationCap,
    label: "Education",
    accent: "emerald",
    title: "Government and private education options",
    description: "Compare state universities, government colleges, private universities, and career-focused institutes.",
    fieldGov: "educationGov",
    fieldPrivate: "educationPrivate",
    mapLabelGov: (state, city, value) => `government colleges in ${city}, ${state} - ${value}`,
    mapLabelPrivate: (state, city, value) => `private universities in ${city}, ${state} - ${value}`,
  },
  Hospital: {
    icon: Stethoscope,
    label: "Hospital",
    accent: "cyan",
    title: "Government and private hospital options",
    description: "Review public medical colleges, district hospitals, and private multi-specialty care centers.",
    fieldGov: "hospitalGov",
    fieldPrivate: "hospitalPrivate",
    mapLabelGov: (state, city, value) => `government hospital in ${city}, ${state} - ${value}`,
    mapLabelPrivate: (state, city, value) => `private hospital in ${city}, ${state} - ${value}`,
  },
};

const SummerFashionCampaignModal = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState("Education");
  const [selectedState, setSelectedState] = useState(stateData[13]);

  const activeConfig = tabConfig[activeTab];
  const ActiveIcon = activeConfig.icon;

  const selectedInfo = useMemo(
    () => stateData.find((item) => item.state === selectedState.state) || stateData[13],
    [selectedState.state],
  );

  if (!open) return null;

  const governmentValue = selectedInfo[activeConfig.fieldGov];
  const privateValue = selectedInfo[activeConfig.fieldPrivate];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-7xl max-h-[92vh] overflow-hidden rounded-3xl border border-slate-700 bg-slate-950 shadow-[0_30px_120px_rgba(2,6,23,0.65)]">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-slate-800 bg-slate-950/95 px-5 py-5 md:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-300 mb-3">
              <Building2 className="h-4 w-4" />
              Summer Fashion Campaign
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-white">Education and Hospital research window</h3>
            <p className="mt-2 max-w-3xl text-sm md:text-base text-slate-400">
              Open a state-wise research window with government and private details for both education and healthcare across all 28 Indian states.
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
            aria-label="Close Summer Fashion Campaign details"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[calc(92vh-110px)] overflow-y-auto px-5 py-6 md:px-8">
          <div className="mb-5 flex flex-wrap gap-3 text-xs md:text-sm text-slate-400">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-2 border border-slate-800"><MapPin className="h-4 w-4 text-fuchsia-400" />28 Indian states</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-2 border border-slate-800"><ActiveIcon className="h-4 w-4 text-fuchsia-400" />{activeConfig.title}</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-2 border border-slate-800"><Search className="h-4 w-4 text-fuchsia-400" />Google search links</span>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-5 md:gap-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-4 md:p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-white">Choose a state</h4>
                  <p className="text-sm text-slate-400">Tap any state to update the education or hospital details.</p>
                </div>
                <div className="inline-flex rounded-full border border-slate-700 bg-slate-950 p-1">
                  {Object.keys(tabConfig).map((tab) => {
                    const TabIcon = tabConfig[tab].icon;
                    const active = activeTab === tab;
                    return (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${active ? "bg-fuchsia-500 text-slate-950" : "text-slate-400 hover:text-white"}`}
                      >
                        <TabIcon className="h-4 w-4" />
                        {tabConfig[tab].label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-3 max-h-[160px] overflow-y-auto pr-1">
                {stateData.map((item) => {
                  const active = item.state === selectedState.state;
                  return (
                    <button
                      key={item.state}
                      onClick={() => setSelectedState(item)}
                      className={`rounded-full border px-3 py-2 text-sm font-medium transition-colors ${active ? "border-fuchsia-400 bg-fuchsia-500 text-slate-950" : "border-slate-700 bg-slate-900 text-slate-300 hover:border-fuchsia-500/40 hover:text-white"}`}
                    >
                      {item.state}
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 rounded-3xl border border-slate-800 bg-slate-950 p-4 md:p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h5 className="text-xl font-bold text-white">{selectedInfo.state}</h5>
                    <p className="text-sm text-slate-400">Research city: {selectedInfo.city}</p>
                  </div>
                  <span className="rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 px-3 py-1 text-xs font-semibold text-fuchsia-300">
                    {activeTab} view
                  </span>
                </div>

                <p className="text-sm md:text-base text-slate-400 mb-4">{activeConfig.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <article className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                    <div className="flex items-center gap-2 text-emerald-300 font-semibold mb-2">
                      <GraduationCap className="h-4 w-4" /> Government
                    </div>
                    <h6 className="text-lg font-bold text-white mb-2">{governmentValue}</h6>
                    <p className="text-sm text-slate-300 mb-4">Public options, regulated fee structures, and state-run access routes for this state.</p>
                    <div className="flex flex-col gap-2">
                      <a
                        href={buildMapsUrl(activeConfig.mapLabelGov(selectedInfo.state, selectedInfo.city, governmentValue))}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
                      >
                        Open Google Maps
                      </a>
                      <a
                        href={buildGoogleSearchUrl(`government ${activeTab.toLowerCase()} options in ${selectedInfo.city}, ${selectedInfo.state}`)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
                      >
                        Search Google Results
                      </a>
                    </div>
                  </article>

                  <article className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4">
                    <div className="flex items-center gap-2 text-cyan-300 font-semibold mb-2">
                      <Building2 className="h-4 w-4" /> Private
                    </div>
                    <h6 className="text-lg font-bold text-white mb-2">{privateValue}</h6>
                    <p className="text-sm text-slate-300 mb-4">Private institutions, premium services, fast-track admissions, and multi-specialty care.</p>
                    <div className="flex flex-col gap-2">
                      <a
                        href={buildMapsUrl(activeConfig.mapLabelPrivate(selectedInfo.state, selectedInfo.city, privateValue))}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
                      >
                        Open Google Maps
                      </a>
                      <a
                        href={buildGoogleSearchUrl(`private ${activeTab.toLowerCase()} options in ${selectedInfo.city}, ${selectedInfo.state}`)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
                      >
                        Search Google Results
                      </a>
                    </div>
                  </article>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-4 md:p-5">
              <div className="mb-4">
                <h4 className="text-xl md:text-2xl font-bold text-white">Quick preview</h4>
                <p className="text-sm text-slate-400">A compact summary for the active state and category.</p>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                  <div className="flex items-center gap-2 text-fuchsia-300 font-semibold mb-2">
                    <ActiveIcon className="h-4 w-4" /> {activeTab}
                  </div>
                  <h5 className="text-lg font-bold text-white">{selectedInfo.state}</h5>
                  <p className="text-sm text-slate-400">City focus: {selectedInfo.city}</p>
                  <div className="mt-3 grid gap-3 text-sm text-slate-300">
                    <div className="rounded-xl bg-slate-900 p-3 border border-slate-800">
                      <div className="font-semibold text-white mb-1">Government</div>
                      {governmentValue}
                    </div>
                    <div className="rounded-xl bg-slate-900 p-3 border border-slate-800">
                      <div className="font-semibold text-white mb-1">Private</div>
                      {privateValue}
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                  <div className="flex items-center gap-2 text-fuchsia-300 font-semibold mb-2">
                    <IndianRupee className="h-4 w-4" /> Budget perspective
                  </div>
                  <p className="text-sm text-slate-300">
                    Use the government option for lower fees and broader access. Use the private option for faster service, premium facilities, or specialized tracks.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                  <div className="flex items-center gap-2 text-fuchsia-300 font-semibold mb-2">
                    <Search className="h-4 w-4" /> Google search shortcuts
                  </div>
                  <div className="flex flex-col gap-2 text-sm">
                    <a
                      href={buildGoogleSearchUrl(`${activeTab.toLowerCase()} in ${selectedInfo.state} government and private`)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 px-3 py-3 text-slate-200 hover:border-fuchsia-500/40 hover:text-white"
                    >
                      Search full state overview <ChevronRight className="h-4 w-4" />
                    </a>
                    <a
                      href={buildMapsUrl(`${selectedInfo.city}, ${selectedInfo.state} ${activeTab.toLowerCase()} government private`)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 px-3 py-3 text-slate-200 hover:border-fuchsia-500/40 hover:text-white"
                    >
                      Open city maps search <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummerFashionCampaignModal;
