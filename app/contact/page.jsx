"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import {
    Mail,
    Globe,
    User,
    Send,
} from "lucide-react";

export default function ContactPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSendMessage = (e) => {
        e.preventDefault();

        if (
            name.trim() === "" ||
            email.trim() === "" ||
            message.trim() === ""
        ) {
            toast.error("Please fill in all the fields.");
            return;
        }

        toast.success(
            "✅ Message sent successfully! We'll respond to you soon."
        );

        setName("");
        setEmail("");
        setMessage("");
    };




    return (
        <section className="max-w-5xl mx-auto px-6 py-16">

            <div className="text-center">

                <h1 className="text-5xl font-extrabold">
                    Contact Me
                </h1>

                <p className="text-gray-200 mt-4">
                    Have feedback or would like to connect?
                    I'd love to hear from you.
                </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-10 mt-12">

                <div className="space-y-6">

                    <div className="flex items-center text-pink-600 gap-4">
                        <User className="text-pink-600" />
                        <span>Obinna Ohanaka</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <Mail className="text-pink-600" />
                        <a
                            href="mailto:obinna.c.ohanaka@gmail.com.com"
                            className="text-pink-600 hover:underline"
                        >
                            obinna.c.ohanaka@gmail.com
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        <Globe className="text-pink-600" />
                        <a
                            href="https://github.com/obinnaohanaka"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-600 hover:underline"
                        >
                            Globe
                        </a>
                    </div>

                </div>

                <form
                    onSubmit={handleSendMessage}
                    className="space-y-6"
                >

                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full border border-gray-300 rounded-xl p-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full border border-gray-300 rounded-xl p-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />

                    <textarea
                        rows={5}
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full border border-gray-300 rounded-xl p-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />

                    <button
                        type="submit"
                        className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition"
                    >
                        <Send size={18} />
                        Send Message
                    </button>

                </form>

            </div>

        </section>
    );
}