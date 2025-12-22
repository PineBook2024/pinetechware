"use client";

import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { usePopup } from "@/context/PopupContext";
import { useRouter } from "next/navigation";

export default function Sidepopup() {
  const router = useRouter();
  const { isOpen, closePopup } = usePopup();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [userInfo, setUserInfo] = useState({
    ip: "",
    city: "",
    region: "",
    country: "",
  });

  useEffect(() => {
    fetchUserRegion();
  }, []);

  const fetchUserRegion = async () => {
    try {
      const response = await fetch("https://ipwhois.app/json/");
      const data = await response.json();

      setUserInfo({
        ip: data.ip || "",
        city: data.city || "",
        region: data.region || "",
        country: data.country || "",
      });
    } catch (error) {
      console.error("Failed to fetch user region:", error);
    }
  };

  const sendEmailNotification = async () => {
    const response = await fetch("/api/send-brand-contact-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName,
        email,
        phoneNumber,
        message,
        currentPage: typeof window !== "undefined" ? window.location.href : "",
        referringPage:
          typeof document !== "undefined" ? document.referrer || "Direct visit" : "Direct visit",
        userIP: userInfo.ip,
        userCity: userInfo.city,
        userRegion: userInfo.region,
        userCountry: userInfo.country,
      }),
    });

    return response.json();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "fullName") setFullName(value);
    if (name === "email") setEmail(value);
    if (name === "message") setMessage(value);

    if (name === "phoneNumber") {
      const phoneRegex = /^\d*$/; // digits only
      if (!phoneRegex.test(value)) {
        setPhoneError("Invalid phone number format");
        return;
      }

      setPhoneNumber(value);

      if (value.length > 0 && value.length < 9) {
        setPhoneError("Phone number must be at least 9 digits");
      } else {
        setPhoneError("");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (phoneNumber && phoneNumber.length < 9) {
      setPhoneError("Phone number must be at least 9 digits");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await sendEmailNotification();

      if (result?.success) {
        setShowSuccess(true);

        setTimeout(() => {
          router.push("/thank-you");
        }, 1200);

        setTimeout(() => {
          setShowSuccess(false);
          setFullName("");
          setEmail("");
          setPhoneNumber("");
          setMessage("");
          closePopup();
        }, 2500);
      } else {
        alert(result?.message || "There was an error submitting your form. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div
        className={`fixed bg-black inset-y-0 right-0 flex z-[99] max-w-full transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="pointer-events-auto w-screen max-w-[38rem]" id="sidePopup">
          <form onSubmit={handleSubmit} className="flex flex-col divide-y divide-gray-200 shadow-xl bg-black">
            <div className="h-0 flex-1 overflow-y-auto">
              <div className="flex flex-1 flex-col justify-between">
                <div className="px-4 sm:px-6 pb-8 overflow-x-hidden">
                  <div className="relative top-6 sm:left-[91%] left-[85%] rounded-full">
                    <button
                      type="button"
                      className="flex justify-center items-center rounded-full bg-white text-sm font-semibold text-gray-900 h-[40px] w-[40px] md:h-[50px] md:w-[50px] ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      onClick={closePopup}
                    >
                      <ImCross />
                    </button>
                  </div>

                  <h2 className="font-bold 2xl:mt-4 xl:mt-8 mb-5 text-4xl xl:text-5xl 2xl:text-6xl text-white">
                    Got a <span className="text-theme">project?</span>
                  </h2>

                  <p className="text-[#7D8387] font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl">
                    Share the details of your project – like scope, timeframes, or business challenges.
                  </p>
                  <p className="text-[#7D8387] font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl">
                    Our team will thoroughly review the materials and respond to you promptly.
                  </p>

                  <div className="my-8 space-y-4">
                    <input
                      type="text"
                      name="fullName"
                      value={fullName}
                      onChange={handleChange}
                      placeholder="Name"
                      className="block w-full rounded-[23px] bg-[#1f2020] text-white px-5 py-2"
                      required
                    />

                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="block w-full rounded-[23px] bg-[#26292D] text-white px-5 py-2"
                      required
                    />

                    <input
                      type="text"
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={handleChange}
                      placeholder="Phone"
                      className="block w-full rounded-[23px] bg-[#26292D] text-white px-5 py-2"
                    />

                    {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}

                    <textarea
                      name="message"
                      value={message}
                      onChange={handleChange}
                      placeholder="Message"
                      className="block w-full rounded-[23px] bg-[#26292D] text-white px-5 py-2 resize-none"
                      rows={4}
                      required
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 h-[40px] text-black bg-[#3bb9e1] rounded-full disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>

                    {showSuccess && (
                      <p className="text-white text-center mt-2">✅ Message sent successfully.</p>
                    )}

                    <div className="inline-flex items-start mb-5">
                      <p className="text-[#7D8387] select-none text-sm tracking-wider cursor-text">
                        We&apos;ll keep your information in our CRM to respond to your request. For more details,
                        consult our{" "}
                        <a className="inline-flex text-white hover:text-[#3bb9e1] cursor-pointer ps-1.5" href="/privacy-policy">
                          privacy policy.
                        </a>
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
