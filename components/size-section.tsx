export default function SizeSection() {
  return (
    <section className="py-16 bg-[#f8f5f2] text-center">
      <h2 className="text-3xl font-semibold mb-4">
        Choose Your Perfect Size
      </h2>

      <p className="text-gray-600 mb-10">
        Available in 4, 6, 8 & 10 inches — crafted to match your space and style
      </p>

      <div className="flex justify-center">
        <img
          src="/images/size.jpg"
          alt="Miniature Size Guide"
          className="rounded-xl shadow-md max-w-4xl w-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <p className="mt-6 text-sm text-gray-500 text-center">
        All sizes maintain same quality & detailing — only the scale changes.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-sm">
        <div>
          <h3 className="font-semibold">4 Inch</h3>
          <p className="text-gray-500">Compact & Budget Friendly</p>
        </div>
        <div>
          <h3 className="font-semibold">6 Inch ⭐</h3>
          <p className="text-gray-500">Most Popular</p>
        </div>
        <div>
          <h3 className="font-semibold">8 Inch</h3>
          <p className="text-gray-500">More Detailed</p>
        </div>
        <div>
          <h3 className="font-semibold">10 Inch</h3>
          <p className="text-gray-500">Premium Showpiece</p>
        </div>
      </div>
    </section>
  );
}
