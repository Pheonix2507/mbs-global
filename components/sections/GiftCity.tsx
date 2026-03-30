import Image from "next/image";

const GiftCity = () => {
  return (
    <section className="bg-zinc-50 dark:bg-black py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Full size responsive image card */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-sm overflow-hidden mb-12 shadow-2xl group border border-zinc-200 dark:border-zinc-800">
           <Image
            src="/giftcity.jpeg" 
            alt="Gift City"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        </div>

        {/* Content Section with consistent margins */}
        <div className="space-y-6 md:space-y-8">
          <h2 className="font-zalando text-4xl md:text-7xl font-semibold tracking-tight text-[#D699FF] leading-tight">
            MBS Global & GIFT City: Powering Next-Gen GCCs
          </h2>
          
          <div className="flex flex-col gap-6 md:gap-8">
            <p className="font-sans text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-5xl">
              Our exclusive channel partnership with Gujarat International Finance Tec-City (GIFT City) positions us at the vanguard of enabling next-generation Global Capability Centers (GCCs), offering a distinctly differentiated and future-ready engagement model for global enterprises.
            </p>
            <p className="font-sans text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-5xl">
             Conceived as India's gateway to global finance, GIFT City has rapidly evolved into a world-class International Financial Services Centre (IFSC), rivaling established hubs such as Singapore and Dubai. With over 500+ multinational organizations 
             already operational and projections exceeding $100 billion in investments alongside 1.5-2 million jobs, it stands as a powerful catalyst for global business expansion.
            </p>
            <p className="font-sans text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-5xl">
            At the core of GIFT City's appeal lies its progressive fiscal and regulatory ecosystem:
	•	100% tax exemption on business profits for any 10 consecutive years within a 15-year window
	•	Zero-rated GST on services exported to offshore clients
	•	Key exemptions across capital gains and transaction taxes
	•	A liberalized IFSC framework enabling seamless cross-border operations

Leveraging this dynamic ecosystem, we deliver an integrated, end-to-end GCC enablement model—spanning market entry strategy, regulatory advisory, infrastructure setup, and specialized talent acquisition. Our on-ground presence and ecosystem access ensure accelerated execution with minimal friction.
            </p>
            <p className="font-sans text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-5xl">
            Whether establishing a finance hub, innovation center, or digital capability unit, we serve as your strategic partner in unlocking speed, efficiency, and sustained value creation within India's most forward-looking business jurisdiction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftCity;
