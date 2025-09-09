import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_a4e7z3g",         // your Service ID
        "template_2g5lwhh",        // your Template ID
        formRef.current,
        "-o8n4Nnw7nY1xjN0j"        // your Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          formRef.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          setStatus("Failed to send message ❌. Try again later.");
        }
      );
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="glass-card animate-slide-up space-y-6"
    >
      
      {/* Status Message */}
      {status && (
        <p className="text-center text-sm text-muted mt-2">{status}</p>
      )}
      
      <h3 className="text-2xl font-semibold mb-6 text-foreground">
        Send Message
      </h3>

      {/* Name Input */}
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="glass w-full border border-primary/30 focus:border-primary/60 rounded-md p-3 transition-colors duration-300"
        />
      </div>

      {/* Email Input */}
      <div>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="glass w-full border border-primary/30 focus:border-primary/60 rounded-md p-3 transition-colors duration-300"
        />
      </div>

      {/* Message Textarea */}
      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="glass w-full border border-primary/30 focus:border-primary/60 rounded-md p-3 transition-colors duration-300 resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="glass-button w-full text-lg py-3 font-semibold"
      >
        Send Message
      </button>
    </form>
  );
}
