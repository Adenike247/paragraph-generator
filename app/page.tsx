'use client';
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(1);
  const [text, setText] = useState<string[]>([]);

  const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod, lacus eget tincidunt gravida, nisl sapien lacinia odio, sit amet dictum sem ligula ut augue. Integer dignissim, justo at elementum dapibus, purus odio sodales libero, vel volutpat nulla libero ut lorem.",
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed suscipit, ligula in aliquam euismod, ligula urna facilisis erat, nec rhoncus orci nunc id nisl.",
    "Suspendisse potenti. Aenean vel facilisis tortor. Morbi luctus odio id libero cursus, sed condimentum lorem dignissim. Mauris tincidunt, metus sed imperdiet posuere, nisl justo dapibus lacus, eget facilisis metus risus sed purus.",
    "Curabitur ac felis sed erat laoreet laoreet. Donec convallis interdum justo, nec blandit enim porttitor vel. Phasellus mattis ultricies risus, nec accumsan mauris efficitur nec. Aliquam erat volutpat. Vestibulum ac tincidunt metus.",
    "Nam euismod purus id leo lacinia, ac porttitor justo rhoncus. Duis et nibh risus. Maecenas tempus tristique lorem, nec commodo lectus. Proin sagittis, magna ac feugiat pretium, tortor sapien tincidunt lorem, in eleifend neque leo sit amet mi.",
    "Etiam non dignissim magna. Morbi ullamcorper justo in urna condimentum, sed fringilla nisl malesuada. Aenean ac ex vel felis consectetur euismod nec vitae nisl. Suspendisse commodo ligula nec magna laoreet, vel suscipit ligula pulvinar.",
    "Fusce vel mattis libero. Sed tincidunt, justo ut efficitur euismod, purus lorem feugiat turpis, eget suscipit dolor turpis sit amet sapien. Donec ac augue ac elit ornare dictum a ac nunc. Nullam vitae gravida eros, sit amet convallis lacus.",
    "Ut scelerisque metus sed tincidunt tempor. Mauris id volutpat leo. Donec interdum nibh nec ante consectetur pretium. Integer in vestibulum ligula. Aliquam erat volutpat. Curabitur efficitur velit ac tortor porta iaculis.",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let amount = count;

    if (amount < 1) amount = 1;
    if (amount > 8) amount = 8;

    setText(paragraphs.slice(0, amount));
  };

  return (
    <section className="bg-gray-50 px-4 py-5 min-h-screen flex flex-col items-center">
      <h4 className="text-2xl font-semibold text-gray-800 text-center mb-6">
        Tired of boring lorem ipsum?
      </h4>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <input
          value={count}
          name="amount"
          type="number"
          min="1"
          max="8"
          onChange={(e) => setCount(Number(e.target.value))}
          className="w-full sm:w-32 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full sm:w-auto bg-blue-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
        >
          Generate
        </button>
      </form>

      {text.length > 0 && (
        <div className="mt-6 space-y-4 text-gray-700 max-w-2xl">
          {text.map((item, index) => (
            <p key={index} className="leading-relaxed">
              {item}
            </p>
          ))}
        </div>
      )}
    </section>
  );
}
