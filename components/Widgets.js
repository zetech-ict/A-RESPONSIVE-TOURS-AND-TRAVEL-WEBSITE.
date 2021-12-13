import React from "react";
import Contact from "./Contact";

function Widgets() {
  const contacts = [
    { src: "https://links.papareact.com/d0c", name: "Njiru Titus" },
    { src: "https://links.papareact.com/d0c", name: "Rashid Wario" },
    { src: "https://links.papareact.com/r57", name: "Tom Crook" },
    { src: "https://links.papareact.com/d0c", name: "Jay johnson" },
    { src: "https://links.papareact.com/6gg", name: "Ngolo Kante" },
    { src: "https://links.papareact.com/r57", name: "Jaba Limpueza" },
  ];

  return (

    <div className="flex-grow h-screen pb-44 pt-6  overflow-y-auto scrollbar-hide mt-10">
    <div className="hidden  p-1 mt-20  rounded-xl lg:flex flex-col w-60 text-white mr-10 bg-gray-700 h-96 mt">
<h4 className="flex items-center justify-center">Online Friends</h4>
      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>

    <div className="hidden  p-1 mt-20  rounded-xl lg:flex flex-col w-60 text-white mr-10 bg-gray-700 h-96 mt">
<h4 className="flex items-center justify-center">Featured</h4>
      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>

    </div>
  );
}

export default Widgets;
