"use client";

import { useState } from "react";
import { ImCross } from "react-icons/im";
import { usePopup } from "@/context/PopupContext"; 

export default function Sidepopup() {
  const { isOpen, closePopup } = usePopup(); 
  const [formData, setFormData] = useState({ name: "", email: "", message: "" }); 
  const [loading, setLoading] = useState(false); // Loading state
  const [responseMessage, setResponseMessage] = useState(""); 

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target; // Target ke name aur value ko destructure karein
    setFormData(prevState => ({
      ...prevState,
      [name]: value // Dynamic key value set karein
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setLoading(false);
      setResponseMessage(data.message);

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("❌ Fetch error:", error);
      setResponseMessage("❌ Failed to send message.");
      setLoading(false);
    }
  };

  return (
    <div>
      <div className={`fixed bg-black inset-y-0 right-0 flex z-[99] max-w-full transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="pointer-events-auto w-screen max-w-[38rem]" id="sidePopup">
          <form onSubmit={handleSubmit} className="flex flex-col divide-y divide-gray-200 shadow-xl bg-black">
            <div className="h-0 flex-1 overflow-y-auto">
              <div className="flex flex-1 flex-col justify-between">
                <div className="px-4 sm:px-6 pb-8 overflow-x-hidden">
                  <div className="relative top-6 sm:left-[91%] left-[85%] rounded-full">
                    <button
                      type="button"
                      className="flex justify-center items-center rounded-full bg-white text-sm font-semibold text-gray-900 h-[40px] w-[40px] md:h-[50px] md:w-[50px] ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      onClick={closePopup}>
                      <ImCross />
                    </button>
                  </div>
                  <h2 className="font-bold 2xl:mt-4 xl:mt-8 mb-5 text-4xl xl:text-5xl 2xl:text-6xl  text-white">
                    Got a <span className="text-theme">project?</span>
                  </h2>
                  <p className="text-[#7D8387] font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl">
                    Share the details of your project – like scope, timeframes, or business challenges.
                  </p>
                  <p className="text-[#7D8387] font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl">
                    Our team will thoroughly review the materials and respond to you promptly.
                  </p>
                  <div className="my-8">
                    <p className="text-[#7D8387] font-medium text-xs xl:text-sm 2xl:text-base">I&apos;m interested in</p>
                    <div className="mt-2">
                      <button type="button" className="bg-transparent text-white py-2 px-3.5 my-2 mr-2 text-sm rounded-full border border-white font-semibold">Custom Software</button>
                      <button type="button" className="bg-transparent text-white py-2 px-3.5 my-2 mr-2 text-sm rounded-full border border-white font-semibold">Mobile App</button>
                      <button type="button" className="bg-transparent text-white py-2 px-3.5 my-2 mr-2 text-sm rounded-full border border-white font-semibold">UX/UI</button>
                      <button type="button" className="bg-transparent text-white py-2 px-3.5 my-2 mr-2 text-sm rounded-full border border-white font-semibold">Web Development</button>
                    </div>
                  </div>
                  <div className="my-8 space-y-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="block w-full rounded-[23px] bg-[#1f2020] text-white px-5 py-2"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="block w-full rounded-[23px] bg-[#26292D] text-white px-5 py-2"
                    />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      className="block w-full rounded-[23px] bg-[#26292D] text-white px-5 py-2 resize-none"
                    />
                    <button type="submit" disabled={loading} className="w-full px-6 h-[40px] text-black bg-[#3bb9e1] rounded-full">
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                    {responseMessage && (
                      <p className="text-white text-center mt-2">{responseMessage}</p>
                    )}
                    <div className="inline-flex items-start mb-5">
                      <p className="text-[#7D8387] select-none text-sm tracking-wider cursor-text">
                        We&apos;ll keep your information in our CRM to respond to your request. For more details, consult our <a className="inline-flex text-white hover:text-[#3bb9e1] cursor-pointer ps-1.5" href="/privacy-policy/">privacy policy.</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}