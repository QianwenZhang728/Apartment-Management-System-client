import React from "react";
import { CovidSearch } from "../layout/covid";

const IntroCard = ({ index = "", introObj = {} }) => {
  const { src = "", title = "", des = "" } = introObj;
  return (
    <div className="mx-auto mb-5 font-serif flex flex-col md:flex-row p-5 md:p-6 border rounded-lg shadow hover:shadow-lg">
      <img
        className="rounded-lg object-cover h-64 mb-5 md:mb-0 md:mr-8"
        src={src}
        alt={`intro-card-${index}`}
      />

      <div>
        <p className="text-3xl capitalize whitespace-no-wrap mb-2">{title}</p>
        <p className="text-sm max-w-sm">{des}</p>
      </div>
    </div>
  );
};

export const ItemCell = ({ title, value, className }) => {
  return (
    <div className={`text-center ${className}`}>
      <p className="text-xs truncate">{title}</p>
      <p className="text-4xl font-mono truncate uppercase">{value}</p>
    </div>
  );
};

export const Intro = () => {
  return (
    <>
      <div className="py-3 bg-blue-300 flex flex-col justify-center items-center">
        <p className="text-3xl text-white">Covid-19 Realtime Stastic</p>
        <CovidSearch />
      </div>
      <div className="p-2 flex flex-col my-10 font-serif">
        <p className="text-center text-4xl mb-5">Our Communities</p>
        <p className="text-center max-w-md md:max-w-lg m-auto mb-10 text-sm">
          While we know you don't shop for an apartment home the same way you do
          for a pair of shoes, we believe the place you call home can (and
          should) fit you as perfectly. With the TEAM-20 apartment living
          brands, you now have options to fit your lifestyle in more places than
          ever before.
        </p>
      </div>
      <div className="p-2 flex flex-col my-10">
        <IntroCard
          introObj={{
            src: "/assets/img/intro-card-1.jpg",
            title: "live awesome",
            des:
              "This isn’t just some place to live. This is where you want to be. Where the streets outside your door inspire and the comforts of home recharge you for what’s next. Addressed to impress with an understated cool that is all you.",
          }}
        />
        <IntroCard
          introObj={{
            src: "/assets/img/intro-card-2.jpg",
            title: "This is TEAM-20 Living",
            des:
              "TEAM-20 lets you live modern, with apartments that give you all the pleasures of home with none of the hassles of ownership. It’s the features you want and the freedom to enjoy them.",
          }}
        />
        <IntroCard
          introObj={{
            src: "/assets/img/intro-card-3.jpg",
            title: "Welcome. Home.",
            des:
              "You have responsibilities and priorities. That means making smart choices when it comes to how and where you live. After all, more important than getting “the works” is finding a place and a space that works for you. See where being all smart and sensible can get you.",
          }}
        />
      </div>
      <div className="relative flex flex-col my-10 h-screen">
        <img
          className="absolute w-full h-full object-cover opacity-50"
          style={{ zIndex: -10 }}
          src="/assets/img/intro.jpg"
          alt="intro"
        />
        <div className="font-serif absolute w-full h-full flex flex-col justify-center items-center">
          <p className="text-4xl mb-5">It's Home</p>
          <p className="max-w-md md:max-w-lg italic px-5">
            Every detail that goes into bringing the community alive counts, not
            just the finishing touches. We get that. Which is why we put so much
            into every aspect of Avalon, AVA and eaves by Avalon living - from
            the culture of our company to the sense of community we create on
            and off our properties.
          </p>
        </div>
      </div>
    </>
  );
};
