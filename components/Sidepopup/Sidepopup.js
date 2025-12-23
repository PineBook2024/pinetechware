"use client";

import { useEffect, useMemo, useState } from "react";
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  // Get user location info
  const [userInfo, setUserInfo] = useState({
    ip: "",
    city: "",
    region: "",
    country: "",
  });

  const safeJson = async (res) => {
    const text = await res.text();
    if (!text) return { success: false, message: "Empty response from API" };

    try {
      return JSON.parse(text);
    } catch {
      return { success: false, message: "API returned non-JSON response", raw: text };
    }
  };

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

  // ✅ Validation helpers
  const validateFullName = (value) => {
    const v = value.trim();
    if (!v) return "Name is required";
    if (v.length < 2) return "Name must be at least 2 characters";
    return "";
  };

  const validateEmail = (value) => {
    const v = value.trim();
    if (!v) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(v)) return "Please enter a valid email address";
    return "";
  };

  const validatePhone = (value) => {
    const v = value.trim();
    if (!v) return "Phone number is required";
    const digitsOnly = /^\d+$/;
    if (!digitsOnly.test(v)) return "Phone number must contain digits only";
    if (v.length < 9) return "Phone number must be at least 9 digits";
    return "";
  };

  const validateMessage = (value) => {
    const v = value.trim();
    if (!v) return "Message is required";
    if (v.length < 10) return "Message must be at least 10 characters";
    return "";
  };

  // ✅ Validate all fields at once
  const validateAll = () => {
    const nextErrors = {
      fullName: validateFullName(fullName),
      email: validateEmail(email),
      phoneNumber: validatePhone(phoneNumber),
      message: validateMessage(message),
    };

    setErrors(nextErrors);
    return Object.values(nextErrors).every((e) => !e);
  };

  const sendEmailNotification = async () => {
    const payload = {
      fullName,
      email,
      phoneNumber,
      message,
      currentPage: window.location.href,
      referringPage: document.referrer || "Direct visit",
      userIP: userInfo.ip,
      userCity: userInfo.city,
      userRegion: userInfo.region,
      userCountry: userInfo.country,
    };

    const res = await fetch("/api/send-brand-contact-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await safeJson(res);

    if (!res.ok || !data.success) {
      console.error("API failed:", res.status, data);
      return { success: false, message: data.message || "Request failed" };
    }

    return data;
  };

  // ✅ handleChange + live validation
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "fullName") {
      setFullName(value);
      setErrors((prev) => ({ ...prev, fullName: validateFullName(value) }));
      return;
    }

    if (name === "email") {
      setEmail(value);
      setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
      return;
    }

    if (name === "phoneNumber") {
      // allow typing only digits (or empty)
      if (value !== "" && !/^\d*$/.test(value)) {
        setErrors((prev) => ({ ...prev, phoneNumber: "Phone number must contain digits only" }));
        return;
      }

      setPhoneNumber(value);
      setErrors((prev) => ({ ...prev, phoneNumber: validatePhone(value) }));
      return;
    }

    if (name === "message") {
      setMessage(value);
      setErrors((prev) => ({ ...prev, message: validateMessage(value) }));
      return;
    }
  };

  // ✅ handleBlur (show error if user leaves field)
  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name === "fullName") setErrors((p) => ({ ...p, fullName: validateFullName(value) }));
    if (name === "email") setErrors((p) => ({ ...p, email: validateEmail(value) }));
    if (name === "phoneNumber") setErrors((p) => ({ ...p, phoneNumber: validatePhone(value) }));
    if (name === "message") setErrors((p) => ({ ...p, message: validateMessage(value) }));
  };

  // ✅ Disable submit until valid + not submitting
  const isFormValid = useMemo(() => {
    return (
      !validateFullName(fullName) &&
      !validateEmail(email) &&
      !validatePhone(phoneNumber) &&
      !validateMessage(message)
    );
  }, [fullName, email, phoneNumber, message]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ok = validateAll();
    if (!ok) return;

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
          setErrors({ fullName: "", email: "", phoneNumber: "", message: "" });
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
        className={`fixed bg-black inset-y-0 right-0 flex z-[99] max-w-full transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pointer-events-auto w-screen max-w-[38rem]" id="sidePopup">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col divide-y divide-gray-200 shadow-xl bg-black"
            noValidate
          >
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
                    {/* Full Name */}
                    <div>
                      <input
                        type="text"
                        name="fullName"
                        value={fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Name"
                        className="block w-full rounded-[23px] bg-[#1f2020] text-white px-5 py-2"
                        required
                      />
                      {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Email"
                        className="block w-full rounded-[23px] bg-[#26292D] text-white px-5 py-2"
                        required
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <input
                        type="text"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Phone"
                        className="block w-full rounded-[23px] bg-[#26292D] text-white px-5 py-2"
                        required
                      />
                      {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <textarea
                        name="message"
                        value={message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Message"
                        className="block w-full rounded-[23px] bg-[#26292D] text-white px-5 py-2 resize-none"
                        rows={4}
                        required
                      />
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={!isFormValid || isSubmitting}
                      className="w-full px-6 h-[40px] text-black bg-[#3bb9e1] rounded-full disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>

                    {showSuccess && <p className="text-white text-center mt-2">✅ Message sent successfully.</p>}

                    <div className="inline-flex items-start mb-5">
                      <p className="text-[#7D8387] select-none text-sm tracking-wider cursor-text">
                        We&apos;ll keep your information in our CRM to respond to your request. For more details,
                        consult our{" "}
                        <a
                          className="inline-flex text-white hover:text-[#3bb9e1] cursor-pointer ps-1.5"
                          href="/privacy-policy"
                        >
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
