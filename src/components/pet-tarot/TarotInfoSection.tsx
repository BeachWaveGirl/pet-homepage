
const TarotInfoSection = () => {
  return (
    <>
      {/* About Tarot Reading Section */}
      <div className="mt-16 p-6 bg-[#111111] rounded-lg border border-gray-800">
        <h2 className="text-xl font-bold mb-4 text-white">🌟 ABOUT PET TAROT READINGS</h2>
        <p className="text-gray-300 mb-4">
          Pet tarot readings work by tapping into the energy and spiritual connection between you and your pet.
          When you focus on your pet while selecting a card, your intuition guides you to choose the card
          that best reflects their energy or message for you.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="flex items-start">
            <span className="text-white mr-2">✔️</span>
            <p className="text-gray-300">See your pet's true spiritual nature</p>
          </div>
          <div className="flex items-start">
            <span className="text-white mr-2">✔️</span>
            <p className="text-gray-300">Understand their unique energy</p>
          </div>
          <div className="flex items-start">
            <span className="text-white mr-2">✔️</span>
            <p className="text-gray-300">Receive guidance about your connection</p>
          </div>
          <div className="flex items-start">
            <span className="text-white mr-2">✔️</span>
            <p className="text-gray-300">Get insights into behavior patterns</p>
          </div>
        </div>
      </div>

      {/* How to Use Instructions */}
      <div className="mt-10 mb-16 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">How to Use Pet Tarot</h2>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex items-center justify-center bg-white text-black rounded-full w-8 h-8 font-bold mr-4 shrink-0">
              1
            </div>
            <p className="text-gray-300">
              Take a quiet moment to think about your pet.
            </p>
          </div>
          <div className="flex items-start">
            <div className="flex items-center justify-center bg-white text-black rounded-full w-8 h-8 font-bold mr-4 shrink-0">
              2
            </div>
            <p className="text-gray-300">
              Pick a card that calls to you from the deck above.
            </p>
          </div>
          <div className="flex items-start">
            <div className="flex items-center justify-center bg-white text-black rounded-full w-8 h-8 font-bold mr-4 shrink-0">
              3
            </div>
            <p className="text-gray-300">
              Receive a gentle, emotional reading inspired by your pet's love.
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="text-center py-6 border-t border-gray-800 mt-10 text-sm text-gray-400">
        <p>
          This tarot experience is for emotional support and entertainment purposes only. It is not a substitute for professional advice or therapy.
        </p>
      </div>
    </>
  );
};

export default TarotInfoSection;
